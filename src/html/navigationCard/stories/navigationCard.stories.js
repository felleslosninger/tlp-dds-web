import { createNavigationCard } from '../navigationCard'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Navigation-card',
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
  return createNavigationCard(args)
}

export const Default = Template.bind({})
Default.args = {}

export const CardWithBgIcon = Template.bind({})
Default.args = {
  iconBackground: true,
}

export const CardWithoutIcon = Template.bind({})
Default.args = {}
