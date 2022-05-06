import createImageSection from '../imageSection'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Image Section',
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
  return createImageSection(args)
}

export const IconBox = Template.bind({})
IconBox.args = {
  imageDirection: 'left',
}
