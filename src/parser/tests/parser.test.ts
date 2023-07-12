import { CiteprocCite, cite, getCiteprocCites } from '../citeproc';
import CSL from 'citeproc';
import { locales, styles } from './styles';
import {
  CitationGroup,
  Segment,
  SegmentType,
  getCitationSegments,
  getCitations,
} from '../parser';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cslJSON from './test-csl.json';

const segmentFixtures: Record<string, Segment[][]> = {
  '@nonexistent': [
    [
      { from: 0, to: 1, val: '@', type: SegmentType.at },
      { from: 1, to: 12, val: 'nonexistent', type: SegmentType.key },
    ],
  ],
  '[@nonexistent]': [
    [
      { from: 0, to: 1, val: '[', type: SegmentType.bracket },
      { from: 1, to: 2, val: '@', type: SegmentType.at },
      { from: 2, to: 13, val: 'nonexistent', type: SegmentType.key },
      { from: 13, to: 14, val: ']', type: SegmentType.bracket },
    ],
  ],
  '@item1 says blah.': [
    [
      { from: 0, to: 1, val: '@', type: SegmentType.at },
      { from: 1, to: 6, val: 'item1', type: SegmentType.key },
    ],
  ],
  '@item1 [p. 30] says blah.': [
    [
      { from: 0, to: 1, val: '@', type: SegmentType.at },
      { from: 1, to: 6, val: 'item1', type: SegmentType.key },
      { from: 7, to: 8, val: '[', type: SegmentType.bracket },
      { from: 8, to: 10, val: 'p.', type: SegmentType.locatorLabel },
      { from: 10, to: 11, val: ' ', type: SegmentType.locatorSuffix },
      { from: 11, to: 13, val: '30', type: SegmentType.locator },
      { from: 13, to: 14, val: ']', type: SegmentType.bracket },
    ],
  ],
  '@item1, [p. 30] says blah.': [
    [
      { from: 0, to: 1, val: '@', type: SegmentType.at },
      { from: 1, to: 6, val: 'item1', type: SegmentType.key },
    ],
  ],
  '@item1 [p. 30, with suffix] says blah.': [
    [
      { from: 0, to: 1, val: '@', type: SegmentType.at },
      { from: 1, to: 6, val: 'item1', type: SegmentType.key },
      { from: 7, to: 8, val: '[', type: SegmentType.bracket },
      { from: 8, to: 10, val: 'p.', type: SegmentType.locatorLabel },
      { from: 10, to: 11, val: ' ', type: SegmentType.locatorSuffix },
      { from: 11, to: 13, val: '30', type: SegmentType.locator },
      { from: 13, to: 26, val: ', with suffix', type: SegmentType.suffix },
      { from: 26, to: 27, val: ']', type: SegmentType.bracket },
    ],
  ],
  '@item1 [-@item2 p. 30; see also @пункт3] says blah.': [
    [
      { from: 0, to: 1, val: '@', type: SegmentType.at },
      { from: 1, to: 6, val: 'item1', type: SegmentType.key },
      { from: 7, to: 8, val: '[', type: SegmentType.bracket },
      { from: 8, to: 9, val: '-', type: SegmentType.suppressor },
      { from: 9, to: 10, val: '@', type: SegmentType.at },
      { from: 10, to: 15, val: 'item2', type: SegmentType.key },
      { from: 15, to: 16, val: ' ', type: SegmentType.locatorSuffix },
      { from: 16, to: 18, val: 'p.', type: SegmentType.locatorLabel },
      { from: 18, to: 19, val: ' ', type: SegmentType.locatorSuffix },
      { from: 19, to: 21, val: '30', type: SegmentType.locator },
      { from: 21, to: 22, val: ';', type: SegmentType.separator },
      { from: 22, to: 32, val: ' see also ', type: SegmentType.prefix },
      { from: 32, to: 33, val: '@', type: SegmentType.at },
      { from: 33, to: 39, val: 'пункт3', type: SegmentType.key },
      { from: 39, to: 40, val: ']', type: SegmentType.bracket },
    ],
  ],
  'A citation group [see @item1 chap. 3; also @пункт3 p. 34-35].': [
    [
      { from: 17, to: 18, val: '[', type: SegmentType.bracket },
      { from: 18, to: 22, val: 'see ', type: SegmentType.prefix },
      { from: 22, to: 23, val: '@', type: SegmentType.at },
      { from: 23, to: 28, val: 'item1', type: SegmentType.key },
      { from: 28, to: 29, val: ' ', type: SegmentType.locatorSuffix },
      { from: 29, to: 34, val: 'chap.', type: SegmentType.locatorLabel },
      { from: 34, to: 35, val: ' ', type: SegmentType.locatorSuffix },
      { from: 35, to: 36, val: '3', type: SegmentType.locator },
      { from: 36, to: 37, val: ';', type: SegmentType.separator },
      { from: 37, to: 43, val: ' also ', type: SegmentType.prefix },
      { from: 43, to: 44, val: '@', type: SegmentType.at },
      { from: 44, to: 50, val: 'пункт3', type: SegmentType.key },
      { from: 50, to: 51, val: ' ', type: SegmentType.locatorSuffix },
      { from: 51, to: 53, val: 'p.', type: SegmentType.locatorLabel },
      { from: 53, to: 54, val: ' ', type: SegmentType.locatorSuffix },
      { from: 54, to: 59, val: '34-35', type: SegmentType.locator },
      { from: 59, to: 60, val: ']', type: SegmentType.bracket },
    ],
  ],
  'Another one [see\t@item1 p. 34-35].': [
    [
      { from: 12, to: 13, val: '[', type: SegmentType.bracket },
      { from: 13, to: 17, val: 'see\t', type: SegmentType.prefix },
      { from: 17, to: 18, val: '@', type: SegmentType.at },
      { from: 18, to: 23, val: 'item1', type: SegmentType.key },
      { from: 23, to: 24, val: ' ', type: SegmentType.locatorSuffix },
      { from: 24, to: 26, val: 'p.', type: SegmentType.locatorLabel },
      { from: 26, to: 27, val: ' ', type: SegmentType.locatorSuffix },
      { from: 27, to: 32, val: '34-35', type: SegmentType.locator },
      { from: 32, to: 33, val: ']', type: SegmentType.bracket },
    ],
  ],
  'Citation with a suffix and locator [@item1 pp. 33, 35-37, and nowhere else].':
    [
      [
        { from: 35, to: 36, val: '[', type: SegmentType.bracket },
        { from: 36, to: 37, val: '@', type: SegmentType.at },
        { from: 37, to: 42, val: 'item1', type: SegmentType.key },
        { from: 42, to: 43, val: ' ', type: SegmentType.locatorSuffix },
        { from: 43, to: 46, val: 'pp.', type: SegmentType.locatorLabel },
        { from: 46, to: 47, val: ' ', type: SegmentType.locatorSuffix },
        { from: 47, to: 56, val: '33, 35-37', type: SegmentType.locator },
        {
          from: 56,
          to: 74,
          val: ', and nowhere else',
          type: SegmentType.suffix,
        },
        { from: 74, to: 75, val: ']', type: SegmentType.bracket },
      ],
    ],
  'Citation with suffix only [@item1 and nowhere else].': [
    [
      { from: 26, to: 27, val: '[', type: SegmentType.bracket },
      { from: 27, to: 28, val: '@', type: SegmentType.at },
      { from: 28, to: 33, val: 'item1', type: SegmentType.key },
      { from: 33, to: 50, val: ' and nowhere else', type: SegmentType.suffix },
      { from: 50, to: 51, val: ']', type: SegmentType.bracket },
    ],
  ],
  'With some markup [*see* @item1 p. **32**].': [
    [
      { from: 17, to: 18, val: '[', type: SegmentType.bracket },
      { from: 18, to: 24, val: '*see* ', type: SegmentType.prefix },
      { from: 24, to: 25, val: '@', type: SegmentType.at },
      { from: 25, to: 30, val: 'item1', type: SegmentType.key },
      { from: 30, to: 40, val: ' p. **32**', type: SegmentType.suffix },
      { from: 40, to: 41, val: ']', type: SegmentType.bracket },
    ],
  ],
  '@cite\n@cite': [
    [
      { from: 0, to: 1, val: '@', type: SegmentType.at },
      { from: 1, to: 5, val: 'cite', type: SegmentType.key },
    ],
    [
      { from: 6, to: 7, val: '@', type: SegmentType.at },
      { from: 7, to: 11, val: 'cite', type: SegmentType.key },
    ],
  ],
  'Also with curly brackets @{foo.bar.}.': [
    [
      { from: 25, to: 26, val: '@', type: SegmentType.at },
      { from: 26, to: 27, val: '{', type: SegmentType.curlyBracket },
      { from: 27, to: 35, val: 'foo.bar.', type: SegmentType.key },
      { from: 35, to: 36, val: '}', type: SegmentType.curlyBracket },
    ],
  ],
  'Also with curly brackets @{foo.bar.}. [pp. 30-33, 40-44]': [
    [
      { from: 25, to: 26, val: '@', type: SegmentType.at },
      { from: 26, to: 27, val: '{', type: SegmentType.curlyBracket },
      { from: 27, to: 35, val: 'foo.bar.', type: SegmentType.key },
      { from: 35, to: 36, val: '}', type: SegmentType.curlyBracket },
    ],
  ],

  'Also with curly brackets @{foo.bar.} [pp. 30-33, 40-44]': [
    [
      { from: 25, to: 26, val: '@', type: SegmentType.at },
      { from: 26, to: 27, val: '{', type: SegmentType.curlyBracket },
      { from: 27, to: 35, val: 'foo.bar.', type: SegmentType.key },
      { from: 35, to: 36, val: '}', type: SegmentType.curlyBracket },
      { from: 37, to: 38, val: '[', type: SegmentType.bracket },
      { from: 38, to: 41, val: 'pp.', type: SegmentType.locatorLabel },
      { from: 41, to: 42, val: ' ', type: SegmentType.locatorSuffix },
      { from: 42, to: 54, val: '30-33, 40-44', type: SegmentType.locator },
      { from: 54, to: 55, val: ']', type: SegmentType.bracket },
    ],
  ],
  'With curly brackets [@{https://example.com/bib?name=foobar&date=2000}, p. 33].':
    [
      [
        { from: 20, to: 21, val: '[', type: SegmentType.bracket },
        { from: 21, to: 22, val: '@', type: SegmentType.at },
        { from: 22, to: 23, val: '{', type: SegmentType.curlyBracket },
        {
          from: 23,
          to: 68,
          val: 'https://example.com/bib?name=foobar&date=2000',
          type: SegmentType.key,
        },
        { from: 68, to: 69, val: '}', type: SegmentType.curlyBracket },
        { from: 69, to: 76, val: ', p. 33', type: SegmentType.suffix },
        { from: 76, to: 77, val: ']', type: SegmentType.bracket },
      ],
    ],
  'With explicit locator [@smith{ii, A, D-Z}, with a suffix].': [
    [
      { from: 22, to: 23, val: '[', type: SegmentType.bracket },
      { from: 23, to: 24, val: '@', type: SegmentType.at },
      { from: 24, to: 29, val: 'smith', type: SegmentType.key },
      { from: 29, to: 30, val: '{', type: SegmentType.curlyBracket },
      { from: 30, to: 40, val: 'ii, A, D-Z', type: SegmentType.locator },
      { from: 40, to: 41, val: '}', type: SegmentType.curlyBracket },
      { from: 41, to: 56, val: ', with a suffix', type: SegmentType.suffix },
      { from: 56, to: 57, val: ']', type: SegmentType.bracket },
    ],
  ],
  'With explicit not-locator [@smith{}, 99 years later].': [
    [
      { from: 26, to: 27, val: '[', type: SegmentType.bracket },
      { from: 27, to: 28, val: '@', type: SegmentType.at },
      { from: 28, to: 33, val: 'smith', type: SegmentType.key },
      { from: 33, to: 34, val: '{', type: SegmentType.curlyBracket },
      { from: 34, to: 35, val: '}', type: SegmentType.curlyBracket },
      { from: 35, to: 51, val: ', 99 years later', type: SegmentType.suffix },
      { from: 51, to: 52, val: ']', type: SegmentType.bracket },
    ],
  ],
  [`With newline [@smith
    , 99 years later].`]: [],

  // Locators
  '@item1 [p. 30]': [
    [
      { from: 0, to: 1, val: '@', type: SegmentType.at },
      { from: 1, to: 6, val: 'item1', type: SegmentType.key },
      { from: 7, to: 8, val: '[', type: SegmentType.bracket },
      { from: 8, to: 10, val: 'p.', type: SegmentType.locatorLabel },
      { from: 10, to: 11, val: ' ', type: SegmentType.locatorSuffix },
      { from: 11, to: 13, val: '30', type: SegmentType.locator },
      { from: 13, to: 14, val: ']', type: SegmentType.bracket },
    ],
  ],
  '@item1 [p. [30]-[40]]': [
    [
      { from: 0, to: 1, val: '@', type: SegmentType.at },
      { from: 1, to: 6, val: 'item1', type: SegmentType.key },
      { from: 7, to: 8, val: '[', type: SegmentType.bracket },
      { from: 8, to: 10, val: 'p.', type: SegmentType.locatorLabel },
      { from: 10, to: 11, val: ' ', type: SegmentType.locatorSuffix },
      { from: 11, to: 20, val: '[30]-[40]', type: SegmentType.locator },
      { from: 20, to: 21, val: ']', type: SegmentType.bracket },
    ],
  ],
  '@item1 [欄 30]': [
    [
      { from: 0, to: 1, val: '@', type: SegmentType.at },
      { from: 1, to: 6, val: 'item1', type: SegmentType.key },
      { from: 7, to: 8, val: '[', type: SegmentType.bracket },
      { from: 8, to: 9, val: '欄', type: SegmentType.locatorLabel },
      { from: 9, to: 10, val: ' ', type: SegmentType.locatorSuffix },
      { from: 10, to: 12, val: '30', type: SegmentType.locator },
      { from: 12, to: 13, val: ']', type: SegmentType.bracket },
    ],
  ],
  '@item1 [pp. iv, vi-xi, (xv)-(xvii), with suffix]': [
    [
      { from: 0, to: 1, val: '@', type: SegmentType.at },
      { from: 1, to: 6, val: 'item1', type: SegmentType.key },
      { from: 7, to: 8, val: '[', type: SegmentType.bracket },
      { from: 8, to: 11, val: 'pp.', type: SegmentType.locatorLabel },
      { from: 11, to: 12, val: ' ', type: SegmentType.locatorSuffix },
      {
        from: 12,
        to: 34,
        val: 'iv, vi-xi, (xv)-(xvii)',
        type: SegmentType.locator,
      },
      { from: 34, to: 47, val: ', with suffix', type: SegmentType.suffix },
      { from: 47, to: 48, val: ']', type: SegmentType.bracket },
    ],
  ],
  '@item1 [{ii, A, D-Z}, with a suffix]': [
    [
      { from: 0, to: 1, val: '@', type: SegmentType.at },
      { from: 1, to: 6, val: 'item1', type: SegmentType.key },
      { from: 7, to: 8, val: '[', type: SegmentType.bracket },
      { from: 8, to: 9, val: '{', type: SegmentType.curlyBracket },
      { from: 9, to: 19, val: 'ii, A, D-Z', type: SegmentType.locator },
      { from: 19, to: 20, val: '}', type: SegmentType.curlyBracket },
      { from: 20, to: 35, val: ', with a suffix', type: SegmentType.suffix },
      { from: 35, to: 36, val: ']', type: SegmentType.bracket },
    ],
  ],
  '[@smith{ii, A, D-Z}, with a suffix]': [
    [
      { from: 0, to: 1, val: '[', type: SegmentType.bracket },
      { from: 1, to: 2, val: '@', type: SegmentType.at },
      { from: 2, to: 7, val: 'smith', type: SegmentType.key },
      { from: 7, to: 8, val: '{', type: SegmentType.curlyBracket },
      { from: 8, to: 18, val: 'ii, A, D-Z', type: SegmentType.locator },
      { from: 18, to: 19, val: '}', type: SegmentType.curlyBracket },
      { from: 19, to: 34, val: ', with a suffix', type: SegmentType.suffix },
      { from: 34, to: 35, val: ']', type: SegmentType.bracket },
    ],
  ],
  '[@smith{pp. ii, A, D-Z}, with a suffix]': [
    [
      { from: 0, to: 1, val: '[', type: SegmentType.bracket },
      { from: 1, to: 2, val: '@', type: SegmentType.at },
      { from: 2, to: 7, val: 'smith', type: SegmentType.key },
      { from: 7, to: 8, val: '{', type: SegmentType.curlyBracket },
      { from: 8, to: 11, val: 'pp.', type: SegmentType.locatorLabel },
      { from: 11, to: 12, val: ' ', type: SegmentType.locatorSuffix },
      { from: 12, to: 22, val: 'ii, A, D-Z', type: SegmentType.locator },
      { from: 22, to: 23, val: '}', type: SegmentType.curlyBracket },
      { from: 23, to: 38, val: ', with a suffix', type: SegmentType.suffix },
      { from: 38, to: 39, val: ']', type: SegmentType.bracket },
    ],
  ],
  '[@smith, {pp. iv, vi-xi, (xv)-(xvii)} with suffix here].': [
    [
      { from: 0, to: 1, val: '[', type: SegmentType.bracket },
      { from: 1, to: 2, val: '@', type: SegmentType.at },
      { from: 2, to: 7, val: 'smith', type: SegmentType.key },
      { from: 7, to: 9, val: ', ', type: SegmentType.suffix },
      { from: 9, to: 10, val: '{', type: SegmentType.curlyBracket },
      { from: 10, to: 13, val: 'pp.', type: SegmentType.locatorLabel },
      { from: 13, to: 14, val: ' ', type: SegmentType.locatorSuffix },
      {
        from: 14,
        to: 36,
        val: 'iv, vi-xi, (xv)-(xvii)',
        type: SegmentType.locator,
      },
      { from: 36, to: 37, val: '}', type: SegmentType.curlyBracket },
      { from: 37, to: 54, val: ' with suffix here', type: SegmentType.suffix },
      { from: 54, to: 55, val: ']', type: SegmentType.bracket },
    ],
  ],
};

describe('getCiteKeys()', () => {
  Object.keys(segmentFixtures).forEach((k) => {
    it(k, () => expect(getCitationSegments(k)).toEqual(segmentFixtures[k]));
  });
});

const citationFixtures: Record<string, CitationGroup> = {
  '@nonexistent': {
    data: segmentFixtures['@nonexistent'][0],
    citations: [
      {
        id: 'nonexistent',
        composite: true,
      },
    ],
    from: 0,
    to: 12,
  },
  '[@nonexistent]': {
    data: segmentFixtures['[@nonexistent]'][0],
    citations: [
      {
        id: 'nonexistent',
      },
    ],
    from: 0,
    to: 14,
  },
  '@item1 says blah.': {
    data: segmentFixtures['@item1 says blah.'][0],
    citations: [
      {
        id: 'item1',
        composite: true,
      },
    ],
    from: 0,
    to: 6,
  },
  '@item1 [p. 30] says blah.': {
    data: segmentFixtures['@item1 [p. 30] says blah.'][0],
    citations: [
      {
        id: 'item1',
        composite: true,
        label: 'page',
        locator: '30',
      },
    ],
    from: 0,
    to: 14,
  },
  '@item1 [p. 30, with suffix] says blah.': {
    data: segmentFixtures['@item1 [p. 30, with suffix] says blah.'][0],
    citations: [
      {
        id: 'item1',
        composite: true,
        label: 'page',
        locator: '30',
        suffix: ', with suffix',
      },
    ],
    from: 0,
    to: 27,
  },
  '@item1 [-@item2 p. 30; see also @пункт3] says blah.': {
    data: segmentFixtures[
      '@item1 [-@item2 p. 30; see also @пункт3] says blah.'
    ][1],
    citations: [
      {
        id: 'item2',
        'suppress-author': true,
        label: 'page',
        locator: '30',
      },
      {
        id: 'пункт3',
        prefix: ' see also ',
      },
    ],
    from: 7,
    to: 40,
  },
  'Also with curly brackets @{foo.bar.} [pp. 30-33, 40-44]': {
    data: segmentFixtures[
      'Also with curly brackets @{foo.bar.} [pp. 30-33, 40-44]'
    ][0],
    citations: [
      {
        id: 'foo.bar.',
        composite: true,
        label: 'page',
        locator: '30-33, 40-44',
      },
    ],
    from: 25,
    to: 55,
  },
  'With explicit not-locator [@smith{}, 99 years later].': {
    data: segmentFixtures[
      'With explicit not-locator [@smith{}, 99 years later].'
    ][0],
    citations: [
      {
        id: 'smith',
        suffix: ', 99 years later',
      },
    ],
    from: 26,
    to: 52,
  },
};

describe('parseSegments()', () => {
  Object.keys(segmentFixtures).forEach((k) => {
    if (!citationFixtures[k]) return;
    it(k, () => {
      segmentFixtures[k].forEach((seg) => {
        if (seg === citationFixtures[k].data) {
          expect(getCitations(seg)).toEqual(citationFixtures[k]);
        }
      });
    });
  });
});

const citeprocCites: Record<string, CiteprocCite[]> = {
  '@nonexistent': [
    {
      citationID: '@nonexistent',
      citationItems: [
        {
          id: 'nonexistent',
        },
      ],
      properties: {
        noteIndex: 0,
        mode: 'composite',
      },
    },
  ],
  '[@nonexistent]': [
    {
      citationID: '[@nonexistent]',
      citationItems: [
        {
          id: 'nonexistent',
        },
      ],
      properties: {
        noteIndex: 0,
      },
    },
  ],
  '@item1 says blah.': [
    {
      citationID: '@item1 says blah.',
      citationItems: [
        {
          id: 'item1',
        },
      ],
      properties: {
        noteIndex: 0,
        mode: 'composite',
      },
    },
  ],
  '@item1 [p. 30] says blah.': [
    {
      citationID: '@item1 [p. 30] says blah.',
      citationItems: [
        {
          id: 'item1',
          label: 'page',
          locator: '30',
        },
      ],
      properties: {
        noteIndex: 0,
        mode: 'composite',
      },
    },
  ],
  '@item1 [p. 30, with suffix] says blah.': [
    {
      citationID: '@item1 [p. 30, with suffix] says blah.0',
      citationItems: [
        {
          id: 'item1',
          'author-only': true,
        },
      ],
      properties: {
        noteIndex: 0,
      },
    },
    {
      citationID: '@item1 [p. 30, with suffix] says blah.',
      citationItems: [
        {
          id: 'item1',
          label: 'page',
          locator: '30',
          suffix: ', with suffix',
          'suppress-author': true,
        },
      ],
      properties: {
        noteIndex: 0,
      },
    },
  ],
  '@item1 [-@item2 p. 30; see also @пункт3] says blah.': [
    {
      citationID: '@item1 [-@item2 p. 30; see also @пункт3] says blah.',
      citationItems: [
        {
          id: 'item2',
          'suppress-author': true,
          label: 'page',
          locator: '30',
        },
        {
          id: 'пункт3',
          prefix: ' see also ',
        },
      ],
      properties: {
        noteIndex: 0,
      },
    },
  ],
  'Also with curly brackets @{foo.bar.} [pp. 30-33, 40-44]': [
    {
      citationID: 'Also with curly brackets @{foo.bar.} [pp. 30-33, 40-44]',
      citationItems: [
        {
          id: 'foo.bar.',
          label: 'page',
          locator: '30-33, 40-44',
        },
      ],
      properties: {
        noteIndex: 0,
        mode: 'composite',
      },
    },
  ],
  'With explicit not-locator [@smith{}, 99 years later].': [
    {
      citationID: 'With explicit not-locator [@smith{}, 99 years later].',
      citationItems: [
        {
          id: 'smith',
          suffix: ', 99 years later',
        },
      ],
      properties: {
        noteIndex: 0,
      },
    },
  ],
};

describe('getCiteprocCites()', () => {
  Object.keys(citationFixtures).forEach((k) => {
    if (!citeprocCites[k]) return;
    it(k, () => {
      expect(getCiteprocCites([citationFixtures[k]], k).output).toEqual(
        citeprocCites[k]
      );
    });
  });
});

const citeprocFixtures: Record<string, string[]> = {
  '@iversetal2021': ['Ivers et al. (2021)'],
  '@iversetal2021 [p. 30] says blah': ['Ivers et al. (2021, p. 30)'],
  '@iversetal2021 [pp. 30-40]': ['Ivers et al. (2021, pp. 30–40)'],
  '@iversetal2021 [p. 30; see also @kabat-zinn2003] says blah': [
    'Ivers et al. (2021, p. 30; see also Kabat-Zinn, 2003)',
  ],
  '@iversetal2021 [-@iversetal2021 p. 30, with suffix] says blah': [
    'Ivers et al. (2021, p. 30, with suffix)',
  ],
  '@iversetal2021 [p. 30, with suffix] says blah': [
    'Ivers et al. (2021, p. 30, with suffix)',
  ],
  '@iversetal2021 [-@iversetal2021 p. 30; see also @kabat-zinn2003] says blah':
    ['Ivers et al. (2021, p. 30; see also Kabat-Zinn, 2003)'],
  '[@iversetal2021 p. 30; see also @kabat-zinn2003 p. (10)-(20)] says blah': [
    '(Ivers et al., 2021, p. 30; see also Kabat-Zinn, 2003, p. (10)-(20))',
  ],
  '[@schureetal2008; @brownetal2013; @lemberger-trueloveetal2018]': [
    '(Brown et al., 2013; Lemberger-Truelove et al., 2018; Schure et al., 2008)',
  ],
};

describe('cite', () => {
  const lib = new Map<string, any>();
  const sys = {
    retrieveLocale() {
      return locales['en-US'];
    },
    retrieveItem(id: string) {
      return lib.get(id);
    },
  };

  const engine = new CSL.Engine(sys, styles.apa);

  function loadCSL(csl: any[]) {
    if (Array.isArray(csl)) {
      csl.forEach((entry) => {
        lib.set(entry.id, entry);
      });
    } else {
      throw new Error('Error: CSL file must be an array.');
    }
  }

  beforeAll(() => {
    loadCSL(cslJSON);
  });

  Object.keys(citeprocFixtures).forEach((k) => {
    it(k, () => {
      const segs = getCitationSegments(k);
      expect(
        cite(
          engine,
          segs.map((s) => getCitations(s))
        ).map((c) => c.val)
      ).toEqual(citeprocFixtures[k]);
    });
  });
});
