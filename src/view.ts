import { ItemView, MarkdownView, WorkspaceLeaf, setIcon } from 'obsidian';

import { copyElToClipboard } from './helpers';
import { t } from './lang/helpers';
import ReferenceList from './main';

export const viewType = 'ReferenceListView';

export class ReferenceListView extends ItemView {
  plugin: ReferenceList;
  activeMarkdownLeaf: MarkdownView;

  constructor(leaf: WorkspaceLeaf, plugin: ReferenceList) {
    super(leaf);
    this.plugin = plugin;

    this.contentEl.addClass('pwc-reference-list');
    this.contentEl.toggleClass(
      'collapsed-links',
      !!this.plugin.settings.hideLinks
    );
    this.setNoContentMessage();
  }

  setViewContent(bib: HTMLElement) {
    if (bib && this.contentEl.firstChild !== bib) {
      bib.findAll('.csl-entry').forEach((e) => {
        const leafRoot = this.leaf.getRoot();
        if (leafRoot) {
          const tooltipPos =
            (leafRoot as any).side === 'right' ? 'left' : 'right';
          e.setAttribute('aria-label-position', tooltipPos);
        }
      });

      this.contentEl.empty();
      this.contentEl.createDiv(
        {
          cls: 'pwc-reference-list__title',
        },
        (div) => {
          div.createDiv({ text: this.getDisplayText() });
          div.createDiv(
            {
              cls: 'clickable-icon',
              attr: {
                'aria-label': t('Copy list'),
              },
            },
            (btn) => {
              setIcon(btn, 'lucide-copy');
              btn.onClickEvent(() => copyElToClipboard(bib));
            }
          );
        }
      );
      this.contentEl.append(bib);
    } else if (!bib) {
      this.setNoContentMessage();
    }
  }

  setNoContentMessage() {
    this.setMessage(t('No citations found in the current document.'));
  }

  setMessage(message: string) {
    this.contentEl.empty();
    this.contentEl.createDiv({
      cls: 'pane-empty',
      text: message,
    });
  }

  getViewType() {
    return viewType;
  }

  getDisplayText() {
    return t('References');
  }

  getIcon() {
    return 'quote-glyph';
  }
}
