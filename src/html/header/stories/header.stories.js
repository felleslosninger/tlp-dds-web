import createHeader from '../header'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Header',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rrBqUrSQl6jdAJpjUzV3cN/?node-id=1025%3A4412',
    },
    layout: 'fullscreen',
  },
  argTypes: {},
}

const Template = (args) => {
  return createHeader(args)
}

export const Default = Template.bind({})
Default.args = {}
