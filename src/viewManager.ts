import { EditorView } from '@codemirror/view';
import LRUCache from 'lru-cache';
import { MarkdownView, TFile } from 'obsidian';

import { setCiteKeyCache } from './editorExtension';
import ReferenceList from './main';
import {
  areSetsEqual,
  extractCiteKeys,
  pandocHTMLToBibFragment,
  pandocMarkdownToHTML,
} from './mdToReferenceList';
import { ReferenceListSettings } from './settings';

export interface DocCache {
  keys: Set<string>;
  resolvedKeys: Set<string>;
  unresolvedKeys: Set<string>;
  bib: HTMLElement;
  cslStyle?: string;
  pathToBibliography?: string;
}

function getCSLStyle(file: TFile, settings: ReferenceListSettings) {
  const metadata = app.metadataCache.getFileCache(file);

  if (!metadata?.frontmatter) {
    return settings.cslStyle;
  }

  if (metadata.frontmatter.csl) {
    return metadata.frontmatter.csl;
  }

  if (metadata.frontmatter['citation-style']) {
    return metadata.frontmatter.csl;
  }

  return settings.cslStyle;
}

function getBibliography(file: TFile, settings: ReferenceListSettings) {
  const metadata = app.metadataCache.getFileCache(file);

  if (metadata?.frontmatter?.bibliography) {
    return metadata.frontmatter.bibliography;
  }

  return settings.pathToBibliography;
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

    return html.cloneNode(true);
  }

  async getReferenceList(file: TFile, content: string) {
    const citeKeys = extractCiteKeys(content);

    if (citeKeys.size === 0) {
      return null;
    }

    const cachedDoc = this.cache.has(file) ? this.cache.get(file) : null;
    const cslStyle = getCSLStyle(file, this.plugin.settings);
    const pathToBibliography = getBibliography(file, this.plugin.settings);

    if (
      !cachedDoc ||
      !areSetsEqual(cachedDoc.keys, citeKeys) ||
      cachedDoc.cslStyle !== cslStyle ||
      cachedDoc.pathToBibliography !== pathToBibliography
    ) {
      try {
        const htmlStr = await pandocMarkdownToHTML(
          {
            ...this.plugin.settings,
            cslStyle,
            pathToBibliography,
          },
          citeKeys
        );

        const setNull = (): null => {
          const resolvedKeys = new Set<string>();
          const result = {
            keys: citeKeys,
            resolvedKeys,
            unresolvedKeys: this.getUnresolvedKeys(citeKeys, resolvedKeys),
            bib: null as HTMLElement,
            cslStyle,
            pathToBibliography,
          };

          this.cache.set(file, result);
          this.dispatchResult(file, result);

          return null;
        };

        if (!htmlStr) {
          return setNull();
        }

        const bib = pandocHTMLToBibFragment(htmlStr);

        if (!bib) {
          return setNull();
        }

        const resolvedKeys = this.getResolvedKeys(bib);

        const result = {
          keys: citeKeys,
          resolvedKeys,
          unresolvedKeys: this.getUnresolvedKeys(citeKeys, resolvedKeys),
          bib,
          cslStyle,
          pathToBibliography,
        };

        this.cache.set(file, result);
        this.dispatchResult(file, result);

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

  dispatchResult(file: TFile, result: DocCache) {
    app.workspace.getLeavesOfType('markdown').find((l) => {
      const view = l.view as MarkdownView;
      if (view.file === file) {
        view.previewMode.rerender(true);

        const cm = (view.editor as any).cm as EditorView;

        if (cm.dispatch) {
          cm.dispatch({
            effects: [setCiteKeyCache.of(result)],
          });
        }
      }
    });
  }

  getResolvedKeys(bib: HTMLElement) {
    return new Set(
      new Set(
        bib
          .findAll('.csl-entry')
          .map((e) => e.getAttr('id').replace(/^ref-/, '@'))
      )
    );
  }

  getUnresolvedKeys(citekeys: Set<string>, resolved: Set<string>) {
    const unresolved = new Set<string>();

    citekeys.forEach((k) => {
      if (!resolved.has(k)) {
        unresolved.add(k);
      }
    });

    return unresolved;
  }

  getReferenceListForSource(filePath: string) {
    const file = app.vault.getAbstractFileByPath(filePath);
    if (file && file instanceof TFile && this.cache.has(file)) {
      return this.cache.get(file).bib;
    }
  }

  getResolution(filePath: string, key: string) {
    const file = app.vault.getAbstractFileByPath(filePath);
    if (file && file instanceof TFile && this.cache.has(file)) {
      const cache = this.cache.get(file);
      return {
        isResolved: cache.resolvedKeys.has(key),
        isUnresolved: cache.unresolvedKeys.has(key),
      };
    }

    return {
      isResolved: false,
      isUnresolved: false,
    };
  }
}
