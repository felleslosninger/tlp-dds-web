import BookmarkIcon from '@digdir/ds-icons/svg/outline/Bookmark.svg'
import MapPinIcon from '@digdir/ds-icons/svg/outline/MapPin.svg'
import WatchIcon from '@digdir/ds-icons/svg/outline/Watch.svg'
import { createIconLinkSpan } from '../utils.js'

const createCourseCard = ({ backgroundColor = true }) => {
  const classPrefix = 'ddsweb-course-card'

  // Element content
  const bannerText = '16. september 2022'
  const titleText = 'Unik sommerjobb for studenter innen digitalisering'
  const timeText = '09:00-12:00'
  const placeText = 'Sted'
  const taxonomyText = 'Tema'

  // Elements
  const iconLink = createIconLinkSpan(titleText)

  const changeColor = () => {
    switch (backgroundColor) {
      case 'red':
        return '--red'
      case 'blue':
        return '--blue'

      default:
        return ''
    }
  }

  return String.raw`
    <article class="${classPrefix}${changeColor()}">
      <a
        class="${classPrefix}__link"
        href="https://www.digdir.no/"
        rel="noreferrer noopener"
      >
        <div class="${classPrefix}__banner">
          ${bannerText}
        </div>
        <div class="${classPrefix}__container">
          <h3 class="${classPrefix}__title">
            ${iconLink}
          </h3>

          <div class="${classPrefix}__list">
            <div class="${classPrefix}__item">
              ${WatchIcon}
              <span class="${classPrefix}__value">
                ${timeText}
              </span>
            </div>
  
            <div class="${classPrefix}__item">
              ${MapPinIcon}
              <span class="${classPrefix}__value">
                ${placeText}
              </span>
            </div>
  
            <div class="${classPrefix}__item">
              ${BookmarkIcon}
              <span class="${classPrefix}__value">
                ${taxonomyText}
              </span>
            </div>
          </div>
        </div>
      </a>
    </article>
    `
}

export { createCourseCard }
