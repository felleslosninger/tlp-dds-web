import { createTeaserCard } from '../teaserCard.js'
import { withDesign } from 'storybook-addon-designs'
import imageSource from '/assets/wallpapersden.png'

export default {
  title: 'Komponenter/Teaser-card',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rrBqUrSQl6jdAJpjUzV3cN/?node-id=1025%3A4412',
    },

    backgrounds: {
      default: 'grey-200',
    },
  },
  argTypes: {
    backgroundColor: {
      options: ['white', 'blue'],
      control: { type: 'radio' },
    },
    variant: {
      control: { type: 'select' },
      options: ['one-columns', 'two-columns'],
    },
  },
}

const image = {
  src: imageSource,
  alt: 'Sunset in the woods showing a river in the foreground and mountains in the background',
}

const Template = (args) => {
  return createTeaserCard({ image, ...args })
}

export const Default = Template.bind({})
Default.args = {
  backgroundColor: 'white',
  variant: 'one-columns',
  picture: true,
}

export const TwoColumns = Template.bind({})
TwoColumns.args = {
  variant: 'two-columns',
}
