import path from 'path';

import LRUCache from 'lru-cache';
import { TFile } from 'obsidian';

import { getVaultRoot } from './helpers';
import ReferenceList from './main';
import {
  areSetsEqual,
  extractCiteKeys,
  pandocHTMLToBibFragment,
  pandocMarkdownToHTML,
} from './mdToReferenceList';

interface DocCache {
  keys: Set<string>;
  bib: HTMLElement;
}

export class ViewManager {
  plugin: ReferenceList;
  cache: LRUCache<TFile, DocCache>;

  constructor(plugin: ReferenceList) {
    this.plugin = plugin;
    this.cache = new LRUCache({ max: 20 });
  }

  getBibForCiteKey(file: TFile, key: string) {
    if (!this.cache.has(file)) {
      return null;
    }

    const cache = this.cache.get(file);

    if (!cache.keys.has(key)) {
      return null;
    }

    const html = cache.bib.querySelector(`[id="ref-${key.slice(1)}"]`);

    if (!html) {
      return null;
    }

    return html.outerHTML;
  }

  async getReferenceList(file: TFile, content: string) {
    const citeKeys = extractCiteKeys(content);

    if (citeKeys.size === 0) {
      return null;
    }

    const cachedDoc = this.cache.has(file) ? this.cache.get(file) : null;

    if (!cachedDoc || !areSetsEqual(cachedDoc.keys, citeKeys)) {
      try {
        const result = {
          keys: citeKeys,
          bib: pandocHTMLToBibFragment(
            await pandocMarkdownToHTML(
              this.plugin.settings,
              path.join(getVaultRoot(), file.path)
            )
          ),
        };

        this.cache.set(file, result);

        return result.bib;
      } catch (e) {
        console.error(e);
        return null;
      }
    }

    return cachedDoc.bib;
  }
}
