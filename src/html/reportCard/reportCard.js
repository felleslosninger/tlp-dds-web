import { createIconLinkSpan } from '../utils.js'

const createReportCard = ({}) => {
  const classPrefix = 'ddsweb-report-card'

  // Element content
  const titleText = 'Tittel'
  const paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec sit amet mi a orci elementum porttitor. Etiam non lacus egestas, finibus urna non, vestibulum metus. 
  Pellentesque et justo nec mi finibus bibendum. Pellentesque eget lobortis est, in rutrum diam. 
  Donec id libero at dolor aliquet vehicula. Etiam hendrerit, sapien ut vehicula semper, 
  turpis odio elementum orci, in luctus risus elit et lectus. Morbi vitae mattis urna. 
  `

  // Icon link component markup from dds core components
  const iconLink = createIconLinkSpan(titleText)

  return String.raw`
    <article class="${classPrefix}">
      <a class="${classPrefix}__link" 
          href="https://www.digdir.no/"
          rel="noreferrer noopener"
        > 
        <h3 class="${classPrefix}__title">
          ${iconLink}
        </h3>
        <p class="${classPrefix}__paragraph">
          ${paragraphText}
        </p>
      </a>
    </article>
    `
}

export { createReportCard }
