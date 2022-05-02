import delegate from 'delegate';
import { Plugin, WorkspaceLeaf } from 'obsidian';
import { shellPath } from 'shell-path';
import which from 'which';

import { citeKeyPlugin } from './editorExtension';
import { Emitter, createEmitter } from './emitter';
import { copyElToClipboard } from './helpers';
import { processCiteKeys } from './markdownPostprocessor';
import { ReferenceListSettings, ReferenceListSettingsTab } from './settings';
import { TooltipManager } from './tooltip';
import { ReferenceListView, viewType } from './view';

// TODO: ask @licat to do this?
//       PATH is not populated by default on mac (and I think linux)
async function fixPath() {
  if (process.platform === 'win32') {
    return;
  }

  process.env.PATH =
    (await shellPath()) ||
    [
      './node_modules/.bin',
      '/.nodebrew/current/bin',
      '/usr/local/bin',
      process.env.PATH,
    ].join(':');
}

const DEFAULT_SETTINGS: ReferenceListSettings = {
  pathToPandoc: '',
};

interface ViewEvents {
  settingsUpdated: () => void;
  ready: () => void;
}

export default class ReferenceList extends Plugin {
  settings: ReferenceListSettings;
  emitter: Emitter<ViewEvents>;
  isReady: boolean = false;
  view: ReferenceListView;
  tooltipManager: TooltipManager;

  async onload() {
    await this.loadSettings();
    this.emitter = createEmitter();

    this.addSettingTab(new ReferenceListSettingsTab(this));
    this.registerView(viewType, (leaf: WorkspaceLeaf) => {
      this.view = new ReferenceListView(leaf, this);
      return this.view;
    });

    document.body.toggleClass(
      'pwc-tooltips',
      !!this.settings.showCitekeyTooltips
    );

    this.register(this.initDelegatedEvents());
    this.registerEditorExtension(citeKeyPlugin);
    this.registerMarkdownPostProcessor(processCiteKeys);
    this.tooltipManager = new TooltipManager(this);

    if (this.app.workspace.layoutReady) {
      this.initLeaf();
    } else {
      this.app.workspace.onLayoutReady(() => {
        this.initLeaf();
      });
    }

    this.addCommand({
      id: 'show-reference-list-view',
      name: 'Open view',
      checkCallback: (checking: boolean) => {
        if (checking) {
          return this.app.workspace.getLeavesOfType(viewType).length === 0;
        }
        this.initLeaf();
      },
    });

    await fixPath();

    if (!this.settings.pathToPandoc) {
      try {
        // Attempt to find if/where pandoc is located on the user's machine
        const pathToPandoc = await which('pandoc');
        this.settings.pathToPandoc = pathToPandoc;
        this.saveSettings();
      } catch {
        // We can ignore any errors here
      }
    }

    // We don't want to attempt to execute pandoc until we've had a chance to fix PATH
    if (this.emitter?.events.settingsUpdated?.length) {
      this.isReady = true;
      this.emitter.emit('ready', undefined);
    }
  }

  onunload() {
    this.app.workspace
      .getLeavesOfType(viewType)
      .forEach((leaf) => leaf.detach());
  }

  initLeaf(): void {
    if (this.app.workspace.getLeavesOfType(viewType).length) {
      return;
    }
    this.app.workspace.getRightLeaf(false).setViewState({
      type: viewType,
    });
  }

  initDelegatedEvents() {
    const singleRefListener = delegate('.csl-entry', 'click', (e: any) => {
      if (e.delegateTarget) {
        copyElToClipboard(e.delegateTarget);
      }
    });

    const listListener = delegate('.pwc-copy-list', 'click', (e: any) => {
      if (e.delegateTarget) {
        const path = e.delegateTarget.dataset.source;
        let bib = this.view.viewManager.getReferenceListForSource(path);

        if (bib) {
          copyElToClipboard(bib);
          bib = null;
        }
      }
    });

    return () => {
      singleRefListener.destroy();
      listListener.destroy();
    };
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  emitterDb = 0;
  async saveSettings() {
    document.body.toggleClass(
      'pwc-tooltips',
      !!this.settings.showCitekeyTooltips
    );

    // Refresh the reference list when settings change
    clearTimeout(this.emitterDb);
    this.emitterDb = window.setTimeout(() => {
      if (this.emitter?.events.settingsUpdated?.length) {
        this.emitter.emit('settingsUpdated', undefined);
      }
    }, 5000);

    await this.saveData(this.settings);
  }
}
