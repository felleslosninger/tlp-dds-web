import { createTeaserCard, createTeaserCardVideo } from '../teaserCard.js'
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

const Template = (args) => {
  return createTeaserCard({ ...args })
}

const VideoTemplate = (args) => {
  return createTeaserCardVideo({ ...args })
}

export const Default = Template.bind({})
Default.args = {
  backgroundColor: 'white',
  variant: 'one-columns',
}

export const TwoColumns = Template.bind({})
TwoColumns.args = {
  variant: 'two-columns',
}

export const Video = VideoTemplate.bind({})
Video.args = {
  backgroundColor: 'white',
  variant: 'one-columns',
}

export const VideoTwoColumns = VideoTemplate.bind({})
VideoTwoColumns.args = {
  backgroundColor: 'white',
  variant: 'two-columns',
}

export const Text = Template.bind({})
Text.args = {
  backgroundColor: 'white',
  variant: 'one-columns',
  text: 'Dette er ein kort teasertekst',
}

export const TextTwoColumns = Template.bind({})
TextTwoColumns.args = {
  backgroundColor: 'white',
  variant: 'two-columns',
  text: 'Dette er ein kort teasertekst',
}
