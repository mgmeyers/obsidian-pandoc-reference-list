import { EditorView } from '@codemirror/view';

import LRUCache from 'lru-cache';
import { MarkdownView, TFile } from 'obsidian';

import ReferenceList from './main';
import {
  areSetsEqual,
  extractCiteKeys,
  pandocHTMLToBibFragment,
  pandocMarkdownToHTML,
} from './mdToReferenceList';
import { setResolvedCiteKeys } from './editorExtension';

interface DocCache {
  keys: Set<string>;
  resolvedKeys: Set<string>;
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
        const bib = pandocHTMLToBibFragment(
          await pandocMarkdownToHTML(this.plugin.settings, citeKeys)
        );

        const result = {
          keys: citeKeys,
          resolvedKeys: this.getResolvedKeys(bib),
          bib: bib,
        };

        this.cache.set(file, result);

        app.workspace.getLeavesOfType('markdown').find((l) => {
          const view = l.view as MarkdownView;
          if (view.file === file) {
            view.previewMode.rerender(true);

            const cm = (view.editor as any).cm as EditorView;

            if (cm.dispatch) {
              cm.dispatch({
                effects: [setResolvedCiteKeys.of(result.resolvedKeys)],
              });
            }
          }
        });

        return result.bib;
      } catch (e) {
        if (!e.message.includes('references container not found')) {
          console.error(e);
        }
        return null;
      }
    }

    return cachedDoc.bib;
  }

  getResolvedKeys(bib: HTMLElement) {
    return new Set(
      bib
        .findAll('.csl-entry')
        .map((e) => e.getAttr('id').replace(/^ref-/, '@'))
    );
  }

  getReferenceListForSource(filePath: string) {
    const file = app.vault.getAbstractFileByPath(filePath);
    if (file && file instanceof TFile && this.cache.has(file)) {
      return this.cache.get(file).bib;
    }
  }

  haveEntryForCiteKey(filePath: string, key: string) {
    const file = app.vault.getAbstractFileByPath(filePath);
    if (file && file instanceof TFile && this.cache.has(file)) {
      return this.cache.get(file).resolvedKeys.has(key);
    }

    return false;
  }
}
