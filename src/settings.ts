import { Notice, PluginSettingTab, Setting, TextComponent } from 'obsidian';
import which from 'which';

import ReferenceList from './main';

export interface ReferenceListSettings {
  pathToPandoc: string;
  pathToBibliography?: string;
  cslStyle?: string;
  hideLinks?: boolean;
  showCitekeyTooltips?: boolean;
  tooltipDelay: number;
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
      .then((setting) => {
        let input: TextComponent;
        setting.addText((text) => {
          input = text;
          text
            .setValue(this.plugin.settings.pathToBibliography)
            .onChange((value) => {
              this.plugin.settings.pathToBibliography = value;
              this.plugin.saveSettings();
            });
        });

        setting.addExtraButton((b) => {
          b.setIcon('folder');
          b.setTooltip(
            'Select a bibliography file. This can be overridden on a per-file basis by setting "bibliography" in the file\'s frontmatter.'
          );
          b.onClick(() => {
            const path = require('electron').remote.dialog.showOpenDialogSync({
              properties: ['openFile'],
            });

            if (path && path.length) {
              input.setValue(path[0]);

              this.plugin.settings.pathToBibliography = path[0];
              this.plugin.saveSettings();
            }
          });
        });
      });

    new Setting(containerEl)
      .setName(
        'Path or URL to CSL File. This can be overridden on a per-file basis by setting "csl" or "citation-style" in the file\'s frontmatter.'
      )
      .setDesc(
        'The absolute path or URL your desired citation style file. Pandoc will default to Chicago Manual of Style if this is not set.'
      )
      .then((setting) => {
        let input: TextComponent;
        setting.addText((text) => {
          input = text;
          text.setValue(this.plugin.settings.cslStyle).onChange((value) => {
            this.plugin.settings.cslStyle = value;
            this.plugin.saveSettings();
          });
        });

        setting.addExtraButton((b) => {
          b.setIcon('folder');
          b.setTooltip('Select a CSL file located on your computer');
          b.onClick(() => {
            const path = require('electron').remote.dialog.showOpenDialogSync({
              properties: ['openFile'],
            });

            if (path && path.length) {
              input.setValue(path[0]);

              this.plugin.settings.cslStyle = path[0];
              this.plugin.saveSettings();
            }
          });
        });
      });

    new Setting(containerEl)
      .setName('Fallback Path to Pandoc')
      .setDesc(
        "The absolute path to the pandoc executable. This plugin will attempt to locate pandoc for you and will use this path if it fails to do so. To find pandoc, use the output of 'which pandoc' in a terminal on Mac/Linux or 'Get-Command pandoc' in powershell on Windows."
      )
      .then((setting) => {
        let input: TextComponent;
        setting.addText((text) => {
          input = text;
          text.setValue(this.plugin.settings.pathToPandoc).onChange((value) => {
            this.plugin.settings.pathToPandoc = value;
            this.plugin.saveSettings();
          });
        });

        setting.addExtraButton((b) => {
          b.setIcon('magnifying-glass');
          b.setTooltip('Attempt to find pandoc automatically');
          b.onClick(() => {
            which('pandoc')
              .then((pathToPandoc) => {
                if (pathToPandoc) {
                  input.setValue(pathToPandoc);

                  this.plugin.settings.pathToPandoc = pathToPandoc;
                  this.plugin.saveSettings();
                } else {
                  new Notice(
                    'Unable to find pandoc on your system. If it is installed, please manually enter a path.'
                  );
                }
              })
              .catch((e) => {
                new Notice(
                  'Unable to find pandoc on your system. If it is installed, please manually enter a path.'
                );
                console.error(e);
              });
          });
        });
      });

    new Setting(containerEl)
      .setName('Hide Links')
      .setDesc('Replace links with link icons to save space.')
      .addToggle((text) =>
        text.setValue(!!this.plugin.settings.hideLinks).onChange((value) => {
          this.plugin.settings.hideLinks = value;
          this.plugin.saveSettings();
        })
      );

    new Setting(containerEl)
      .setName('Show Citekey Tooltips')
      .setDesc(
        'When enabled, hovering over citekeys will open a tooltip containing a formatted citation.'
      )
      .addToggle((text) =>
        text
          .setValue(!!this.plugin.settings.showCitekeyTooltips)
          .onChange((value) => {
            this.plugin.settings.showCitekeyTooltips = value;
            this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Tooltip Delay')
      .setDesc(
        'Set the amount of time (in milliseconds) to wait before displaying tooltips.'
      )
      .addSlider((slider) => {
        slider
          .setDynamicTooltip()
          .setLimits(0, 7000, 100)
          .setValue(this.plugin.settings.tooltipDelay)
          .onChange((value) => {
            this.plugin.settings.tooltipDelay = value;
            this.plugin.saveSettings();
          });
      });
  }
}
