import { createIconLinkSpan } from '../utils.js'

const createNewsCard = ({}) => {
  const classPrefix = 'ddsweb-news-card'

  // Element content
  const titleText = 'Tittel'
  const dateText = '16 sep. 2021'
  const paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec sit amet mi a orci elementum porttitor. Etiam non lacus egestas, finibus urna non, vestibulum metus. 
  Pellentesque et justo nec mi finibus bibendum. Pellentesque eget lobortis est, in rutrum diam. 
  Donec id libero at dolor aliquet vehicula. Etiam hendrerit, sapien ut vehicula semper, 
  turpis odio elementum orci, in luctus risus elit et lectus. Morbi vitae mattis urna. 
  `
  const linkText = 'Intern lenke'

  // Icon link component markup from dds core components
  const iconLink = createIconLinkSpan(linkText)

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
          ${paragraphText}
        </p>
        ${iconLink}
      </a>
    </article>
    `
}

export { createNewsCard }
