import { Plugin, WorkspaceLeaf } from 'obsidian';
import which from 'which';
import { shellPath } from 'shell-path';

import { ReferenceListSettings, ReferenceListSettingsTab } from './settings';
import { ReferenceListView, viewType } from './view';
import { createEmitter, Emitter } from './emitter';

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
}

export default class ReferenceList extends Plugin {
  settings: ReferenceListSettings;
  emitter: Emitter<ViewEvents>;

  async onload() {
    await this.loadSettings();
    await fixPath();
    this.emitter = createEmitter();

    if (!this.settings.pathToPandoc) {
      try {
        // Attempt to find if/where pandoc is located on the user's machine
        const pathToPandoc = await which('pandoc');
        this.settings.pathToPandoc = pathToPandoc;
      } catch {
        // We can ignore any errors here
      }
    }

    this.addSettingTab(new ReferenceListSettingsTab(this));
    this.registerView(
      viewType,
      (leaf: WorkspaceLeaf) => new ReferenceListView(leaf, this)
    );

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

    if (this.app.workspace.layoutReady) {
      this.initLeaf();
    } else {
      this.app.workspace.onLayoutReady(() => {
        this.initLeaf();
      });
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

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  emitterDb = 0
  async saveSettings() {
    clearTimeout(this.emitterDb);
    this.emitterDb = window.setTimeout(() => {
      if (this.emitter?.events.settingsUpdated?.length) {
        this.emitter.emit('settingsUpdated', undefined);
      }
    }, 5000)
    await this.saveData(this.settings);
  }
}
