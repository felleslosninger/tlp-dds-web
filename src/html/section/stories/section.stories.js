import { createSection } from '../section.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Section',
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
    underlinecolor: {
      control: { type: 'radio' },
      options: ['red', 'yellow', 'blue', 'grey'],
    },
  },
}

const Template = (args) => {
  return createSection(args)
}

export const Default = Template.bind({})
Default.args = {
  backgroundColor: true,
}
