import { createIconLink } from '../utils.js'
import classnames from 'classnames'

const createLinkList = ({
  titleLink = true,
  coloredLinks = true,
  numberOfLinks = 3,
}) => {
  const classPrefix = 'ddsweb-link-list'
  const baseClasses = classnames([`${classPrefix}`], {
    [`${classPrefix}--colored-links`]: coloredLinks,
  })

  // Element content
  const titleText = 'Liste med lenker'
  const linkText = 'Lenke'

  // Elements
  const titleLinkElement = String.raw`
    <a
      href="https://www.digdir.no/"
      rel="noreferrer noopener"
      >
      ${titleText}
    </a>
    `
  const listItem = String.raw`
    <div class=${classPrefix}__item>
      ${createIconLink(linkText)}
    </div>
    `
  const listItems = listItem.repeat(numberOfLinks)

  return String.raw`
    <div class="${baseClasses}">
      <h3 class="${classPrefix}__title">
        ${titleLink ? titleLinkElement : titleText}
      </h3>
      <div class="${classPrefix}__list">
        ${listItems}
      </div>
    </div>
    `
}

export { createLinkList }
