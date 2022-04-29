import { ItemView, MarkdownView, WorkspaceLeaf } from 'obsidian';

import ReferenceList from './main';
import { ViewManager } from './viewManager';

export const viewType = 'ReferenceListView';

export class ReferenceListView extends ItemView {
  plugin: ReferenceList;
  activeMarkdownLeaf: MarkdownView;
  viewManager: ViewManager;

  async onClose() {
    this.viewManager.cache.clear();
    return super.onClose();
  }

  constructor(leaf: WorkspaceLeaf, plugin: ReferenceList) {
    super(leaf);

    this.plugin = plugin;
    this.viewManager = new ViewManager(plugin);

    this.registerEvent(
      app.metadataCache.on('changed', (file, content) => {
        const activeView = app.workspace.getActiveViewOfType(MarkdownView);

        if (activeView && file === activeView.file) {
          this.viewManager.getReferenceList(file, content).then((bib) => {
            this.setViewContent(bib);
          });
        }
      })
    );

    this.registerEvent(
      app.workspace.on('active-leaf-change', (leaf) => {
        if (leaf && leaf.view instanceof MarkdownView) {
          const file = leaf.view.file;
          app.vault.cachedRead(file).then((content) => {
            this.viewManager.getReferenceList(file, content).then((bib) => {
              this.setViewContent(bib);
            });
          });
        } else {
          this.setNoContentMessage();
        }
      })
    );

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

    this.contentEl.addClass('pwc-reference-list');
  }

  setViewContent(bib: HTMLElement) {
    if (bib && this.contentEl.firstChild !== bib) {
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
    this.contentEl.empty();
    this.contentEl.createDiv({
      cls: 'pwc-no-content',
      text: 'No citations found in the active document.',
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
