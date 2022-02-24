import { createBlogCard } from '../blogCard.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Blog-card',
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
  argTypes: {},
}

const Template = (args) => {
  return createBlogCard(args)
}

export const Default = Template.bind({})
Default.args = {}
