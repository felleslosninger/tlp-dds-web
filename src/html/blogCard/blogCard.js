import { createIconLinkSpan } from '../utils.js'

const createBlogCard = ({
  image = {
    src: 'static/media/assets/wallpapersden.png',
    alt: 'Alt image description',
  },
}) => {
  const classPrefix = 'ddsweb-blog-card'

  // Element content
  const titleText = 'Tittel '
  const dateText = '16 sep. 2021'
  const paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec sit amet mi a orci elementum porttitor. Etiam non lacus egestas, finibus urna non, vestibulum metus. 
  Pellentesque et justo nec mi finibus bibendum. Pellentesque eget lobortis est, in rutrum diam. 
  Donec id libero at dolor aliquet vehicula. Etiam hendrerit, sapien ut vehicula semper, 
  turpis odio elementum orci, in luctus risus elit et lectus. Morbi vitae mattis urna. 
  `

  // Elements
  const iconLink = createIconLinkSpan(titleText)
  const imageElement = String.raw`
    <img 
      src="${image.src}"
      alt="${image.alt}"
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
            ${iconLink}
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

export { createBlogCard }
