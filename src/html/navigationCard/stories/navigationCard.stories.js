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
  },
  argTypes: {
    backgroundColor: {
      required: true,
      control: { type: 'radio' },
      options: ['red', 'yellow', 'blue', 'grey'],
    },
    iconBackground: {
      control: { type: 'radio' },
      options: ['red', 'yellow', 'blue'],
    },
  },
}

const Template = (args) => {
  return createNavigationCard(args)
}

export const Default = Template.bind({})
Default.args = {
  icon: true,
  backgroundColor: 'red',
  iconBackground: false,
}
Default.parameters = {
  controls: { exclude: ['iconBackground'] },
}

export const RedWithBgIcon = Template.bind({})
RedWithBgIcon.args = {
  iconBackground: 'red',
  backgroundColor: 'red',
}
RedWithBgIcon.parameters = {
  controls: { exclude: ['iconBackground', 'icon', 'backgroundColor'] },
}

export const YellowWithBgIcon = Template.bind({})
YellowWithBgIcon.args = {
  iconBackground: 'yellow',
  backgroundColor: 'yellow',
}
YellowWithBgIcon.parameters = {
  controls: { exclude: ['iconBackground', 'icon', 'backgroundColor'] },
}

export const BlueWithBgIcon = Template.bind({})
BlueWithBgIcon.args = {
  iconBackground: 'blue',
  backgroundColor: 'blue',
}
BlueWithBgIcon.parameters = {
  controls: { exclude: ['iconBackground', 'icon', 'backgroundColor'] },
}
export const GreyWithBgIcon = Template.bind({})
GreyWithBgIcon.args = {
  iconBackground: 'grey',
  backgroundColor: 'grey',
}
GreyWithBgIcon.parameters = {
  controls: { exclude: ['iconBackground', 'icon', 'backgroundColor'] },
}

export const CardWithoutIcon = Template.bind({})
CardWithoutIcon.args = {
  icon: false,
  backgroundColor: 'red',
}
CardWithoutIcon.parameters = {
  controls: { exclude: ['icon', 'iconBackground'] },
}

export const WhiteWithBgIcon = Template.bind({})
WhiteWithBgIcon.args = {
  icon: true,
  backgroundColor: 'white',
  iconBackground: 'red',
}

WhiteWithBgIcon.parameters = {
  controls: {
    exclude: ['icon', 'iconsBackground', 'backgroundColor'],
  },
}
