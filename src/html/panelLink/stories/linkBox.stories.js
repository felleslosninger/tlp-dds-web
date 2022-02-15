import { createLinkBox } from '../linkBox.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Link-box',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rrBqUrSQl6jdAJpjUzV3cN/?node-id=1025%3A4412',
    },
  },
  argTypes: {},
}

const Template = (args) => {
  return createLinkBox(args)
}

export const IconBox = Template.bind({})
IconBox.args = {
  icon: true,
}

export const TextBox = Template.bind({})
TextBox.args = {
  icon: false,
}
