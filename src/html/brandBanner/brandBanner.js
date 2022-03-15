const createBrandBanner = ({
  image = {
    src: 'static/media/assets/person_lifting_ball.img.svg',
    alt: 'Alt image description',
  },
}) => {
  const classPrefix = 'ddsweb-brand-banner'

  // Element content
  const titleText = 'Tittel'
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

  return String.raw`
    <div class="${classPrefix}">
      <div class="${classPrefix}__breadcrumbs">
        ${breadcrumbsComponent}
      </div>
      <div class="${classPrefix}__container">
        <div class="${classPrefix}__text-container">
          <h1 class="${classPrefix}__title">
            ${titleText}
          </h1>
          <p class="${classPrefix}__paragraph">
            ${paragraphText}
          </p>
        </div>
        <div class="${classPrefix}__image">
          ${imageElement}
        </div>
      </div>
    </div>
    `
}

export { createBrandBanner }
