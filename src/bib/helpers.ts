import { execa } from 'execa';
import fs from 'fs';
import path from 'path';
import https from 'https';
import download from 'download';
import { request } from 'http';
import { CSLList, PartialCSLEntry } from './types';

export const DEFAULT_ZOTERO_PORT = '23119';

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export async function bibToCSL(
  bibPath: string,
  pathToPandoc: string,
  getVaultRoot?: () => string
): Promise<PartialCSLEntry[]> {
  if (!fs.existsSync(bibPath)) {
    const orig = bibPath;
    if (getVaultRoot) {
      bibPath = path.join(getVaultRoot(), bibPath);
      if (!fs.existsSync(bibPath)) {
        throw new Error(`bibToCSL: cannot access bibliography file '${orig}'.`);
      }
    } else {
      throw new Error(`bibToCSL: cannot access bibliography file '${orig}'.`);
    }
  }

  const parsed = path.parse(bibPath);
  if (parsed.ext === '.json') {
    return new Promise((res, rej) => {
      fs.readFile(bibPath, (err, data) => {
        if (err) return rej(err);
        try {
          res(JSON.parse(data.toString()));
        } catch (e) {
          rej(e);
        }
      });
    });
  }

  if (!pathToPandoc) {
    throw new Error('bibToCSL: path to pandoc is required for non CSL files.');
  }

  if (!fs.existsSync(pathToPandoc)) {
    throw new Error(`bibToCSL: cannot access pandoc at '${pathToPandoc}'.`);
  }

  const args = [bibPath, '-t', 'csljson', '--quiet'];

  const res = await execa(pathToPandoc, args);

  if (res.stderr) {
    throw new Error(`bibToCSL: ${res.stderr}`);
  }

  return JSON.parse(res.stdout);
}

export async function getCSLLocale(
  localeCache: Map<string, string>,
  cacheDir: string,
  lang: string
) {
  if (localeCache.has(lang)) {
    return localeCache.get(lang);
  }

  const url = `https://raw.githubusercontent.com/citation-style-language/locales/master/locales-${lang}.xml`;
  const outpath = path.join(cacheDir, `locales-${lang}.xml`);

  ensureDir(cacheDir);
  if (fs.existsSync(outpath)) {
    const localeData = fs.readFileSync(outpath).toString();
    localeCache.set(lang, localeData);
    return localeData;
  }

  const str = await new Promise<string>((res, rej) => {
    https.get(url, (result) => {
      let output = '';

      result.setEncoding('utf8');
      result.on('data', (chunk) => (output += chunk));
      result.on('error', (e) => rej(`Downloading locale: ${e}`));
      result.on('close', () => {
        rej(new Error('Error: cannot download locale'));
      });
      result.on('end', () => {
        try {
          res(output);
        } catch (e) {
          rej(e);
        }
      });
    });
  });

  fs.writeFileSync(outpath, str);
  localeCache.set(lang, str);
  return str;
}

export async function getCSLStyle(
  styleCache: Map<string, string>,
  cacheDir: string,
  url: string,
  explicitPath?: string
) {
  if (explicitPath) {
    if (styleCache.has(explicitPath)) {
      return styleCache.get(explicitPath);
    }

    if (!fs.existsSync(explicitPath)) {
      throw new Error(
        `Error: retrieving citation style; Cannot find file '${explicitPath}'.`
      );
    }

    const styleData = fs.readFileSync(explicitPath).toString();
    styleCache.set(explicitPath, styleData);
    return styleData;
  }

  if (styleCache.has(url)) {
    return styleCache.get(url);
  }

  const fileFromURL = url.split('/').pop();
  const outpath = path.join(cacheDir, fileFromURL);

  ensureDir(cacheDir);
  if (fs.existsSync(outpath)) {
    const styleData = fs.readFileSync(outpath).toString();
    styleCache.set(url, styleData);
    return styleData;
  }

  const str = await new Promise<string>((res, rej) => {
    https.get(url, (result) => {
      let output = '';

      result.setEncoding('utf8');
      result.on('data', (chunk) => (output += chunk));
      result.on('error', (e) => rej(`Error downloading CSL: ${e}`));
      result.on('close', () => {
        rej(new Error('Error: cannot download CSL'));
      });
      result.on('end', () => {
        try {
          res(output);
        } catch (e) {
          rej(e);
        }
      });
    });
  });

  fs.writeFileSync(outpath, str);
  styleCache.set(url, str);
  return str;
}

export const defaultHeaders = {
  'Content-Type': 'application/json',
  'User-Agent': 'obsidian/zotero',
  Accept: 'application/json',
  Connection: 'keep-alive',
};

function getGlobal() {
  if (window?.activeWindow) return activeWindow;
  if (window) return window;
  return global;
}

export async function getZUserGroups(
  port: string = DEFAULT_ZOTERO_PORT
): Promise<Array<{ id: number; name: string }>> {
  if (!(await isZoteroRunning(port))) return null;

  return new Promise((res, rej) => {
    const body = JSON.stringify({
      jsonrpc: '2.0',
      method: 'user.groups',
    });

    const postRequest = request(
      {
        host: '127.0.0.1',
        port: port,
        path: '/better-bibtex/json-rpc',
        method: 'POST',
        headers: {
          ...defaultHeaders,
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (result) => {
        let output = '';

        result.setEncoding('utf8');
        result.on('data', (chunk) => (output += chunk));
        result.on('error', (e) => rej(`Error connecting to Zotero: ${e}`));
        result.on('close', () => {
          rej(new Error('Error: cannot connect to Zotero'));
        });
        result.on('end', () => {
          try {
            res(JSON.parse(output).result);
          } catch (e) {
            rej(e);
          }
        });
      }
    );

    postRequest.write(body);
    postRequest.end();
  });
}

export async function getZBib(
  port: string = DEFAULT_ZOTERO_PORT,
  cacheDir: string,
  groupId: number
) {
  const cached = path.join(cacheDir, `zotero-library-${groupId}.json`);

  if (!(await isZoteroRunning(port))) {
    ensureDir(cacheDir);
    if (fs.existsSync(cached)) {
      return JSON.parse(fs.readFileSync(cached).toString()) as CSLList;
    }
    return null;
  }

  const bib = await download(
    `http://127.0.0.1:${port}/better-bibtex/export/library?/${groupId}/library.json`
  );

  const str = bib.toString();

  fs.writeFileSync(cached, str);

  return JSON.parse(str) as CSLList;
}

export async function isZoteroRunning(port: string = DEFAULT_ZOTERO_PORT) {
  const p = download(`http://127.0.0.1:${port}/better-bibtex/cayw?probe=true`);
  const res = await Promise.race([
    p,
    new Promise((res) => {
      getGlobal().setTimeout(() => {
        res(null);
        p.destroy();
      }, 150);
    }),
  ]);

  return res?.toString() === 'ready';
}
