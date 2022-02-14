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
}
