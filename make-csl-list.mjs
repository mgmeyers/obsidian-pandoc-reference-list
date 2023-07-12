import fs from 'fs';
import convert from 'xml-js';

function readFiles(dirname, onFileContent, onError, done) {
  fs.readdir(dirname, function (err, filenames) {
    if (err) {
      onError(err);
      return;
    }

    for (let filename of filenames) {
      if (!filename.endsWith('.csl')) continue;
      const content = fs.readFileSync(dirname + filename);
      onFileContent(filename, convert.xml2js(content.toString()));
    }

    done();
  });
}

const seen = {};
const cslList = [];

readFiles(
  '../styles/',
  function (filename, content) {
    if (content && content.elements) {
      const style = content.elements.find((el) => el.name === 'style');

      if (style) {
        const info = style.elements.find((el) => el.name === 'info');

        if (info) {
          const styleLink = info.elements.find(
            (el) => el.name === 'link' && el.attributes.rel === 'self'
          );
          const titleEl = info.elements.find((el) => el.name === 'title');
          const title = titleEl.elements[0].text;
          const id = styleLink.attributes.href.split('/').pop();

          if (!seen[id]) {
            cslList.push({
              label: title,
              id,
              value: `https://raw.githubusercontent.com/citation-style-language/styles/master/${filename}`,
            });
            seen[id] = true;
          }
        }
      }
    }
  },
  function (err) {
    throw err;
  },
  function () {
    readFiles(
      '../jm-styles/',
      function (filename, content) {
        if (content && content.elements) {
          const style = content.elements.find((el) => el.name === 'style');

          if (style) {
            const info = style.elements.find((el) => el.name === 'info');

            if (info) {
              const styleLink = info.elements.find(
                (el) => el.name === 'link' && el.attributes.rel === 'self'
              );
              const titleEl = info.elements.find((el) => el.name === 'title');
              const title = titleEl.elements[0].text;
              const id = styleLink.attributes.href.split('/').pop();

              if (!seen[id]) {
                cslList.push({
                  label: title,
                  id,
                  value: `https://raw.githubusercontent.com/Juris-M/jm-styles/master/${filename}`,
                });
                seen[id] = true;
              }
            }
          }
        }
      },
      function (err) {
        throw err;
      },
      function () {
        fs.writeFileSync(
          './src/bib/cslList.ts',
          `import Fuse from 'fuse.js';

export const cslListRaw = ${JSON.stringify(cslList, null, 2)};

export const cslList = new Fuse(cslListRaw, {
  threshold: 0.35,
  minMatchCharLength: 3,
  keys: ['id', 'label'],
});
`
        );
      }
    );
  }
);
