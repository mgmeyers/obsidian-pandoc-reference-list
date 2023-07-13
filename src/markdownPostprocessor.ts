import { MarkdownPostProcessorContext } from 'obsidian';

import ReferenceList from './main';
import { Segment, SegmentType, getCitationSegments } from './parser/parser';
import equal from 'fast-deep-equal';

function getCiteClass(isResolved: boolean, isUnresolved: boolean) {
  const cls = ['pandoc-citation'];
  if (isResolved) cls.push('is-resolved');
  if (isUnresolved) cls.push('is-unresolved');

  return cls.join(' ');
}

function onlyValType(segs: Segment[]) {
  return segs.map((s) => ({ type: s.type, val: s.val }));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function processCiteKeys(plugin: ReferenceList) {
  return (el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
    const walker = activeDocument.createNodeIterator(el, NodeFilter.SHOW_TEXT);
    const toRemove: Node[] = [];
    const sectionInfo = ctx.getSectionInfo(el);

    if (!sectionInfo) return;

    const sectionCites = plugin.bibManager.getCitationsForSection(
      ctx.sourcePath,
      sectionInfo.lineStart,
      sectionInfo.lineEnd
    );

    let node;
    while ((node = walker.nextNode())) {
      const content = node.nodeValue;

      if (node.parentElement && node.parentElement.tagName === 'CODE') {
        continue;
      }

      let frag = createFragment();
      let pos = 0;
      let didMatch = false;

      const segments = getCitationSegments(content);
      for (const match of segments) {
        if (!didMatch) didMatch = true;

        const renderedCiteIndex = sectionCites.findIndex((c) =>
          equal(onlyValType(c.data), onlyValType(match))
        );

        if (renderedCiteIndex >= 0) {
          const renderedCite = sectionCites[renderedCiteIndex];
          const preCite = content.substring(pos, match[0].from);

          const attr = {
            'data-citekey': renderedCite.citations.map((c) => c.id).join('|'),
            'data-source': ctx.sourcePath,
          };

          pos = match[match.length - 1].to;

          frag.appendText(preCite);
          frag.createSpan({
            cls: 'pandoc-citation is-resolved',
            text: renderedCite.val,
            attr: attr,
          });

          continue;
        }

        for (let i = 0, len = match.length; i < len; i++) {
          const part = match[i];
          const next = match[i + 1];
          frag.appendText(content.substring(pos, part.from));
          pos = part.to;

          switch (part.type) {
            case SegmentType.key: {
              const { isResolved, isUnresolved } =
                plugin.bibManager.getResolution(ctx.sourcePath, part.val) || {
                  isResolved: false,
                  isUnresolved: false,
                };

              frag.createSpan({
                cls: getCiteClass(isResolved, isUnresolved),
                text: part.val,
                attr: {
                  'data-citekey': part.val,
                  'data-source': ctx.sourcePath,
                },
              });
              continue;
            }
            case SegmentType.at: {
              const { isResolved, isUnresolved } =
                plugin.bibManager.getResolution(ctx.sourcePath, next?.val) || {
                  isResolved: false,
                  isUnresolved: false,
                };

              const classes: string[] = [part.type];

              if (isUnresolved) classes.push('is-unresolved');
              if (isResolved) classes.push('is-resolved');

              frag.createSpan({
                cls: `pandoc-citation-formatting ${classes.join(' ')}`,
                text: part.val,
              });
              continue;
            }
            case SegmentType.curlyBracket:
            case SegmentType.bracket:
            case SegmentType.separator:
            case SegmentType.suppressor:
            case SegmentType.prefix:
            case SegmentType.suffix:
            case SegmentType.locator:
            case SegmentType.locatorLabel:
            case SegmentType.locatorSuffix:
              frag.createSpan({
                cls: `pandoc-citation-formatting ${part.type}`,
                text: part.val,
              });
              continue;
          }
        }
      }

      if (didMatch) {
        // Add trailing text
        frag.appendText(content.substring(pos));
        toRemove.push(node);
        node.parentNode.insertBefore(frag, node);
        frag = null;
      }
    }

    toRemove.forEach((n) => n.parentNode.removeChild(n));
  };
}
