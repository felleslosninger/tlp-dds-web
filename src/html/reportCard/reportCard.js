const createReportCard = ({}) => {
  const classPrefix = 'ddsweb-report-card'

  // Element content
  const titleText = 'Tittel'
  const paragraphText = `Digitaliseringsdirektoratet har lansert første 
  versjon av Nasjonal verktøykasse for deling av data.
  Verktøykassen skal være til hjelp for de som skal dele og bruke data, 
  enten det er mellom offentlige virksomheter, fra offentlig...`
  const linkText = 'Intern lenke'

  // Icon link component markup from dds core components
  const iconLink = String.raw`
    <span
        class="dds-icon-link dds-icon-link--icon-right"
      >
        ${linkText}
      <svg
        focusable="false"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      </svg>
    </span>
    `
  return String.raw`
    <article class="${classPrefix}">
      <a class="${classPrefix}__link" 
          href="https://www.digdir.no/"
          rel="noreferrer noopener"
        > 
        <h3 class="${classPrefix}__title">
          ${titleText}
        </h3>
        <p class="${classPrefix}__paragraph">
          ${paragraphText}
        </p>
        ${iconLink}
      </a>
    </article>
    `
}

export { createReportCard }
