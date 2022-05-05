import { MarkdownPostProcessorContext } from 'obsidian';

import ReferenceList from './main';
import { citeRegExp, multiCiteRegExp } from './regExps';

function getCiteClass(isPrefix: boolean, haveEntryForCiteKey: boolean) {
  const cls = ['pandoc-citation'];
  if (isPrefix) cls.push('pandoc-citation-at');
  if (!haveEntryForCiteKey) cls.push('is-missing');

  return cls.join(' ');
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function processCiteKeys(plugin: ReferenceList) {
  return (el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
    const walker = document.createNodeIterator(el, NodeFilter.SHOW_TEXT);
    const toRemove: Node[] = [];

    let node;
    while ((node = walker.nextNode())) {
      const content = node.nodeValue;

      if (node.parentElement && node.parentElement.tagName === 'CODE') {
        continue;
      }

      let frag = createFragment();
      let match;
      let pos = 0;
      let didMatch = false;

      while ((match = citeRegExp.exec(content))) {
        if (!didMatch) didMatch = true;
        frag.appendText(content.substring(pos, match.index));
        pos = match.index;

        // Loop through the 10 possible groups
        for (let i = 1; i <= 10; i++) {
          switch (i) {
            case 3:
              // Break up multicite matches
              if (match[i]) {
                const multiCite = match[i];
                let m2;
                while ((m2 = multiCiteRegExp.exec(multiCite))) {
                  const haveEntryForCiteKey =
                    plugin.view?.viewManager.haveEntryForCiteKey(
                      ctx.sourcePath,
                      m2[1]
                    );
                  frag.createSpan({
                    cls: getCiteClass(true, haveEntryForCiteKey),
                    text: m2[1][0],
                    attr: {
                      'data-citekey': m2[1],
                      'data-source': ctx.sourcePath,
                    },
                  });
                  frag.createSpan({
                    cls: getCiteClass(false, haveEntryForCiteKey),
                    text: m2[1].slice(1),
                    attr: {
                      'data-citekey': m2[1],
                      'data-source': ctx.sourcePath,
                    },
                  });
                  pos += m2[1].length;

                  if (m2[2]) {
                    frag.createSpan({
                      cls: 'pandoc-citation-formatting',
                      text: m2[2],
                    });
                    pos += m2[2].length;
                  }
                }
              }
              continue;
            case 6:
              if (match[i]) {
                const haveEntryForCiteKey =
                  plugin.view?.viewManager.haveEntryForCiteKey(
                    ctx.sourcePath,
                    match[i]
                  );
                frag.createSpan({
                  cls: getCiteClass(true, haveEntryForCiteKey),
                  text: match[i][0],
                  attr: {
                    'data-citekey': match[i],
                    'data-source': ctx.sourcePath,
                  },
                });
                frag.createSpan({
                  cls: getCiteClass(false, haveEntryForCiteKey),
                  text: match[i].slice(1),
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
            case 7:
            case 9:
              if (match[i]) {
                frag.createSpan({
                  cls: 'pandoc-citation-extra',
                  text: match[i],
                });
                pos += match[i].length;
              }
              continue;
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
  };
}
