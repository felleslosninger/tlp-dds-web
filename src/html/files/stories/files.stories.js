import { createFiles } from '../files.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Files',
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
      options: ['blue', 'yellow', 'red'],
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => {
  return createFiles(args)
}

export const Default = Template.bind({})
Default.args = {
  backgroundColor: 'blue',
}
