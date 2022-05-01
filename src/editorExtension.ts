import { RangeSetBuilder } from '@codemirror/rangeset';
import {
  Decoration,
  DecorationSet,
  EditorView,
  ViewPlugin,
  ViewUpdate,
} from '@codemirror/view';
import { editorViewField } from 'obsidian';

const citeMark = (citekey: string, sourceFile: string) => {
  return Decoration.mark({
    class: 'cm-pandoc-citation pandoc-citation',
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

export const citeRegExp =
  /(?<=^|[.;\s])(?:(\[)([^@]+)?(@[^\s\]]+)([^\]]+)?(\])|(@[^\s\]]+)( *)(?:(\[)([^\]]+)(\]))?)/g;

export const citeKeyPlugin = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet;
    constructor(view: EditorView) {
      this.decorations = this.mkDeco(view);
    }
    update(update: ViewUpdate) {
      if (update.viewportChanged || update.docChanged)
        this.decorations = this.mkDeco(update.view);
    }
    mkDeco(view: EditorView) {
      const b = new RangeSetBuilder<Decoration>();
      const obsView = view.state.field(editorViewField);

      for (const { from, to } of view.visibleRanges) {
        const range = view.state.sliceDoc(from, to);
        let match;

        citeRegExp.lastIndex = 0;
        while ((match = citeRegExp.exec(range))) {
          let pos = from + match.index;

          // Loop through the 10 possible groups
          for (let i = 1; i <= 10; i++) {
            switch (i) {
              case 3:
              case 6:
                if (match[i]) {
                  b.add(
                    pos,
                    pos + match[i].length,
                    citeMark(match[i], obsView.file.path)
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
              case 9:
                if (match[i]) {
                  b.add(pos, pos + match[i].length, citeMarkExtra);
                  pos += match[i].length;
                }
                continue;
              case 7:
                if (match[i]) {
                  pos += match[i].length;
                }
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
