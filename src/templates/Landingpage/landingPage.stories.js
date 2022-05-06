import { withDesign } from 'storybook-addon-designs'
import LandingPageComponent from './landingPage'

export default {
  title: 'Maler/Landing Page',
  decorators: [withDesign],
  parameters: {
    layout: 'fullscreen',
  },
}

export const LandingPage = () => LandingPageComponent()
