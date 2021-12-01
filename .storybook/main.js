module.exports = {
    "stories": [
        '../.storybook/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    "addons": [
        "@whitespace/storybook-addon-html",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-scss",
        "storybook-addon-designs"

    ],
    staticDirs: ['../public'],
}