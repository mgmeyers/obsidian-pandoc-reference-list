import { TFile } from 'obsidian';

import { t } from './lang/helpers';
import ReferenceList from './main';

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

    const file = app.vault.getAbstractFileByPath(el.dataset.source);
    if (!file && !(file instanceof TFile)) {
      return;
    }

    const content = this.plugin.view?.viewManager.getBibForCiteKey(
      file as TFile,
      el.dataset.citekey
    );

    const modClasses = this.plugin.settings.hideLinks ? ' collapsed-links' : '';

    this.tooltip = document.body.createDiv(
      { cls: `pwc-tooltip${modClasses}` },
      (div) => {
        // @'s are wrapped on their own, but that's where we want to show the tooltip
        const prev = el.previousElementSibling;
        const rect = prev?.hasClass('pandoc-citation')
          ? prev.getBoundingClientRect()
          : el.getBoundingClientRect();

        if (this.plugin.settings.hideLinks) {
          div.addClass('collapsed-links');
        }

        if (content) {
          div.append(content);
        } else {
          div.addClass('is-missing');
          div.createEl('em', {
            text: t('No citation found for ') + el.dataset.citekey,
          });
        }

        setTimeout(() => {
          const viewport = window.visualViewport;
          const divRect = div.getBoundingClientRect();

          div.style.left =
            rect.x + divRect.width + 10 > viewport.width
              ? `${rect.x - (rect.x + divRect.width + 10 - viewport.width)}px`
              : `${rect.x}px`;
          div.style.top =
            rect.bottom + divRect.height + 10 > viewport.height
              ? `${rect.y - divRect.height - 5}px`
              : `${rect.bottom + 5}px`;
        });
      }
    );

    window.addEventListener('scroll', this.scrollHandler, {
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
