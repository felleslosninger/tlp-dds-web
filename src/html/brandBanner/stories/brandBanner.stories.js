import { createBrandBanner } from '../brandBanner.js'
import { withDesign } from 'storybook-addon-designs'

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
  // src: 'img/tall.jpg',
  src: 'img/person-bokser.svg',
  // src: 'img/tilsyn-person.png',
  // src: 'img/placeholder-16-9-four.jpg',
  alt: 'Person lifting a ball',
}

const Template = (args) => {
  return createBrandBanner({ image, ...args })
}

export const Default = Template.bind({})
Default.args = {}
