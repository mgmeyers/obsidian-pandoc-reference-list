import { TFile } from 'obsidian';

import { t } from './lang/helpers';
import ReferenceList from './main';
import clip from 'text-clipper';

export class TooltipManager {
  plugin: ReferenceList;
  tooltipDb = 0;
  tooltip: HTMLDivElement;
  isScrollBound = false;

  constructor(plugin: ReferenceList) {
    this.plugin = plugin;

    plugin.register(this.initDelegatedEvents());
    plugin.register(() => {
      this.unbindScroll();
      this.hideTooltip();
    });
  }

  initDelegatedEvents() {
    const over = (e: PointerEvent) => {
      if (!this.plugin.settings.showCitekeyTooltips) return;

      if (e.target instanceof HTMLElement) {
        const target = e.target;

        clearTimeout(this.tooltipDb);
        this.tooltipDb = window.setTimeout(() => {
          this.showTooltip(target);
        }, this.plugin.settings.tooltipDelay);
      }
    };

    const out = () => {
      if (!this.plugin.settings.showCitekeyTooltips) return;
      this.hideTooltip();
    };

    document.body.on('pointerover', '.pandoc-citation', over);
    document.body.on('pointerout', '.pandoc-citation', out);

    return () => {
      document.body.off('pointerover', '.pandoc-citation', over);
      document.body.off('pointerout', '.pandoc-citation', out);
    };
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

    const keys = el.dataset.citekey.split('|');

    let content: DocumentFragment = null;

    if (el.dataset.noteIndex) {
      content = createFragment();
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
            const inner = html.innerHTML;
            const clipped = clip(inner, 100, { html: true });
            const clone = html.cloneNode() as HTMLElement;
            clone.innerHTML = clipped;
            content.append(clone);
          } else {
            content.append(html);
          }
        }
      }
    }

    const modClasses = this.plugin.settings.hideLinks ? ' collapsed-links' : '';
    const tooltip = (this.tooltip = activeDocument.body.createDiv({
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

    activeWindow.setTimeout(() => {
      const viewport = activeWindow.visualViewport;
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

    activeWindow.addEventListener('scroll', this.scrollHandler, {
      capture: true,
    });
    this.isScrollBound = true;
  }

  unbindScroll() {
    if (this.isScrollBound) {
      window.removeEventListener('scroll', this.scrollHandler, {
        capture: true,
      });
      this.isScrollBound = false;
    }
  }

  scrollHandler = () => {
    // Prevent dupe calls from quick scrolls
    if (this.isScrollBound) {
      this.hideTooltip();
      this.unbindScroll();
    }
  };

  hideTooltip() {
    clearTimeout(this.tooltipDb);
    if (this.tooltip) {
      this.tooltip?.remove();
      this.tooltip = null;
    }
  }
}
