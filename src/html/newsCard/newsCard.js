import { createIconLinkSpan } from '../utils.js'

const createNewsCard = ({}) => {
  const classPrefix = 'ddsweb-news-card'

  // Element content
  const titleText = 'Tittel'
  const dateText = '16 sep. 2021'
  const teaserText = `Digitaliseringsdirektoratet har lansert første 
  versjon av Nasjonal verktøykasse for deling av data.
  Verktøykassen skal være til hjelp for de som skal dele og bruke data, 
  enten det er mellom offentlige virksomheter, fra offentlig...`
  const linkText = 'Intern lenke'

  // Icon link component markup from dds core components
  const iconLink = createIconLinkSpan(titleText)

  return String.raw`
    <article class="${classPrefix}">
      <a class="${classPrefix}__link" 
          href="https://www.digdir.no/"
          rel="noreferrer noopener"
        > 
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
      </a>
    </article>
    `
}

export { createNewsCard }