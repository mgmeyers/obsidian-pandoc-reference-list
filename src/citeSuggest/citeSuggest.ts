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

const triggerRE = /([\s()[\]{}\-;]?)(@)([\p{L}\p{N}:.#$%&\-+?<>~_/]+)$/u;
const triggerREenhanced = /([\s()[\]{}\-;]?)@"([\p{L}\p{N}:.#$%&\-+?<>~_/ ]+)"$/u;

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

  getSuggestions(context: EditorSuggestContext) {
    if (
      !context.query ||
      context.query.length < 2
    ) {
      return null;
    }

    const { plugin } = this;
    if (!plugin.initPromise.settled) return null;

    const { bibManager } = plugin;

    let fuse = bibManager.fuse;
    if (bibManager.fileCache.has(context.file)) {
      const cache = bibManager.fileCache.get(context.file);
      fuse = cache.source.fuse;
    }

    const queries = context.query.split(" ").filter(element => element.trim() !== "")
    const results = fuse?.search(
      {
        $or: [
          { $and: queries.map(s => ({ id: s })) },
          { $and: queries.map(s => ({ title: s })) }
        ]
      },
      { limit: this.limit });

    return results?.length ? results : null;
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
      if (item.title)
        frag.createSpan({ text: item.title, cls: 'pwc-suggest-title' });
      return el.setText(frag);
    }

    const citekey = frag.createSpan({ text: '@' });
    const title = frag.createSpan('pwc-suggest-title');

    let prevTitleIndex = 0;
    let prevCiteIndex = 0;

    // select first matches for each distinct key
    const matches_by_key = sugg.matches.filter((obj, index, array) => {
      return array.findIndex(o => o.key === obj.key) === index;
    });
    // and add all matched indices across all matches to the selected matches
    matches_by_key.forEach(match => {
      const indices: Fuse.RangeTuple[] = []
      sugg.matches.filter(m => m.key == match.key).forEach(m => indices.push(...m.indices))
      match.indices = indices
    })

    // for each key, merge all overlapping match intervals and highlight these in the suggestion box
    matches_by_key.forEach(m => {
      const mergedIntervals: Fuse.RangeTuple[] = this.mergeIntervals(m.indices);

      mergedIntervals.forEach((indices) => {
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

    if (item.title) title.appendText(item.title.substring(prevTitleIndex));
    citekey.appendText(item.id.substring(prevCiteIndex));

    el.setText(frag);
  }

  lastSelect: EditorPosition = null;
  private mergeIntervals(intervals: readonly Fuse.RangeTuple[]) {
    if (intervals.length == 0) return null
    intervals = [...intervals].sort((a, b) => a[0] - b[0]);
    const mergedIntervals: Fuse.RangeTuple[] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

      if (currentInterval[0] <= lastMergedInterval[1]) {
        lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
      } else {
        mergedIntervals.push(currentInterval);
      }
    }
    return mergedIntervals;
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

    const { start, end } = this.context;
    end.ch = start.ch + this.context.query.length + 1
    if (this.context.editor.getLine(start.line)[start.ch + 1] == "\"")
      end.ch = end.ch + 2

    activeView.editor.replaceRange(replaceStr, start, end);

    this.lastSelect = {
      ch: start.ch + replaceStr.length,
      line: start.line,
    };
    this.close();
  }

  isRefreshing: boolean = false;
  async refreshZBib() {
    if (this.isRefreshing) return;
    this.isRefreshing = true;
    await this.plugin.bibManager.refreshGlobalZBib();
    this.isRefreshing = false;
  }

  onTrigger(cursor: EditorPosition, editor: Editor): EditorSuggestTriggerInfo {
    const { enableCiteKeyCompletion, pullFromZotero } = this.plugin.settings;
    if (!enableCiteKeyCompletion) return null;

    const { lastSelect } = this;
    if (
      lastSelect &&
      cursor.ch === lastSelect.ch &&
      cursor.line === lastSelect.line
    ) {
      return null;
    }

    let match: RegExpMatchArray = null
    let query: string = null
    let start_index = -1
    
    // match line at cursor position to a citekey query
    const line = (editor.getLine(cursor.line) || '')
    if (line == '') return null;
    const citekey_start = line.substring(0, cursor.ch).lastIndexOf("@\"");
    const citekey_end = line.substring(citekey_start+2).indexOf("\"") + citekey_start+2
    if (citekey_start > -1 && citekey_end > -1 && (citekey_start + 2 <= cursor.ch && cursor.ch <= citekey_end)) {
      match = line.substring(0, citekey_end + 1).match(triggerREenhanced);
      // ensure only allowed tokens follow the closing quote
      if (line.substring(citekey_end + 1).match(/[^\s()[\]{}\-;]/u)) return null;

      if (match) {
        query = match[2];
        start_index = citekey_start
      }
    }
    else {
      match = line.substring(0, cursor.ch).match(triggerRE);
      if (match) {
        query = match[3];
        start_index = match.index + match[1].length;
      }
    }
    
    if (!match) return null;
    this.lastSelect = null;

    if (!this.context && pullFromZotero) {
      this.refreshZBib();
    }

    return {
      start: { line: cursor.line, ch: start_index},
      end: cursor,
      query: query
    };
  }
}
