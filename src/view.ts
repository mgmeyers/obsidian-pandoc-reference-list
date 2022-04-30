import { ItemView, MarkdownView, setIcon, WorkspaceLeaf } from 'obsidian';

import ReferenceList from './main';
import { ViewManager } from './viewManager';

export const viewType = 'ReferenceListView';

export class ReferenceListView extends ItemView {
  plugin: ReferenceList;
  activeMarkdownLeaf: MarkdownView;
  viewManager: ViewManager;

  async onClose() {
    this.viewManager.cache.clear();
    this.plugin.emitter.off('settingsUpdated', this.processReferences);
    return super.onClose();
  }

  constructor(leaf: WorkspaceLeaf, plugin: ReferenceList) {
    super(leaf);

    this.plugin = plugin;
    this.viewManager = new ViewManager(plugin);

    this.registerEvent(
      app.metadataCache.on('changed', (file) => {
        const activeView = app.workspace.getActiveViewOfType(MarkdownView);
        if (activeView && file === activeView.file) {
          this.processReferences();
        }
      })
    );

    this.registerEvent(
      app.workspace.on('active-leaf-change', (leaf) => {
        if (leaf && leaf.view instanceof MarkdownView) {
          this.processReferences();
        } else {
          this.setNoContentMessage();
        }
      })
    );

    this.processReferences();

    this.plugin.emitter.on('settingsUpdated', this.processReferences);
    this.contentEl.addClass('pwc-reference-list');
  }

  processReferences = () => {
    if (!this.plugin.settings.pathToPandoc) {
      return this.setMessage(
        'Please provide the path to pandoc in the Pandoc Reference List plugin settings.'
      );
    }

    if (!this.plugin.settings.pathToBibliography) {
      return this.setMessage(
        'Please provide the path to your pandoc compatible bibliography file in the Pandoc Reference List plugin settings.'
      );
    }

    const activeView = app.workspace.getActiveViewOfType(MarkdownView);

    if (activeView) {
      app.vault.cachedRead(activeView.file).then((content) => {
        this.viewManager
          .getReferenceList(activeView.file, content)
          .then((bib) => {
            this.setViewContent(bib);
          });
      });
    } else {
      this.setNoContentMessage();
    }
  };

  setViewContent(bib: HTMLElement) {
    if (bib && this.contentEl.firstChild !== bib) {
      if (this.plugin.settings.hideLinks) {
        bib.findAll('a').forEach((l) => {
          l.setAttribute('aria-label', l.innerText);
          setIcon(l, 'link');
        });
      }

      this.contentEl.empty();
      this.contentEl.createDiv({
        cls: 'pwc-reference-list__title',
        text: this.getDisplayText(),
      });
      this.contentEl.append(bib);
    } else if (!bib) {
      this.setNoContentMessage();
    }
  }

  setNoContentMessage() {
    this.setMessage('No citations found in the active document.');
  }

  setMessage(message: string) {
    this.contentEl.empty();
    this.contentEl.createDiv({
      cls: 'pwc-no-content',
      text: message,
    });
  }

  getViewType() {
    return viewType;
  }

  getDisplayText() {
    return 'References';
  }

  getIcon() {
    return 'quote-glyph';
  }
}
