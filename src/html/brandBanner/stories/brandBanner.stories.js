import { createBrandBanner } from '../brandBanner.js'
import { withDesign } from 'storybook-addon-designs'
import imageSource from '/assets/person_lifting_ball.img.svg'

export default {
  title: 'Komponenter/Brand-banner',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rrBqUrSQl6jdAJpjUzV3cN/?node-id=1025%3A4412',
    },
  },
  argTypes: {},
}

const image = {
  src: imageSource,
  alt: 'Person lifting a ball',
}

const Template = (args) => {
  return createBrandBanner({ image, ...args })
}

export const Default = Template.bind({})
Default.args = {}
