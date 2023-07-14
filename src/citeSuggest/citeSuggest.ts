import Fuse from 'fuse.js';
import {
  App,
  Editor,
  EditorPosition,
  EditorSuggest,
  EditorSuggestContext,
  EditorSuggestTriggerInfo,
  MarkdownView,
  Platform,
} from 'obsidian';
import { PartialCSLEntry } from 'src/bib/types';
import ReferenceList from 'src/main';

interface Loading {
  loading: boolean;
}

export class CiteSuggest extends EditorSuggest<
  Fuse.FuseResult<PartialCSLEntry> | Loading
> {
  private plugin: ReferenceList;
  private app: App;

  limit: number = 20;

  constructor(app: App, plugin: ReferenceList) {
    super(app);

    this.app = app;
    this.plugin = plugin;

    (this as any).suggestEl.addClass('pwc-suggest');
    (this as any).scope.register(['Mod'], 'Enter', (evt: KeyboardEvent) => {
      (this as any).suggestions.useSelectedItem(evt);
      return false;
    });

    (this as any).scope.register(['Alt'], 'Enter', (evt: KeyboardEvent) => {
      (this as any).suggestions.useSelectedItem(evt);
      return false;
    });

    this.setInstructions([
      {
        command: Platform.isMacOS ? '⌘ ↵' : 'ctrl ↵',
        purpose: 'Wrap cite key with brackets',
      },
      {
        command: Platform.isMacOS ? '⌥ ↵' : 'alt ↵',
        purpose: 'Insert using template',
      },
    ]);
  }

  async getSuggestions(context: EditorSuggestContext) {
    if (!context.query || context.query.includes(' ')) {
      return null;
    }
    const { plugin } = this;
    if (!plugin.initPromise.settled) return null;

    const { bibManager } = plugin;
    if (bibManager.fileCache.has(context.file)) {
      const cache = bibManager.fileCache.get(context.file);
      return cache.source.fuse.search(context.query, {
        limit: this.limit,
      });
    }

    return bibManager.fuse.search(context.query, {
      limit: this.limit,
    });
  }

  renderSuggestion(
    suggestion: Fuse.FuseResult<PartialCSLEntry> | Loading,
    el: HTMLElement
  ): void {
    const frag = createFragment();

    if ((suggestion as { loading: boolean }).loading) {
      frag
        .createSpan({ cls: 'pwc-suggest-loading-wrapper' })
        .createSpan({ cls: 'pwc-suggest-loading' });
      el.setText(frag);
      return;
    }

    const sugg = suggestion as Fuse.FuseResult<PartialCSLEntry>;
    const item = sugg.item;

    if (!sugg.matches || !sugg.matches.length) {
      frag.createSpan({ text: `@${item.id}` });
      frag.createSpan({ text: item.title, cls: 'pwc-suggest-title' });
      return el.setText(frag);
    }

    const citekey = frag.createSpan({ text: '@' });
    const title = frag.createSpan('pwc-suggest-title');

    let prevTitleIndex = 0;
    let prevCiteIndex = 0;

    sugg.matches.forEach((m) => {
      m.indices.forEach((indices) => {
        const start = indices[0];
        const stop = indices[1] + 1;

        const target = m.key === 'title' ? title : citekey;
        const prev = m.key === 'title' ? prevTitleIndex : prevCiteIndex;

        target.appendText(m.value.substring(prev, start));
        target.append(
          createEl('strong', {
            text: m.value.substring(start, stop),
          })
        );

        if (m.key === 'title') {
          prevTitleIndex = stop;
        } else {
          prevCiteIndex = stop;
        }
      });
    });

    title.appendText(item.title.substring(prevTitleIndex));
    citekey.appendText(item.id.substring(prevCiteIndex));

    el.setText(frag);
  }

  selectSuggestion(
    suggestion: Fuse.FuseResult<PartialCSLEntry>,
    event: KeyboardEvent | MouseEvent
  ): void {
    const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!activeView) {
      return;
    }

    let replaceStr = '';
    if (event.metaKey || event.ctrlKey) {
      replaceStr = `[@${suggestion.item.id}]`;
    } else {
      replaceStr = `@${suggestion.item.id}`;
    }

    activeView.editor.replaceRange(
      replaceStr,
      this.context.start,
      this.context.end
    );

    this.close();
  }

  onTrigger(cursor: EditorPosition, editor: Editor): EditorSuggestTriggerInfo {
    if (!this.plugin.settings.enableCiteKeyCompletion) {
      return null;
    }

    const triggerPhrase = '@';
    let startPos = this.context?.start || {
      line: cursor.line,
      ch: cursor.ch - triggerPhrase.length,
    };

    if (!editor.getRange(startPos, cursor).startsWith(triggerPhrase)) {
      const restartPos = {
        line: cursor.line,
        ch: cursor.ch - (triggerPhrase.length + 1),
      };

      if (
        this.context ||
        !editor.getRange(restartPos, cursor).startsWith(triggerPhrase)
      ) {
        return null;
      }

      startPos = restartPos;
    }

    const precedingChar = editor.getRange(
      {
        line: startPos.line,
        ch: startPos.ch - 1,
      },
      startPos
    );

    if (precedingChar && !/[ .[;-]/.test(precedingChar)) {
      return null;
    }

    const query = editor
      .getRange(startPos, cursor)
      .substring(triggerPhrase.length);

    return {
      start: startPos,
      end: cursor,
      query,
    };
  }
}
