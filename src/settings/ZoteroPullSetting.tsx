import React from 'react';
import ReferenceList from 'src/main';
import { SettingItem } from './SettingItem';
import { t } from 'src/lang/helpers';
import { DEFAULT_ZOTERO_PORT, getZUserGroups } from 'src/bib/helpers';

function validateGroups(
  plugin: ReferenceList,
  groups: Array<{ id: number; name: string }>
) {
  const validated: Array<{ id: number; name: string }> = [];

  plugin.settings.zoteroGroups.forEach((g) => {
    if (groups.some((g2) => g2.id === g.id)) {
      validated.push(g);
    }
  });

  plugin.settings.zoteroGroups = validated;
  plugin.saveSettings();
}

export function ZoteroPullSetting({ plugin }: { plugin: ReferenceList }) {
  const [isEnabled, setIsEnabled] = React.useState(
    !!plugin.settings.pullFromZotero
  );
  const [possibleGroups, setPossibleGroups] = React.useState(
    plugin.settings.zoteroGroups
  );
  const [activeGroups, setActiveGroups] = React.useState(
    plugin.settings.zoteroGroups
  );
  const [connected, setConnected] = React.useState(false);

  const pullUserGroups = React.useCallback(async () => {
    try {
      const groups = await getZUserGroups(
        plugin.settings.zoteroPort ?? DEFAULT_ZOTERO_PORT
      );
      validateGroups(plugin, groups);
      setPossibleGroups(groups);
      setConnected(true);
    } catch {
      setConnected(false);
    }
  }, []);

  React.useEffect(() => {
    pullUserGroups();
  }, []);

  return (
    <>
      <div className="pwc-setting-item setting-item">
        <SettingItem
          name={t('Pull Bibliography from Zotero')}
          description={t(
            'When enabled, bibliography data will be pulled from Zotero rather than a bibliography file. The Better Bibtex plugin must be installed in Zotero.'
          )}
        >
          <div
            onClick={() => {
              setIsEnabled((cur) => {
                plugin.settings.pullFromZotero = !cur;
                if (connected && activeGroups.length == 0) {
                  const myLibrary = possibleGroups.find((g) => g.id === 1);
                  if (myLibrary) {
                    activeGroups.push(myLibrary);
                    plugin.settings.zoteroGroups = activeGroups;
                    setActiveGroups([...activeGroups]);
                  }
                }
                plugin.saveSettings(() => plugin.bibManager.reinit(true));
                return !cur;
              });
            }}
            className={`checkbox-container${isEnabled ? ' is-enabled' : ''}`}
          />
        </SettingItem>
      </div>
      {connected ? null : (
        <div className="pwc-setting-item setting-item">
          <SettingItem
            name={t('Cannot connect to Zotero')}
            description={t('Start Zotero and try again.')}
          >
            <button onClick={pullUserGroups} className="mod-cta">
              Retry
            </button>
          </SettingItem>
        </div>
      )}
      {!isEnabled ? null : (
        <>
          <div className="pwc-setting-item setting-item">
            <SettingItem
              name={t('Zotero Port')}
              description={t(
                "Use 24119 for Juris-M or specify a custom port if you have changed Zotero's default."
              )}
            >
              <input
                onChange={(e) => {
                  plugin.settings.zoteroPort = e.target.value;
                  plugin.saveSettings();
                }}
                type="text"
                spellCheck={false}
                defaultValue={plugin.settings.zoteroPort ?? DEFAULT_ZOTERO_PORT}
              />
            </SettingItem>
          </div>
          <div className="setting-item pwc-setting-item-wrapper">
            <SettingItem name={t('Libraries to Include in Bibliography')} />
            {possibleGroups.map((g) => {
              const isEnabled = activeGroups.some((g2) => g2.id === g.id);
              return (
                <div key={g.id} className="pwc-group-toggle">
                  <SettingItem description={g.name}>
                    <div
                      onClick={() => {
                        if (isEnabled) {
                          const next = activeGroups.filter(
                            (g2) => g2.id !== g.id
                          );
                          plugin.settings.zoteroGroups = next;
                          setActiveGroups(next);
                        } else {
                          activeGroups.push(g);
                          plugin.settings.zoteroGroups = activeGroups;
                          setActiveGroups([...activeGroups]);
                        }
                        plugin.saveSettings(() =>
                          plugin.bibManager.reinit(true)
                        );
                      }}
                      className={`checkbox-container${
                        isEnabled ? ' is-enabled' : ''
                      }`}
                    />
                  </SettingItem>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
