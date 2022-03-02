import { createCampaignCard } from '../campaignCard.js'
import { withDesign } from 'storybook-addon-designs'
import imageSource from '/assets/wallpapersden.png'

export default {
  title: 'Komponenter/Campaign-card',
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
  argTypes: {},
}

const image = {
  src: imageSource,
  alt: 'Sunset in the woods showing a river in the foreground and mountains in the background',
}

const Template = (args) => {
  return createCampaignCard({ image, ...args })
}

export const Default = Template.bind({})
