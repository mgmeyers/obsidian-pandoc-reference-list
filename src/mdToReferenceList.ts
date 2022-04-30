import { execa } from 'execa';
import path from 'path';

import { ReferenceListSettings } from './settings';

export function areSetsEqual<T>(as: Set<T>, bs: Set<T>) {
  if (as.size !== bs.size) return false;
  for (const a of as) if (!bs.has(a)) return false;
  return true;
}

function resolveHome(filepath: string) {
  if (filepath[0] === '~' && process.env.HOME) {
      return path.join(process.env.HOME, filepath.slice(1));
  }
  return filepath;
}

const citekeyRe = /(@[^\s]+)/g;

export function extractCiteKeys(md: string): Set<string> {
  const matches = md.matchAll(citekeyRe);
  const output = new Set<string>();

  for (const match of matches) {
    if (!output.has(match[1])) {
      output.add(match[1]);
    }
  }

  return output;
}

export async function pandocMarkdownToHTML(
  settings: ReferenceListSettings,
  filePath: string
): Promise<string> {
  if (!settings.pathToPandoc) {
    throw new Error('Error: pandocMarkdownToHTML path to pandoc is required');
  }

  if (!filePath) {
    throw new Error('Error: pandocMarkdownToHTML file path is required');
  }

  if (!settings.pathToBibliography) {
    throw new Error(
      'Error: pandocMarkdownToHTML bibliography file is required'
    );
  }

  const args = [
    resolveHome(filePath),
    '-t',
    'html',
    '--citeproc',
    '--quiet',
    `--bibliography=${resolveHome(settings.pathToBibliography)}`,
  ];

  if (settings.cslStyle) {
    args.push(`--csl=${resolveHome(settings.cslStyle)}`);
  }

  try {
    const result = await execa(settings.pathToPandoc, args);

    // istanbul ignore next
    if (result.stderr) {
      // istanbul ignore next
      throw new Error(`Error: pandocMarkdownToHTML ${result.stderr}`);
    }

    return result.stdout;
  } catch (e) {
    throw new Error(`Error: pandocMarkdownToHTML ${e.message}`);
  }
}

export function pandocHTMLToBibFragment(html: string): HTMLElement {
  if (!html) {
    throw new Error(
      'Error: pandocHTMLToBibFragment received empty HTML string'
    );
  }

  let parsed = new DOMParser().parseFromString(html, 'text/html');
  const refs = parsed.getElementById('refs');

  if (!refs) {
    throw new Error(
      'Error: pandocHTMLToBibFragment references container not found'
    );
  }
  parsed = null;

  return refs;
}
