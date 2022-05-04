import { RangeSetBuilder } from '@codemirror/rangeset';
import {
  Decoration,
  DecorationSet,
  EditorView,
  ViewPlugin,
  ViewUpdate,
} from '@codemirror/view';
import { StateField, StateEffect } from '@codemirror/state';
import { editorViewField } from 'obsidian';

import { ViewManager } from './viewManager';
import { citeRegExp, multiCiteRegExp } from './regExps';

const citeMark = (
  citekey: string,
  sourceFile: string,
  isPrefix: boolean,
  haveEntryForCiteKey: boolean
) => {
  const cls = ['cm-pandoc-citation', 'pandoc-citation'];

  if (isPrefix) cls.push('pandoc-citation-at');

  // TODO: need to figure this one out still, probably need to store available
  //       references in editor state and send state updates from the viewManager
  if (!haveEntryForCiteKey) cls.push('is-missing');

  return Decoration.mark({
    class: cls.join(' '),
    attributes: {
      'data-citekey': citekey,
      'data-source': sourceFile,
    },
  });
};

const citeMarkFormatting = Decoration.mark({
  class: 'cm-pandoc-citation-formatting',
});

const citeMarkExtra = Decoration.mark({
  class: 'cm-pandoc-citation-extra',
});

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
          tr.effects.some((e) => e.is(setResolvedCiteKeys))
        )
      ) {
        this.decorations = this.mkDeco(update.view);
      }
    }
    mkDeco(view: EditorView) {
      const b = new RangeSetBuilder<Decoration>();
      const obsView = view.state.field(editorViewField);
      const resolvedKeys = view.state.field(resolvedCiteKeysField);

      for (const { from, to } of view.visibleRanges) {
        const range = view.state.sliceDoc(from, to);
        let match;

        while ((match = citeRegExp.exec(range))) {
          let pos = from + match.index;

          // Loop through the 10 possible groups
          for (let i = 1; i <= 10; i++) {
            switch (i) {
              case 3:
                // Break up multicite matches
                if (match[i]) {
                  const multiCite = match[i];
                  let m2;
                  while ((m2 = multiCiteRegExp.exec(multiCite))) {
                    const haveEntryForCiteKey = resolvedKeys.has(m2[1]);

                    b.add(
                      pos,
                      pos + 1,
                      citeMark(
                        m2[1],
                        obsView.file.path,
                        true,
                        haveEntryForCiteKey
                      )
                    );

                    const withoutPrefix = m2[1].slice(1);
                    b.add(
                      pos + 1,
                      pos + 1 + withoutPrefix.length,
                      citeMark(
                        m2[1],
                        obsView.file.path,
                        false,
                        haveEntryForCiteKey
                      )
                    );
                    pos += m2[1].length;

                    if (m2[2]) {
                      b.add(pos, pos + m2[2].length, citeMarkFormatting);
                      pos += m2[2].length;
                    }
                  }
                }
                continue;
              case 6:
                if (match[i]) {
                  const haveEntryForCiteKey = resolvedKeys.has(match[i]);

                  b.add(
                    pos,
                    pos + 1,
                    citeMark(
                      match[i],
                      obsView.file.path,
                      true,
                      haveEntryForCiteKey
                    )
                  );

                  const withoutPrefix = match[i].slice(1);
                  b.add(
                    pos + 1,
                    pos + 1 + withoutPrefix.length,
                    citeMark(
                      match[i],
                      obsView.file.path,
                      false,
                      haveEntryForCiteKey
                    )
                  );
                  pos += match[i].length;
                }
                continue;
              case 1:
              case 5:
              case 8:
              case 10:
                if (match[i]) {
                  b.add(pos, pos + match[i].length, citeMarkFormatting);
                  pos += match[i].length;
                }
                continue;
              case 2:
              case 4:
              case 7:
              case 9:
                if (match[i]) {
                  b.add(pos, pos + match[i].length, citeMarkExtra);
                  pos += match[i].length;
                }
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

export const setResolvedCiteKeys = StateEffect.define<Set<string>>();

export const resolvedCiteKeysField = StateField.define<Set<string>>({
  create(state) {
    const obsView = state.field(editorViewField);
    const viewManager = state.field(viewManagerField);

    if (viewManager?.cache.has(obsView.file)) {
      return viewManager.cache.get(obsView.file).resolvedKeys;
    }

    return new Set();
  },
  update(state, tr) {
    for (const e of tr.effects) {
      if (e.is(setResolvedCiteKeys)) {
        state = e.value;
      }
    }

    return state;
  },
});

export const viewManagerField = StateField.define<ViewManager>({
  create() {
    return null;
  },
  update(state) {
    return state;
  },
});
