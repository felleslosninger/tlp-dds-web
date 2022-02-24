import { createIconLinkSpan } from '../utils.js'
import chevronRightIcon from '@digdir/ds-icons/svg/chevron_right/outline.svg'

const createBlogCard = ({}) => {
  const classPrefix = 'ddsweb-blog-card'

  // Element content
  const titleText = 'Tittel'
  const dateText = '16 sep. 2021'
  const teaserText = `Digitaliseringsdirektoratet har lansert første 
  versjon av Nasjonal verktøykasse for deling av data.
  Verktøykassen skal være til hjelp for de som skal dele og bruke data, 
  enten det er mellom offentlige virksomheter, fra offentlig...`
  const linkText = 'Intern lenke'

  // Elements
  const iconLink = createIconLinkSpan(titleText)
  const imageElement = String.raw`
    <img 
      src="/wallpapersden.png"
      alt="Sunset in the woods showing a river in the foreground and mountains in the background"
    >
    `

  return String.raw`
    <article class="${classPrefix}">
      <a class="${classPrefix}__link" 
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
            ${titleText}
          </h3>
          <div class="${classPrefix}__date">
            ${dateText}
          </div>
          <p class="${classPrefix}__paragraph">
            ${teaserText}
          </p>
          ${iconLink}
        </div>
      </a>
    </article>
    `
}

export { createBlogCard }
