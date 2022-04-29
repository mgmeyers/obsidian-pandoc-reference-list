import './styles.css';

import fixPath from 'fix-path';
import { Plugin, WorkspaceLeaf } from 'obsidian';
import which from 'which';

import { ReferenceListSettings, ReferenceListSettingsTab } from './settings';
import { ReferenceListView, viewType } from './view';

const DEFAULT_SETTINGS: ReferenceListSettings = {
  pathToPandoc: '',
};

export default class ReferenceList extends Plugin {
  settings: ReferenceListSettings;

  async onload() {
    await this.loadSettings();

    this.addSettingTab(new ReferenceListSettingsTab(this));

    if (!this.settings.pathToPandoc) {
      try {
        // Attempt to find if/where pandoc is located on the user's machine
        fixPath();
        const pathToPandoc = await which('pandoc');
        this.settings.pathToPandoc = pathToPandoc;
      } catch {
        // We can ignore any errors here
      }
    }

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

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
