import { debounce, Events, Plugin, WorkspaceLeaf } from 'obsidian';
import { shellPath } from 'shell-path';
import which from 'which';

import {
  citeKeyCacheField,
  citeKeyPlugin,
  viewManagerField,
} from './editorExtension';
import { t } from './lang/helpers';
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

  try {
    const path = await shellPath();

    process.env.PATH =
      path ||
      [
        './node_modules/.bin',
        '/.nodebrew/current/bin',
        '/usr/local/bin',
        process.env.PATH,
      ].join(':');
  } catch (e) {
    console.error(e);
  }
}

const DEFAULT_SETTINGS: ReferenceListSettings = {
  pathToPandoc: '',
  tooltipDelay: 800,
};

export default class ReferenceList extends Plugin {
  settings: ReferenceListSettings;
  emitter: Events;
  isReady: boolean = false;
  tooltipManager: TooltipManager;
  ev: Events;

  get view() {
    const leaves = app.workspace.getLeavesOfType(viewType);

    if (!leaves?.length) {
      return null;
    }

    return leaves[0].view as ReferenceListView;
  }

  async onload() {
    await this.loadSettings();
    this.emitter = new Events();

    this.addSettingTab(new ReferenceListSettingsTab(this));
    this.registerView(viewType, (leaf: WorkspaceLeaf) => {
      return new ReferenceListView(leaf, this);
    });

    document.body.toggleClass(
      'pwc-tooltips',
      !!this.settings.showCitekeyTooltips
    );

    this.app.workspace.onLayoutReady(() => {
      this.initLeaf();
    });

    this.registerEditorExtension([
      viewManagerField.init(() => this.view?.viewManager || null),
      citeKeyCacheField,
      citeKeyPlugin,
    ]);
    this.registerMarkdownPostProcessor(processCiteKeys(this));
    this.tooltipManager = new TooltipManager(this);

    this.addCommand({
      id: 'show-reference-list-view',
      name: t('Open view'),
      checkCallback: (checking: boolean) => {
        if (checking) {
          return this.view === null;
        }
        this.initLeaf();
      },
    });

    app.workspace.trigger('parse-style-settings');

    // No need to block execution
    fixPath().then(async () => {
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
      this.isReady = true;
      this.emitter.trigger('ready');
    });
  }

  onunload() {
    document.body.removeClass('pwc-tooltips');
    this.app.workspace
      .getLeavesOfType(viewType)
      .forEach((leaf) => leaf.detach());
  }

  initLeaf(): void {
    if (this.view) {
      return;
    }

    this.app.workspace.getRightLeaf(false).setViewState({
      type: viewType,
    });
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  emitSettingsUpdate = debounce(
    () => this.emitter.trigger('settingsUpdated'),
    5000,
    true
  );

  async saveSettings() {
    document.body.toggleClass(
      'pwc-tooltips',
      !!this.settings.showCitekeyTooltips
    );

    // Refresh the reference list when settings change
    this.emitSettingsUpdate();

    await this.saveData(this.settings);
  }
}
