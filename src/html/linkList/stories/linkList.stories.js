import { createLinkList } from '../linkList.js'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Komponenter/Link-list',
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
  return createLinkList(args)
}

export const Default = Template.bind({})
Default.args = {
  titleLink: false,
  coloredLinks: false,
}

export const TitleLink = Template.bind({})
TitleLink.args = {
  titleLink: true,
  coloredLinks: false,
}

export const ColoredLinks = Template.bind({})
ColoredLinks.args = {
  titleLink: false,
  coloredLinks: true,
}
