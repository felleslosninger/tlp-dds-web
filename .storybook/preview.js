import customTheme from './customTheme.js'
import tokens from '../node_modules/@digdir/ds-tokens/build/tokens.js'
// Import assets available to all stories
import '../src/css/index.scss'
import './customStyling.scss'

export const parameters = {
  docs: {
    theme: customTheme,
  },
  backgrounds: {
    values: [
      {
        name: 'grey-100',
        value: tokens.color.neutral.grey['100'],
      },
      {
        name: 'grey-200',
        value: tokens.color.neutral.grey['200'],
      },
    ],
  },
  options: {
    storySort: {
      order: [
        'Introduksjon',
        'Komponenter',
        [
          'Link-box',
          'Report-card',
          'News-card',
          'Course-card',
          'Blog-card',
          'Campaign-card',
          'Brand-banner',
        ],
      ],
    },
  },
  actions: {
    disabled: true,
  },
}
