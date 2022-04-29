import { App, PluginSettingTab, Setting } from 'obsidian';

import ReferenceList from './main';

export interface ReferenceListSettings {
  pathToPandoc: string;
  pathToBibliography?: string;
  cslStyle?: string;
}

export class ReferenceListSettingsTab extends PluginSettingTab {
  plugin: ReferenceList;

  constructor(plugin: ReferenceList) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    new Setting(containerEl)
      .setName('Path to Bibliography File')
      .setDesc('The absolute path to your desired bibliography file.')
      .addText((text) =>
        text
          .setValue(this.plugin.settings.pathToBibliography)
          .onChange(async (value) => {
            this.plugin.settings.pathToBibliography = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Path or URL to CSL File')
      .setDesc(
        'The absolute path or URL your desired citation style file. Pandoc will default to Chicago Manual of Style if this is not set.'
      )
      .addText((text) =>
        text.setValue(this.plugin.settings.cslStyle).onChange(async (value) => {
          this.plugin.settings.cslStyle = value;
          await this.plugin.saveSettings();
        })
      );

    new Setting(containerEl)
      .setName('Path to Pandoc')
      .setDesc(
        "The absolute path to the pandoc executable. If this is not set automatically, use the output of 'which pandoc' in a terminal on Mac/Linux or 'Get-Command pandoc' in powershell on Windows."
      )
      .addText((text) =>
        text
          .setValue(this.plugin.settings.pathToPandoc)
          .onChange(async (value) => {
            this.plugin.settings.pathToPandoc = value;
            await this.plugin.saveSettings();
          })
      );
  }
}
