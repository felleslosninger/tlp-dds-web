import classnames from 'classnames'
import { createIconLinkSpan } from '../utils.js'

const createTeaserCard = ({
  imgPath = 'static/media/assets/wallpapersden.png',
  variant = 'default',
  backgroundColor = 'white',
  text = '',
}) => {
  const classPrefix = 'ddsweb-teaser-card'
  const baseClasses = classnames([`${classPrefix}`], {
    [`${classPrefix}--two-columns`]: variant === 'two-columns',
  })

  // Element content
  const titleText = 'Unik sommerjobb for studenter innen digitalisering'
  const dateText = '16 sep. 2021'
  const paragraphText = `Digitaliseringsdirektoratet har lansert første versjon av Nasjonal verktøykasse for deling av data. Verktøykassen skal være til hjelp for de som skal dele og bruke data, enten det er mellom offentlige virksomheter, fra offentlig...`
  // Elements
  const iconLink = createIconLinkSpan(titleText)

  return String.raw`
    <article class="${baseClasses} ${classPrefix}--${backgroundColor}">
      <a class="${classPrefix}__link" href="https://www.digdir.no/" rel="noreferrer noopener"> 
        <div class="${classPrefix}__banner">
        ${
          text.length > 0
            ? `          <div class="${classPrefix}__text-container">
           <div class="${classPrefix}__text">${text}</div>
          </div>`
            : `          <div class="${classPrefix}__image">
                    <img src="${imgPath}" alt="Alt text">
          </div>`
        }
        </div>
        <div class="${classPrefix}__container">
          <h3 class="${classPrefix}__title">
            ${iconLink}
          </h3>
          <div class="${classPrefix}__meta">
            <div class="${classPrefix}__meta-item">
                ${dateText}
            </div>
          </div>
          <p class="${classPrefix}__paragraph">
            ${paragraphText}
          </p>
        </div>
      </a>
    </article>
    `
}

const createTeaserCardVideo = ({
  imgPath = 'static/media/assets/wallpapersden.png',
  variant = 'default',
  backgroundColor = 'white',
}) => {
  const classPrefix = 'ddsweb-teaser-card'
  const baseClasses = classnames([`${classPrefix}`], {
    [`${classPrefix}--two-columns`]: variant === 'two-columns',
  })

  // Element content
  const titleText =
    'Unik sommerjobb for studenter innen digitalisering i offentlig sektor i dag'
  const dateText = '16 sep. 2021'
  const paragraphText = `Digitaliseringsdirektoratet har lansert første versjon av Nasjonal verktøykasse for deling av data. Verktøykassen skal være til hjelp for de som skal dele og bruke data, enten det er mellom offentlige virksomheter, fra offentlig...`
  // Elements
  const iconLink = createIconLinkSpan(titleText)

  return String.raw`
    <article class="${baseClasses} ${classPrefix}--${backgroundColor}">
      <div class="${classPrefix}__video-wrapper" href="https://www.digdir.no/" rel="noreferrer noopener"> 
        <div class="${classPrefix}__banner">
          <div class="${classPrefix}__video">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <a class="${classPrefix}__video-link" href="https://www.digdir.no/" rel="noreferrer noopener">
          <h3 class="${classPrefix}__title">
            ${iconLink}
          </h3>
          <div class="${classPrefix}__meta">
            <div class="${classPrefix}__meta-item">
                ${dateText}
            </div>
          </div>
          <p class="${classPrefix}__paragraph">
            ${paragraphText}
          </p>
        </a>
      </div>
    </article>
    `
}

export { createTeaserCard, createTeaserCardVideo }
