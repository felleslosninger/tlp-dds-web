import classnames from 'classnames'
import ArrowRightIcon from '@digdir/ds-icons/svg/outline/ArrowRight.svg'

const createTeaserCard = ({
  backgroundColor = 'white',
  image = {
    src: 'static/media/assets/wallpapersden.png',
    alt: 'Alt image description',
  },
  variant = 'default',
}) => {
  const classPrefix = 'ddsweb-teaser-card'
  const baseClasses = classnames([`${classPrefix}`], {
    [`${classPrefix}--two-columns`]: variant === 'two-columns',
  })
  // Element content
  const titleText = 'Unik sommerjobb for studenter innen digitalisering'
  const dateText = '16 sep. 2021'
  const paragraphText = `Digitaliseringsdirektoratet har lansert første versjon av Nasjonal verktøykasse for deling av data. Verktøykassen skal være til hjelp for de som skal dele og bruke data, enten det er mellom offentlige virksomheter, fra offentlig...
  `

  // Elements

  const imageElement = String.raw`
    <img 
      src="${image.src}"
      alt="${image.alt}"
    >
    `

  const changeBackground = () => {
    switch (backgroundColor) {
      case 'white':
        return classPrefix + '--white'
      case 'blue':
        return classPrefix + '--blue'
      default:
        return classPrefix + ''
    }
  }

  return String.raw`
  <article class="${baseClasses}">
  <a class="${classPrefix}__link ${changeBackground()}" 
      href="https://www.digdir.no/"
      rel="noreferrer noopener"
    > 
    <div class="${classPrefix}__banner">
      <div class="${classPrefix}__image">
        ${imageElement}
      </div>
    </div>
    <div class="${classPrefix}__container">
      <h3 class="${classPrefix}__title">
       ${titleText} <span class="${classPrefix}__icon">${ArrowRightIcon}</span>
      </h3>
      <div class="${classPrefix}__date">
        ${dateText}
      </div>
      <p class="${classPrefix}__paragraph">
        ${paragraphText}
      </p>
    </div>
  </a>
</article>
    `
}

export { createTeaserCard }
