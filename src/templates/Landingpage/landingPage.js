import { footer } from '../../html/footer/footer'
import { createBrandBanner } from '../../html/brandBanner/brandBanner'
import { createSection } from '../../html/section/section'
import { createNavigationCard } from '../../html/navigationCard/navigationCard'
import createImageSection from '../../html/imageSection/imageSection'
import { createTeaserCard } from '../../html/teaserCard/teaserCard'
import { createCourseCard } from '../../html/courseCard/courseCard'

import GitlabIcon from '@digdir/ds-icons/svg/outline/Gitlab.svg'
import BriefCaseIcon from '@digdir/ds-icons/svg/outline/Briefcase.svg'

const LandingPageComponent = () => {
  //language=HTML
  return String.raw`
        <header class="test-header"></header>
        ${createBrandBanner('d')}

        <div id="modules">
            ${createSection({
              title: 'Slik sikrer du deg',
              content: primaryNav(),
            })}
            ${createImageSection({
              title: 'Her finner du Stifinneren',
              linkText: 'Les mer om Stifinneren',
            })}
            ${createImageSection({
              title: 'Digitalisering i offentlig sektor',
              imageDirection: 'right',
              backgroundColor: 'white',
              linkText: 'Les mer om digitalisering',
              imgPath: 'img/persons-ball.svg',
            })}
            ${createSection({
              title: 'Finn din tjeneste',
              backgroundColor: 'grey',
              content: secondaryNav(),
            })}

            ${createSection({
              lineColor: 'blue',
              title: 'Digitaliseringsbloggen',
              backgroundColor: 'white',
              content: blog(),
              desc: '',
              name: 'dds-blog',
              footer:
                '<button class="dds-button dds-button--secondary dds-button--large">Les alle blogginnlegg</button>',
            })}
            ${createSection({
              lineColor: 'red',
              title: 'Rapporter',
              backgroundColor: 'grey',
              content: reports(),
              desc: '',
              name: 'dds-reports',
              footer:
                '<button class="dds-button dds-button--secondary dds-button--large">Les alle rapporter</button>',
            })}
            ${createSection({
              lineColor: 'yellow',
              title: 'Nyheter',
              content: news(),
              desc: '',
              footer:
                '<button class="dds-button dds-button--secondary dds-button--large">Les alle nyheter</button>',
            })}
            ${createSection({
              lineColor: 'yellow',
              title: 'Arrangement',
              content: courses(),
              desc: '',
              name: 'dds-courses',
              backgroundColor: 'grey',
              footer:
                '<button class="dds-button dds-button--secondary dds-button--large">Les alle arrangementer</button>',
            })}
        </div>

        ${footer()}
    `
}

const primaryNav = () => {
  //language=HTML
  return String.raw`
        <div class="row gy-4">
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
                  icon: BriefCaseIcon,
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

const secondaryNav = () => {
  //language=HTML
  return String.raw`
        <div class="row gy-4">
            <div class="col-lg-4">
                ${createNavigationCard({
                  title: 'test',
                  backgroundColor: 'white',
                  icon: GitlabIcon,
                  iconBackground: 'yellow',
                })}
            </div>
            <div class="col-lg-4">
                ${createNavigationCard({
                  title: 'test',
                  backgroundColor: 'white',
                  iconBackground: 'blue',
                })}
            </div>
            <div class="col-lg-4">
                ${createNavigationCard({
                  title: 'test',
                  backgroundColor: 'white',
                  icon: BriefCaseIcon,
                  iconBackground: 'red',
                })}
            </div>
        </div>
    `
}

const blog = () => {
  //language=HTML
  return String.raw`
        <div class="row gy-4">
            <div class="col-lg-4">
                ${createTeaserCard({
                  image: { src: 'img/placeholder-16-9-two.jpg' },
                })}
            </div>
            <div class="col-lg-4">
                ${createTeaserCard({
                  image: { src: 'img/placeholder-16-9-one.jpg' },
                })}
            </div>
            <div class="col-lg-4">
                ${createTeaserCard({
                  image: { src: 'img/placeholder-16-9-three.jpg' },
                })}
            </div>
        </div>
    `
}

const reports = () => {
  //language=HTML
  return String.raw`
        <div class="row justify-content-center gy-4">
            <div class="col-lg-10">
                ${createTeaserCard({
                  image: { src: 'img/placeholder-16-9-four.jpg' },
                  variant: 'two-columns',
                })}
            </div>
            <div class="col-lg-10">
                ${createTeaserCard({
                  image: { src: 'img/placeholder-16-9-two.jpg' },
                  variant: 'two-columns',
                })}
            </div>
            <div class="col-lg-10">
                ${createTeaserCard({
                  image: { src: 'img/placeholder-16-9-six.jpg' },
                  variant: 'two-columns',
                })}
            </div>
        </div>
    `
}

const news = () => {
  //language=HTML
  return String.raw`
        <div class="row gy-4">
            <div class="col-lg-4">
                ${createTeaserCard({
                  image: { src: 'img/placeholder-16-9-one.jpg' },
                })}
            </div>
            <div class="col-lg-4">
                ${createTeaserCard({
                  image: { src: 'img/placeholder-16-9-three.jpg' },
                })}
            </div>
            <div class="col-lg-4">
                ${createTeaserCard({
                  image: { src: 'img/placeholder-16-9-five.jpg' },
                })}
            </div>
        </div>
    `
}

const courses = () => {
  //language=HTML
  return String.raw`
        <div class="row justify-content-center gy-4">
            <div class="col-lg-9">
                ${createCourseCard({})}
            </div>
            <div class="col-lg-9">
                ${createCourseCard({})}
            </div>
            <div class="col-lg-9">
                ${createCourseCard({})}
            </div>
        </div>
    `
}

export default LandingPageComponent
