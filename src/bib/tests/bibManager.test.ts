/* eslint-disable @typescript-eslint/ban-ts-comment */

import path from 'path';
import {
  bibToCSL,
  getCSLLocale,
  getCSLStyle,
  // getZBib,
  getZUserGroups,
  isZoteroRunning,
} from '../helpers';

// @ts-ignore
import testCSL from './test.json';
// @ts-ignore
import testBIBCSL from './test.bib.json';
// @ts-ignore
import testBIB2CSL from './test2.bib.json';
// @ts-ignore
import testYAMLCSL from './test.yaml.json';
// @ts-ignore
// import library from './My Library.json';
import { existsSync, rmSync } from 'fs';

describe('bibToCSL()', () => {
  it('returns json from json', async () => {
    expect(
      await bibToCSL(
        path.join(__dirname, 'test.json'),
        '/opt/homebrew/bin/pandoc'
      )
    ).toEqual(testCSL);
  });

  it('returns json from bib', async () => {
    expect(
      await bibToCSL(
        path.join(__dirname, 'test.bib'),
        '/opt/homebrew/bin/pandoc'
      )
    ).toEqual(testBIBCSL);
  });

  it('returns json from bib2', async () => {
    expect(
      await bibToCSL(
        path.join(__dirname, 'test2.bib'),
        '/opt/homebrew/bin/pandoc'
      )
    ).toEqual(testBIB2CSL);
  });

  it('returns json from yaml', async () => {
    expect(
      await bibToCSL(
        path.join(__dirname, 'test.yaml'),
        '/opt/homebrew/bin/pandoc'
      )
    ).toEqual(testYAMLCSL);
  });
});

// @ts-ignore
global.setImmediate =
  // @ts-ignore
  global.setImmediate || ((fn, ...args) => global.setTimeout(fn, 0, ...args));

describe('getLocale()', () => {
  it('fetches a locale', async () => {
    const cache = new Map<string, string>();
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);
    const locale = await getCSLLocale(cache, __dirname, 'bg-BG');
    expect(typeof locale).toBe('string');
    expect(existsSync(path.join(__dirname, 'locales-bg-BG.xml'))).toBe(true);
    await getCSLLocale(cache, __dirname, 'bg-BG');
    rmSync(path.join(__dirname, 'locales-bg-BG.xml'));
  });
});

describe('getStyle()', () => {
  it('fetches a style', async () => {
    const cache = new Map<string, string>();
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);
    const style = await getCSLStyle(
      cache,
      __dirname,
      'australian-guide-to-legal-citation-3rd-edition'
    );
    expect(typeof style).toBe('string');
    expect(
      existsSync(
        path.join(
          __dirname,
          'australian-guide-to-legal-citation-3rd-edition.csl'
        )
      )
    ).toBe(true);
    await getCSLStyle(
      cache,
      __dirname,
      'australian-guide-to-legal-citation-3rd-edition'
    );
    rmSync(
      path.join(__dirname, 'australian-guide-to-legal-citation-3rd-edition.csl')
    );
  });
});

describe('getZUserGroups()', () => {
  it('retrieves user groups', async () => {
    expect(await getZUserGroups('23119')).toEqual([
      { id: 1, name: 'My Library' },
      { id: 2, name: 'test' },
    ]);
  });
});

// describe('getZBib()', () => {
//   it('retrieves bib', async () => {
//     expect(await getZBib(new Map(), '23119', 1, 'My Library')).toEqual(library);
//   });
// });

describe('isZoteroRunning()', () => {
  it('runs', async () => {
    expect(await isZoteroRunning('23119')).toBe(true);
  });
});
