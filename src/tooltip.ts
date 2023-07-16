import { TFile } from 'obsidian';

import { t } from './lang/helpers';
import ReferenceList from './main';
import clip from 'text-clipper';

export class TooltipManager {
  plugin: ReferenceList;
  tooltip: HTMLDivElement;
  isHoveringTooltip = false;
  isScrollBound = false;

  constructor(plugin: ReferenceList) {
    this.plugin = plugin;
    plugin.register(() => this.hideTooltip());
  }

  showTooltip(el: HTMLSpanElement) {
    if (this.tooltip) {
      this.hideTooltip();
    }

    if (!el.dataset.source) return;

    const file = app.vault.getAbstractFileByPath(el.dataset.source);
    if (!file && !(file instanceof TFile)) {
      return;
    }

    el.win.clearTimeout(this.previewDBTimer);
    el.win.clearTimeout(this.previewDBTimerClose);

    const keys = el.dataset.citekey.split('|');

    let content: DocumentFragment | HTMLElement = null;

    if (el.dataset.noteIndex) {
      content = createDiv();
      const html = this.plugin.bibManager.getNoteForNoteIndex(
        file as TFile,
        el.dataset.noteIndex
      );
      content.append(...html);
    } else {
      for (const key of keys) {
        const html = this.plugin.bibManager.getBibForCiteKey(
          file as TFile,
          key
        ) as HTMLElement;

        if (html) {
          if (!content) content = createFragment();
          if (keys.length > 1) {
            let target = html.find('.csl-right-inline');
            if (!target) target = html.find('.csl-entry');
            if (!target) target = html;
            const inner = target.innerHTML;
            const clipped = clip(inner, 100, { html: true });
            target.innerHTML = clipped;
          }
          content.append(html);
        }
      }
    }

    const modClasses = this.plugin.settings.hideLinks ? ' collapsed-links' : '';
    const tooltip = (this.tooltip = el.doc.body.createDiv({
      cls: `pwc-tooltip${modClasses}`,
    }));
    const rect = el.getBoundingClientRect();

    if (rect.x === 0 && rect.y === 0) {
      return this.hideTooltip();
    }

    if (this.plugin.settings.hideLinks) {
      tooltip.addClass('collapsed-links');
    }

    if (content) {
      tooltip.append(content);
    } else {
      tooltip.addClass('is-missing');
      tooltip.createEl('em', {
        text: t('No citation found for ') + el.dataset.citekey,
      });
    }

    tooltip.addEventListener('pointerover', () => {
      this.isHoveringTooltip = true;
    });
    tooltip.addEventListener('pointerout', () => {
      this.isHoveringTooltip = false;
    });
    tooltip.addEventListener('click', (evt) => {
      if (evt.targetNode.instanceOf(HTMLElement)) {
        if (
          evt.targetNode.tagName === 'A' ||
          evt.targetNode.hasClass('clickable-icon')
        ) {
          this.hideTooltip();
        }
      }
    });

    el.win.setTimeout(() => {
      const viewport = el.win.visualViewport;
      const divRect = tooltip.getBoundingClientRect();

      tooltip.style.left =
        rect.x + divRect.width + 10 > viewport.width
          ? `${rect.x - (rect.x + divRect.width + 10 - viewport.width)}px`
          : `${rect.x}px`;
      tooltip.style.top =
        rect.bottom + divRect.height + 10 > viewport.height
          ? `${rect.y - divRect.height - 5}px`
          : `${rect.bottom + 5}px`;
    });

    this.isScrollBound = true;
    this.boundScroll = () => {
      if (this.isScrollBound) {
        this.hideTooltip();
      }
    };
    el.win.addEventListener('scroll', this.boundScroll, { capture: true });
  }

  boundScroll: () => void;

  hideTooltip() {
    this.isHoveringTooltip = false;
    this.isScrollBound = false;
    this.tooltip?.win.removeEventListener('scroll', this.boundScroll);
    this.tooltip?.remove();
    this.tooltip = null;
    this.boundScroll = null;
  }

  previewDBTimer = 0;
  previewDBTimerClose = 0;
  bindPreviewTooltipHandler(el: HTMLElement) {
    el.addEventListener('pointerover', (evt) => {
      evt.view.clearTimeout(this.previewDBTimer);
      evt.view.clearTimeout(this.previewDBTimerClose);
      this.previewDBTimer = evt.view.setTimeout(() => {
        this.showTooltip(el);
      }, this.plugin.settings.tooltipDelay);
    });

    el.addEventListener('pointerout', (evt) => {
      evt.view.clearTimeout(this.previewDBTimer);
      if (!this.tooltip) return;
      this.previewDBTimerClose = evt.view.setTimeout(() => {
        if (this.isHoveringTooltip) {
          this.handleToolipHover();
        } else {
          this.hideTooltip();
        }
      }, 150);
    });
  }

  handleToolipHover() {
    if (this.isHoveringTooltip) {
      const { tooltip } = this;
      const outhandler = (evt: PointerEvent) => {
        evt.view.clearTimeout(this.previewDBTimerClose);
        this.previewDBTimerClose = evt.view.setTimeout(() => {
          tooltip.removeEventListener('pointerout', outhandler);
          tooltip.removeEventListener('pointerenter', outhandler);
          if (this.isHoveringTooltip) {
            this.handleToolipHover();
          } else {
            this.hideTooltip();
          }
        }, 150);
      };
      const enterHandler = (evt: PointerEvent) => {
        evt.view.clearTimeout(this.previewDBTimerClose);
      };
      tooltip.addEventListener('pointerout', outhandler);
      tooltip.addEventListener('pointerenter', enterHandler);
    }
  }

  getEditorTooltipHandler() {
    let dbOverTimer = 0;
    let dbOutTimer = 0;
    let isClosing = false;
    let activeKey: string;

    return {
      scroll: (evt: UIEvent) => {
        if (activeKey) {
          evt.view?.clearTimeout(dbOutTimer);
          evt.view?.clearTimeout(dbOverTimer);
          activeKey = null;
        }
      },
      pointerover: (evt: PointerEvent) => {
        const target = evt.targetNode;
        if (target.instanceOf(HTMLElement)) {
          const citekey = target.dataset.citekey;
          if (citekey) {
            evt.view.clearTimeout(dbOutTimer);
            isClosing = false;
            if (citekey !== activeKey) {
              if (activeKey) {
                this.hideTooltip();
                activeKey = null;
              }
              evt.view.clearTimeout(dbOverTimer);
              dbOverTimer = evt.view.setTimeout(() => {
                this.showTooltip(target);
                activeKey = citekey;
              }, this.plugin.settings.tooltipDelay);
            }
            return;
          }
        }
        evt.view.clearTimeout(dbOverTimer);
        if (activeKey && !isClosing) {
          if (!this.tooltip) return;
          isClosing = true;
          dbOutTimer = evt.view.setTimeout(() => {
            if (this.isHoveringTooltip) {
              isClosing = false;
            } else {
              this.hideTooltip();
              activeKey = null;
              isClosing = false;
            }
          }, 150);
        }
      },
    };
  }
}
