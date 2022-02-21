import { createReportCard } from '../reportCard.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Report-card',
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
  return createReportCard(args)
}

export const Default = Template.bind({})
Default.args = {}
