import { MarkdownPostProcessorContext } from 'obsidian';
import { citeRegExp } from './editorExtension';

export function processCiteKeys(
  el: HTMLElement,
  ctx: MarkdownPostProcessorContext
) {
  const walker = document.createNodeIterator(el, NodeFilter.SHOW_TEXT);
  const toRemove: Node[] = [];

  let node;
  while ((node = walker.nextNode())) {
    const content = node.nodeValue;

    let frag = createFragment();
    let match;
    let pos = 0;
    let didMatch = false;

    citeRegExp.lastIndex = 0;
    while ((match = citeRegExp.exec(content))) {
      if (!didMatch) didMatch = true;

      frag.appendText(content.substring(pos, match.index));

      if (pos === 0) {
        pos = match.index;
      }

      // Loop through the 10 possible groups
      for (let i = 1; i <= 10; i++) {
        switch (i) {
          case 3:
          case 6:
            if (match[i]) {
              frag.createSpan({
                cls: 'pandoc-citation',
                text: match[i],
                attr: {
                  'data-citekey': match[i],
                  'data-source': ctx.sourcePath,
                },
              });
              pos += match[i].length;
            }
            continue;
          case 1:
          case 5:
          case 8:
          case 10:
            if (match[i]) {
              frag.createSpan({
                cls: 'pandoc-citation-formatting',
                text: match[i],
              });
              pos += match[i].length;
            }
            continue;
          case 2:
          case 4:
          case 9:
            if (match[i]) {
              frag.createSpan({
                cls: 'pandoc-citation-extra',
                text: match[i],
              });
              pos += match[i].length;
            }
            continue;
          case 7:
            if (match[i]) {
              frag.appendText(match[i]);
              pos += match[i].length;
            }
        }
      }
    }

    if (didMatch) {
      // Add trailing text
      frag.appendText(content.substring(frag.textContent.length));
      toRemove.push(node);
      node.parentNode.insertBefore(frag, node);
      frag = null;
    }
  }

  toRemove.forEach((n) => n.parentNode.removeChild(n));
}
