import path from 'path';

import {
  areSetsEqual,
  extractCiteKeys,
  pandocHTMLToBibFragment,
  pandocMarkdownToHTML,
} from '../mdToReferenceList';

describe('areSetsEqual', () => {
  it('returns true if sets contain the same values', () => {
    const a = new Set(['a', 'b', 'c']);
    const b = new Set(['b', 'c', 'a']);

    expect(areSetsEqual(a, b)).toBe(true);
  });

  it('returns false if sets do not contain the same values', () => {
    const a = new Set(['a', 'b', 'c']);
    const b = new Set(['b', 'c', 'nope']);

    expect(areSetsEqual(a, b)).toBe(false);

    const c = new Set(['a', 'b', 'c']);
    const d = new Set(['a', 'b', 'c', 'd']);

    expect(areSetsEqual(c, d)).toBe(false);
  });
});

describe('extractCiteKeys', () => {
  it('returns a set of citekeys extracted from the supplied string', () => {
    const md = `
      aaa [@one p.33]. 
      bbbb @two [p. 33]. 
      wefwe [@three; @four].
      owe [-@five]
      @five
    `;

    const expectedSet = new Set(['@one', '@two', '@three', '@four', '@five']);

    expect(areSetsEqual(expectedSet, extractCiteKeys(md))).toBe(true);
  });
});

describe('pandocMarkdownToHTML', () => {
  it('throws an error if any requred params are missing', async () => {
    let error = null;
    try {
      await pandocMarkdownToHTML({ pathToPandoc: '' }, '');
    } catch (e) {
      error = e;
    }

    expect(error.message).toContain('path to pandoc');

    error = null;
    try {
      await pandocMarkdownToHTML({ pathToPandoc: '/usr/local/bin/pandoc' }, '');
    } catch (e) {
      error = e;
    }

    expect(error.message).toContain('file path');

    error = null;
    try {
      await pandocMarkdownToHTML(
        {
          pathToPandoc: '/usr/local/bin/pandoc',
          pathToBibliography: '',
        },
        path.join(__dirname, 'test.md')
      );
    } catch (e) {
      error = e;
    }

    expect(error.message).toContain('bibliography');

    error = null;
    try {
      await pandocMarkdownToHTML(
        {
          pathToPandoc: '/usr/local/bin/pandoc',
          pathToBibliography: path.join(__dirname, 'test.json'),
        },
        path.join(__dirname, 'test.md')
      );
    } catch (e) {
      error = e;
    }

    expect(error).toBeNull();
  });

  it('catches error with missing binary', async () => {
    let error = null;
    try {
      await pandocMarkdownToHTML(
        {
          pathToPandoc: '/usr/local/bin/pandoc2',
          pathToBibliography: path.join(__dirname, 'test.json'),
        },
        path.join(__dirname, 'test.md')
      );
    } catch (e) {
      error = e;
    }

    expect(error).not.toBeNull();
  });

  it('catches error with missing bibliography', async () => {
    let error = null;
    try {
      await pandocMarkdownToHTML(
        {
          pathToPandoc: '/usr/local/bin/pandoc',
          pathToBibliography: path.join(__dirname, 'test2.json'),
        },
        path.join(__dirname, 'test.md')
      );
    } catch (e) {
      error = e;
    }

    expect(error).not.toBeNull();
  });

  it('catches error with missing markdown file', async () => {
    let error = null;
    try {
      await pandocMarkdownToHTML(
        {
          pathToPandoc: '/usr/local/bin/pandoc',
          pathToBibliography: path.join(__dirname, 'test.json'),
        },
        path.join(__dirname, 'test2.md')
      );
    } catch (e) {
      error = e;
    }

    expect(error).not.toBeNull();
  });

  it('returns a string containing HTML', async () => {
    const html = await pandocMarkdownToHTML(
      {
        pathToPandoc: '/usr/local/bin/pandoc',
        pathToBibliography: path.join(__dirname, 'test.json'),
      },
      path.join(__dirname, 'test.md')
    );

    expect(html).toContain('</div>');
  });

  it('returns a different string when CSL is supplied', async () => {
    const html1 = await pandocMarkdownToHTML(
      {
        pathToPandoc: '/usr/local/bin/pandoc',
        pathToBibliography: path.join(__dirname, 'test.json'),
      },
      path.join(__dirname, 'test.md')
    );

    const html2 = await pandocMarkdownToHTML(
      {
        pathToPandoc: '/usr/local/bin/pandoc',
        pathToBibliography: path.join(__dirname, 'test.json'),
        cslStyle: path.join(__dirname, 'apa.csl'),
      },
      path.join(__dirname, 'test.md')
    );

    expect(html1).not.toBe(html2);
  });
});

describe('pandocHTMLToBibFragment', () => {
  it('throws error if input is empty', () => {
    expect(() => {
      pandocHTMLToBibFragment('');
    }).toThrow();
  });

  it('throws error if input is does not contain refs div', () => {
    expect(() => {
      pandocHTMLToBibFragment('<div>hello</div>');
    }).toThrow();
  });

  it('should return refs div', async () => {
    const html = await pandocMarkdownToHTML(
      {
        pathToPandoc: '/usr/local/bin/pandoc',
        pathToBibliography: path.join(__dirname, 'test.json'),
      },
      path.join(__dirname, 'test.md')
    );

    const el = pandocHTMLToBibFragment(html);

    expect(el.getAttribute('id')).toBe('refs');
    expect(el.childElementCount).toBeGreaterThan(0);
  });
});
