import path from 'path';

import { execa } from 'execa';
import which from 'which';

import { citekeyRegExp } from './regExps';
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

export function extractCiteKeys(md: string): Set<string> {
  const matches = md.matchAll(citekeyRegExp);
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
  keys: Set<string>
): Promise<string> {
  if (!settings.pathToPandoc) {
    throw new Error('pandocMarkdownToHTML path to pandoc is required');
  }

  if (!settings.pathToBibliography) {
    throw new Error('pandocMarkdownToHTML bibliography file is required');
  }

  const args = [
    '-f',
    'markdown',
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
    const pathToPandoc = await which('pandoc');
    const result = await execa(pathToPandoc || settings.pathToPandoc, args, {
      input: `---\nnocite: "${Array.from(keys).join(', ')}"\n---\n`,
    });

    // istanbul ignore next
    if (result.stderr) {
      // istanbul ignore next
      throw new Error(`pandocMarkdownToHTML ${result.stderr}`);
    }

    return result.stdout;
  } catch (e) {
    throw new Error(`pandocMarkdownToHTML ${e.message}`);
  }
}

export function pandocHTMLToBibFragment(html: string): HTMLElement {
  if (!html) {
    throw new Error('pandocHTMLToBibFragment received empty HTML string');
  }

  let parsed = new DOMParser().parseFromString(html, 'text/html');
  const refs = parsed.getElementById('refs');

  if (!refs) {
    throw new Error('pandocHTMLToBibFragment references container not found');
  }
  parsed = null;

  return refs;
}
