module.exports = {
  stories: [
    '../docs-main/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/theming',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
  core: {
    builder: 'webpack5',
  },
  staticDirs: ['../assets'],
  // Add rules to webpack config
  webpackFinal: async (config, { configType }) => {
    // Resolve raw import of SVG files as source code
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/source',
    })

    // Resolve import of SVG files as path for use in image source <img> with alternative .img.svg file-extension
    config.module.rules.push({
      test: /\.img.svg$/,
      type: 'asset/resource',
    })

    return config
  },
}
