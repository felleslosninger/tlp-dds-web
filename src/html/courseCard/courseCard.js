import bookmarkIcon from '@digdir/ds-icons/svg/bookmark_border/outline.svg'
import placeIcon from '@digdir/ds-icons/svg/place/outline.svg'
import watchIcon from '@digdir/ds-icons/svg/watch_later/outline.svg'

const createCourseCard = ({}) => {
  const classPrefix = 'ddsweb-course-card'

  // Element content
  const bannerText = '16. september 2022'
  const titleText = 'Unik sommerjobb for studenter innen digitalisering'
  const timeText = '09:00-12:00'
  const placeText = 'Sted'
  const taxonomyText = 'Tema'

  return String.raw`
    <article class="${classPrefix}">
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
            ${titleText}
          </h3>

          <div class="${classPrefix}__list">
            <div class="${classPrefix}__item">
              ${watchIcon}
              <span class="${classPrefix}__value">
                ${timeText}
              </span>
            </div>
  
            <div class="${classPrefix}__item">
              ${placeIcon}
              <span class="${classPrefix}__value">
                ${placeText}
              </span>
            </div>
  
            <div class="${classPrefix}__item">
              ${bookmarkIcon}
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