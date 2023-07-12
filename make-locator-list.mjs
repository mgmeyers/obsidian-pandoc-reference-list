import escape from 'escape-string-regexp';
import fs from 'fs';
import convert from 'xml-js';

function readFiles(dirname, onFileContent, onError, done) {
  fs.readdir(dirname, function (err, filenames) {
    if (err) {
      onError(err);
      return;
    }

    for (let filename of filenames) {
      if (!filename.endsWith('.xml')) continue;
      const content = fs.readFileSync(dirname + filename);
      onFileContent(filename, convert.xml2js(content.toString()));
    }

    done();
  });
}

const locatorTerms = [
  'act',
  'appendix',
  'article-locator',
  'canon',
  'elocation',
  'equation',
  'rule',
  'scene',
  'table',
  'timestamp',
  'title-locator',
  'book',
  'chapter',
  'column',
  'figure',
  'folio',
  'issue',
  'line',
  'note',
  'opus',
  'page',
  'number-of-pages',
  'paragraph',
  'part',
  'section',
  'sub-verbo',
  'verse',
  'volume',
];

const locatorMap = {};
locatorTerms.forEach((k) => {
  locatorMap[k] = true;
});
const locators = new Set();
const locatorToTerm = {};

readFiles(
  '../locales/',
  function (filename, content) {
    if (content && content.elements) {
      const locale = content.elements.find((el) => el.name === 'locale');
      const lang = locale.attributes['xml:lang'];
      const langTerms = (locatorToTerm[lang] = {});

      console.log(content);

      if (locale) {
        const terms = locale.elements.find((el) => el.name === 'terms');

        if (terms) {
          terms.elements.forEach((term) => {
            if (!term.attributes) return;
            const name = term.attributes.name;
            if (locatorMap[name]) {
              term.elements.forEach((el) => {
                if (el.type === 'text') {
                  locators.add(el.text);
                  if (!langTerms[el.text]) langTerms[el.text] = name;
                } else {
                  el.elements?.forEach((el) => {
                    locators.add(el.text);
                    if (!langTerms[el.text]) langTerms[el.text] = name;
                  });
                }
              });
            }
          });
        }
      }
    }
  },
  function (err) {
    throw err;
  },
  function () {
    let outStr = ['/* eslint-disable no-irregular-whitespace */'];

    const p1 = Array.from(locators);
    const optionalPeriods = new Set();

    for (const l of p1) {
      if (!/\./.test(l)) continue;
      const stripped = l.replaceAll('.', '');
      if (locators.has(stripped)) {
        optionalPeriods.add(l);
        locators.delete(stripped);
      }
    }

    const sorted = Array.from(locators);
    sorted.sort((a, b) => b.length - a.length);

    outStr.push(
      `export const locators = /^([ \\t]*)(${sorted
        .map((v) => {
          const escaped = escape(v);
          if (optionalPeriods.has(v)) {
            return escaped.replaceAll('\\.', '\\.?');
          }
          return escaped;
        })
        .join('|')})([ \\t]*)/;`
    );

    outStr.push(
      `export const locatorToTerm: Record<string, Record<string, string>> = ${JSON.stringify(
        locatorToTerm
      )}`
    );

    fs.writeFileSync('./src/parser/locators.ts', outStr.join('\n'));
  }
);
