import { createElement } from '../element'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Profile Element',
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
    color: {
      options: ['blue', 'yellow', 'red'],
      control: { type: 'radio' },
    },
    variant: {
      options: [1, 2, 3, 4],
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => {
  return createElement(args)
}

export const Default = Template.bind({})
Default.args = {
  color: 'red',
  variant: 1,
}
