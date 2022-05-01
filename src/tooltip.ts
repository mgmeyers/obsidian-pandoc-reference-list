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

    plugin.registerDomEvent(document.documentElement, 'pointerover', (e) => {
      if (!plugin.settings.showCitekeyTooltips) return;

      const target = e.target;
      if (
        target instanceof HTMLSpanElement &&
        target.hasClass('pandoc-citation')
      ) {
        clearTimeout(this.tooltipDb);
        this.tooltipDb = window.setTimeout(() => {
          this.showTooltip(target);
        }, 1000);
      }
    });

    plugin.registerDomEvent(document.documentElement, 'pointerout', (e) => {
      if (!plugin.settings.showCitekeyTooltips) return;

      const target = e.target;
      if (
        target instanceof HTMLSpanElement &&
        target.hasClass('pandoc-citation')
      ) {
        this.hideTooltip();
      }
    });
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

    if (!content) {
      return;
    }

    this.tooltip = document.body.createDiv({ cls: 'pwc-tooltip' }, (div) => {
      const rect = el.getBoundingClientRect();

      if (this.plugin.settings.hideLinks) {
        div.addClass('collapsed-links');
      }

      div.innerHTML = content;

      setTimeout(() => {
        const divRect = div.getBoundingClientRect();
        div.style.left = `${rect.x}px`;
        div.style.top =
          rect.bottom + divRect.height + 20 > window.visualViewport.height
            ? `${rect.y - divRect.height - 5}px`
            : `${rect.bottom + 5}px`;
      });
    });
  }

  destroy() {
    window.removeEventListener('scroll', this.scrollHandler, {
      capture: true,
    });
  }

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
