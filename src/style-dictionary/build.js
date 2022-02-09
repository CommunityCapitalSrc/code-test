const StyleDictionary = require('style-dictionary');
const fs = require('fs-extra');

const webPath = `build/`;

// before this runs we should clean the directories we are generating files in
// to make sure they are ✨clean✨
console.log(`cleaning ${webPath}...`);
fs.removeSync(webPath);

// Adding custom actions, transforms, and formats
const styleDictionary = StyleDictionary.extend({});

const modes = [`light`, `dark`];

console.log(`☀️ Building light mode...`);
styleDictionary
  .extend({
    source: [
      // this is saying find any files in the tokens folder
      // that does not have .dark or .light, but ends in .json5
      `src/style-dictionary/tokens/**/*.light.json`,
    ],

    platforms: {
      css: {
        transformGroup: `css`,
        buildPath: webPath,
        files: [
          {
            destination: `variables.css`,
            format: `css/variables`,
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  })
  .buildAllPlatforms();

// Dark Mode
// we will only build the files we need to, we don't need to rebuild all the files
console.log(`\n\n🌙 Building dark mode...`);
styleDictionary
  .extend({
    // Using the include array so that theme token overrides don't show
    // warnings in the console.
    include: [`src/style-dictionary/tokens/**/*.dark.json`],
    source: [`src/style-dictionary/tokens/**/*.dark.json`],
    platforms: {
      css: {
        transformGroup: `css`,
        buildPath: webPath,
        files: [
          {
            destination: `variables-dark.css`,
            format: `css/variables`,
            // only putting in the tokens from files with '.dark' in the filepath
            filter: (token) => token.filePath.indexOf(`.dark`) > -1,
            options: {
              outputReferences: true,
              selector: `[data-theme='dark']`,
            },
          },
        ],
      },
    },
  })
  .buildAllPlatforms();

console.log(`\n\n Merging files into one...`);
const buffer1 = fs.readFileSync('build/variables.css');
const buffer2 = fs.readFileSync('build/variables-dark.css');

const cssString = `
${buffer1}
${buffer2}
`;

fs.writeFileSync(`build/main.css`, cssString);
