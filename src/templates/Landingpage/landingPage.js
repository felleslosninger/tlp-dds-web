import { footer } from '../../html/footer/footer'
import { createBrandBanner } from '../../html/brandBanner/brandBanner'
import { createSection } from '../../html/section/section'
import { createNavigationCard } from '../../html/navigationCard/navigationCard'

import GitlabIcon from '@digdir/ds-icons/svg/outline/Gitlab.svg'

const LandingPageComponent = () => {
  //language=HTML
  return String.raw`
        <header class="test-header"></header>
        ${createBrandBanner('d')}
        ${createSection({
          title: 'Slik sikrer du deg',
          //language=HTML
          content: test(),
        })}
        ${footer()}
    `
}

const test = () => {
  //language=HTML
  return String.raw`
        <div class="row">
            <div class="col-lg-4">
                ${createNavigationCard({
                  title: 'test',
                  backgroundColor: 'yellow',
                  icon: GitlabIcon,
                  iconBackground: 'yellow',
                })}
            </div>
            <div class="col-lg-4">
                ${createNavigationCard({
                  title: 'test',
                  backgroundColor: 'blue',
                  iconBackground: 'blue',
                })}
            </div>
            <div class="col-lg-4">
                ${createNavigationCard({
                  title: 'test',
                  backgroundColor: 'red',
                  iconBackground: 'red',
                })}
            </div>
        </div>
    `
}

export default LandingPageComponent
