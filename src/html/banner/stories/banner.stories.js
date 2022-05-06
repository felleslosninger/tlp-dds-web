import { createBanner } from '../banner.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Banner',
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
    circleColor: {
      control: { type: 'radio' },
      options: ['red', 'yellow', 'blue'],
    },
  },
}

const Template = (args) => {
  return createBanner(args)
}

export const Default = Template.bind({})
