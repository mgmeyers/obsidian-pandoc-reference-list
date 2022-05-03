import delegate from 'delegate';
import { TFile } from 'obsidian';

import ReferenceList from './main';

export class TooltipManager {
  plugin: ReferenceList;
  tooltipDb = 0;
  tooltip: HTMLDivElement;

  constructor(plugin: ReferenceList) {
    this.plugin = plugin;

    window.addEventListener('scroll', this.scrollHandler, {
      capture: true,
    });
    plugin.register(this.initDelegatedEvents());
    plugin.register(this.destroy);
  }

  initDelegatedEvents() {
    const over = delegate('.pandoc-citation', 'pointerover', (e: any) => {
      if (!this.plugin.settings.showCitekeyTooltips) return;

      if (e.delegateTarget) {
        const target = e.delegateTarget;

        clearTimeout(this.tooltipDb);
        this.tooltipDb = window.setTimeout(() => {
          this.showTooltip(target);
        }, this.plugin.settings.tooltipDelay);
      }
    });

    const out = delegate('.pandoc-citation', 'pointerout', (e: any) => {
      if (!this.plugin.settings.showCitekeyTooltips) return;
      if (e.delegateTarget) {
        this.hideTooltip();
      }
    });

    return () => {
      over.destroy();
      out.destroy();
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
          div.innerHTML = content;
        } else {
          div.createEl('em', {
            text: 'No citation found for ' + el.dataset.citekey,
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
  }

  destroy = () => {
    window.removeEventListener('scroll', this.scrollHandler, {
      capture: true,
    });
  };

  scrollHandler = () => {
    if (this.tooltip) {
      this.hideTooltip();
    }
  };

  hideTooltip() {
    clearTimeout(this.tooltipDb);
    this.tooltip?.remove();
    this.tooltip = null;
  }
}
