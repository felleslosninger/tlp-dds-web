const createBrandBanner = ({
  image = {
    src: 'person-sakkosekk.svg',
    alt: 'Alt image description',
  },
}) => {
  const classPrefix = 'ddsweb-brand-banner'

  // Element content
  const titleText = 'Informasjonssikkerhet'
  const descText = 'Bloggen'
  const paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec id libero at dolor aliquet vehicula. Etiam hendrerit, sapien ut vehicula semper, 
  turpis odio elementum orci, in luctus risus elit et lectus. Morbi vitae mattis urna. 
  `

  // Elements
  const breadcrumbsComponent = String.raw`
    <nav class="dds-breadcrumbs">
      <ol class="dds-breadcrumbs__list">
        <li class="dds-breadcrumbs__item">
          <a class="dds-link" href="." rel="noreferrer noopener">Hjem</a>
        </li>
        <li class="dds-breadcrumbs__item">
          <a class="dds-link" href="." rel="noreferrer noopener">Nivå 1</a>
        </li>
        <li class="dds-breadcrumbs__item">
          <label class="dds-breadcrumbs__text">Nåværende side</label>
        </li>
      </ol>
    </nav>
    `
  const imageElement = String.raw`
    <img
      src="${image.src}"
      alt="${image.alt}"
    >
    `

  //language=HTML
  return String.raw`
        <section class="${classPrefix}">
            <div class="container">
                <div class="${classPrefix}__breadcrumbs">
                    ${breadcrumbsComponent}
                </div>
                <div class="${classPrefix}__container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="${classPrefix}__text-container">
                                <h1 class="${classPrefix}__title">
                                    <span class="${classPrefix}__sub-title">${descText}</span>
                                    <span class="${classPrefix}__main-title">${titleText}</span>
                                </h1>
                                <p class="${classPrefix}__paragraph">
                                    ${paragraphText}
                                </p>
                            </div>
                        </div>
                      <div class="col-md-1"></div>
                        <div class="col-md-5">
                            <div class="${classPrefix}__image">
                                <img src="${image.src}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

export { createBrandBanner }
