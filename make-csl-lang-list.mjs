import fs from 'fs';
import convert from 'xml-js';

const data = JSON.parse(fs.readFileSync('../locales/locales.json').toString());

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

const langs = [];

readFiles(
  '../locales/',
  function (filename, content) {
    if (content && content.elements) {
      const locale = content.elements.find((el) => el.name === 'locale');
      const lang = locale.attributes['xml:lang'];
      langs.push({
        value: lang,
        label: data['language-names'][lang][0],
        url: `https://raw.githubusercontent.com/citation-style-language/locales/master/${filename}`,
      });
    }
  },
  function (err) {
    throw err;
  },
  function () {
    fs.writeFileSync(
      './src/bib/cslLangList.ts',
      `import Fuse from 'fuse.js';

export const langListRaw = ${JSON.stringify(langs, null, 2)};

export const langList = new Fuse(langListRaw, {
  threshold: 0.35,
  keys: ['label'],
  minMatchCharLength: 2,
});
`
    );
  }
);
