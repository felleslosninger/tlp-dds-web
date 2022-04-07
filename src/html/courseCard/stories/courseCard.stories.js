import { createCourseCard } from '../courseCard.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Course-card',
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
      control: { type: 'radio' },
      options: ['red', 'yellow', 'blue'],
    },
  },
}

const Template = (args) => {
  return createCourseCard(args)
}

export const Default = Template.bind({})
Default.args = {}
