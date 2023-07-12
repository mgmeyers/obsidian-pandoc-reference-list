import { Citation, CitationGroup, RenderedCitation } from './parser';

export type CiteMode = 'suppress-author' | 'composite' | 'author-only';
export interface CiteProps {
  noteIndex: number;
  mode?: CiteMode;
  infix?: string;
}

export interface CiteprocCite {
  citationID: string;
  citationItems: Citation[];
  properties: CiteProps;
}

function genUid(length: number): string {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(((Math.random() * 16) | 0).toString(16));
  }
  return `${Date.now()}-${array.join('')}`;
}

export function getCiteprocCites(groups: CitationGroup[]) {
  const output: CiteprocCite[] = [];
  const idToGroup: Record<string, number> = {};

  groups.forEach((group, gIdx) => {
    let mode: CiteMode;
    let infix: string;
    const id = genUid(6);

    const citationItems: Citation[] = [];

    group.citations.forEach((g, i) => {
      const cite: Citation = {
        id: g.id,
      };

      const next = group.citations[i + 1];

      if (i === 0 && g.composite) {
        if (g.suffix) {
          const cid = id + i.toString();
          idToGroup[cid] = gIdx;
          output.push({
            citationID: cid,
            citationItems: [
              {
                ...cite,
                ['author-only']: true,
              },
            ],
            properties: {
              noteIndex: 0,
            },
          });
          const nextCite = {
            ...cite,
            ['suppress-author']: true,
          };
          if (g.label) nextCite.label = g.label;
          if (g.locator) nextCite.locator = g.locator;
          if (g.prefix) nextCite.prefix = g.prefix;
          if (g.suffix) nextCite.suffix = g.suffix;
          citationItems.push(nextCite);
          return;
        } else {
          if (g.composite) mode = 'composite';
          if (g.infix) infix = g.infix;
        }
      } else if (
        i === 0 &&
        (g['author-only'] || g.composite) &&
        next &&
        next['suppress-author']
      ) {
        const cid = id + i.toString();
        idToGroup[cid] = gIdx;
        output.push({
          citationID: cid,
          citationItems: [
            {
              ...cite,
              ['author-only']: true,
            },
          ],
          properties: {
            noteIndex: 0,
          },
        });
        return;
      } else {
        if (g['suppress-author']) cite['suppress-author'] = true;
        else if (g['author-only']) cite['author-only'] = true;
      }

      if (g.label) cite.label = g.label;
      if (g.locator) cite.locator = g.locator;
      if (g.prefix) cite.prefix = g.prefix;
      if (g.suffix) cite.suffix = g.suffix;

      citationItems.push(cite);
    });

    const properties: CiteProps = {
      noteIndex: 0,
    };

    if (mode) properties.mode = mode;
    if (infix) properties.infix = infix;

    idToGroup[id] = gIdx;
    output.push({
      citationID: id,
      citationItems,
      properties,
    });
  });

  return { output, idToGroup };
}

function getPrePost(i: number, arr: CiteprocCite[]) {
  return {
    pre: arr.slice(0, i).map((c) => [c.citationID, 0]),
    post: [] as Array<string | number>, //arr.slice(i + 1).map((c) => [c.citationID, 0]),
  };
}

function decodeHtml(str: string) {
  const txt = createEl('textarea');
  txt.innerHTML = str;
  return txt.value;
}

function sanitize(val: string) {
  return decodeHtml(val.replace(/ *\[NO_PRINTED_FORM\] */g, ''));
}

export function cite(engine: any, group: CitationGroup[]) {
  const { output, idToGroup } = getCiteprocCites(group);
  const temp: RenderedCitation[] = [];

  output.forEach((cite, i, arr) => {
    const { pre, post } = getPrePost(i, arr);
    const res = engine.processCitationCluster(cite, pre, post);

    let rendered: RenderedCitation;

    res[1].forEach(([idx, str, id]: [number, string, string]) => {
      const gid = idToGroup[id];
      if (idx === i) {
        rendered = {
          ...group[gid],
          val: str,
        };
      } else if (temp[idx]) {
        temp[idx].val = str;
      }
    });

    temp.push(rendered);
  });

  const out: RenderedCitation[] = [];
  let loc: string;
  let tempR: RenderedCitation;

  for (const cite of temp) {
    const thisLoc = `${cite.from}-${cite.to}`;
    if (!tempR) {
      loc = thisLoc;
      tempR = cite;
      continue;
    }

    if (loc !== thisLoc) {
      tempR.val = sanitize(tempR.val);
      out.push(tempR);
      loc = thisLoc;
      tempR = cite;
      continue;
    }

    loc = thisLoc;
    tempR.val += ` ${cite.val}`;
  }

  if (tempR) {
    tempR.val = sanitize(tempR.val);
  }
  out.push(tempR);

  return out;
}
