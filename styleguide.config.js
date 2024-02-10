const docgen = require('react-docgen-typescript');
const path = require('path');

module.exports = {
  title: '@Speira/styled',
  version: '0.0.1',
  template: {
    favicon: './favicon.ico',
  },
  webpackConfig:
    process.env.NODE_ENV === 'development'
      ? require('./webpack/webpack.dev')
      : require('./webpack/webpack.prod'),
  pagePerSection: true,
  propsParser: docgen.withDefaultConfig({
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
  }).parse,
  getExampleFilename(componentPath) {
    const segments = componentPath.split('/');
    const filename = segments[segments.length - 1];
    const docName = filename.replace('.tsx', '.md');
    const docPath = [...segments.slice(0, -1), '__docs__', docName].join('/');
    return docPath;
  },
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, './src/contexts/DevContext.tsx'),
  },
  moduleAliases: {
    '@speira/sc': path.resolve(__dirname, 'src/components'),
  },
  sections: [
    {
      name: 'Introduction',
      content: 'src/components/__docs__/_introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'src/components/__docs__/_installation.md',
          description: 'The description for the installation section',
        },
        {
          name: 'Configuration',
          content: 'src/components/__docs__/_configuration.md',
        },
        {
          name: 'Live Example',
          content: 'src/components/__docs__/_example.md',
        },
        {
          name: 'Live Demo',
          external: true,
          href: 'http://example.com',
        },
      ],
    },
    {
      name: 'Components',
      content: 'src/components/__docs__/_ui.md',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      components: 'src/components/*.tsx',
      sectionDepth: 1,
      template: {
        head: {
          links: [
            {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
            },
          ],
        },
      },
    },
  ],
};
