import { syntaxTree } from '@codemirror/language';
import { tokenClassNodeProp } from '@codemirror/language';
import { RangeSetBuilder, StateEffect, StateField } from '@codemirror/state';
import {
  Decoration,
  DecorationSet,
  EditorView,
  ViewPlugin,
  ViewUpdate,
} from '@codemirror/view';
import { Tree } from '@lezer/common';
import { editorInfoField } from 'obsidian';

import { SegmentType, getCitationSegments } from './parser/parser';
import { BibManager, FileCache } from './bib/bibManager';

const ignoreListRegEx = /code|math|templater|hashtag/;

const citeMark = (
  citekey: string,
  sourceFile: string | undefined,
  isResolved: boolean,
  isUnresolved: boolean
) => {
  const cls = ['cm-pandoc-citation', 'pandoc-citation'];

  if (isResolved) cls.push('is-resolved');
  if (isUnresolved) cls.push('is-unresolved');

  return Decoration.mark({
    class: cls.join(' '),
    attributes: {
      'data-citekey': citekey,
      'data-source': sourceFile || '',
    },
  });
};

const citeMarkFormatting = (type: string) => {
  return Decoration.mark({
    class: `cm-pandoc-citation-formatting ${type}`,
  });
};

const citeMarkExtra = (type: string) => {
  return Decoration.mark({
    class: `cm-pandoc-citation-extra ${type}`,
  });
};

export const citeKeyPlugin = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet;
    constructor(view: EditorView) {
      this.decorations = this.mkDeco(view);
    }
    update(update: ViewUpdate) {
      if (
        update.viewportChanged ||
        update.docChanged ||
        update.transactions.some((tr) =>
          tr.effects.some((e) => e.is(setCiteKeyCache))
        )
      ) {
        this.decorations = this.mkDeco(update.view);
      }
    }
    mkDeco(view: EditorView) {
      const b = new RangeSetBuilder<Decoration>();
      const obsView = view.state.field(editorInfoField);
      const citekeyCache = view.state.field(citeKeyCacheField);

      // Don't get the syntax tree until we have to
      let tree: Tree;

      for (const { from, to } of view.visibleRanges) {
        const range = view.state.sliceDoc(from, to);
        const segments = getCitationSegments(range);

        for (const match of segments) {
          if (!tree) tree = syntaxTree(view.state);

          for (const part of match) {
            const start = from + part.from;
            const end = from + part.to;

            const nodeProps = tree
              .resolveInner(start, 1)
              .type.prop(tokenClassNodeProp);

            if (nodeProps && ignoreListRegEx.test(nodeProps)) {
              break;
            }

            switch (part.type) {
              case SegmentType.key: {
                const isUnresolved =
                  !nodeProps?.includes('link') &&
                  citekeyCache?.unresolvedKeys.has(part.val);
                const isResolved = citekeyCache?.resolvedKeys.has(part.val);

                b.add(
                  start,
                  end,
                  citeMark(
                    part.val,
                    obsView?.file.path,
                    isResolved,
                    isUnresolved
                  )
                );
                continue;
              }
              case SegmentType.at:
              case SegmentType.curlyBracket:
              case SegmentType.bracket:
                b.add(start, end, citeMarkFormatting(part.type));
                continue;
              case SegmentType.separator:
              case SegmentType.suppressor:
              case SegmentType.prefix:
              case SegmentType.suffix:
              case SegmentType.locator:
              case SegmentType.locatorLabel:
              case SegmentType.locatorSuffix:
                b.add(start, end, citeMarkExtra(part.type));
                continue;
            }
          }
        }
      }

      return b.finish();
    }
  },
  {
    decorations: (v) => v.decorations,
  }
);

export const setCiteKeyCache = StateEffect.define<FileCache>();
export const citeKeyCacheField = StateField.define<FileCache>({
  create(state) {
    const obsView = state.field(editorInfoField);
    const bibManager = state.field(bibManagerField);

    if (obsView?.file && bibManager?.fileCache.has(obsView.file)) {
      return bibManager.fileCache.get(obsView.file);
    }

    return null;
  },
  update(state, tr) {
    for (const e of tr.effects) {
      if (e.is(setCiteKeyCache)) {
        state = e.value;
      }
    }

    return state;
  },
});

export const bibManagerField = StateField.define<BibManager>({
  create() {
    return null;
  },
  update(state) {
    return state;
  },
});
