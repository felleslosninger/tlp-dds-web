import ChevronRightIcon from '@digdir/ds-icons/svg/outline/ChevronRight.svg'

const createLinkBox = ({ icon = true }) => {
  const classPrefix = 'ddsweb-link-box'

  // Element content
  const labelText = 'Link box'

  // Elements
  const textBoxChildren = String.raw`
    <a class="${classPrefix}__link" href="https://www.digdir.no/" target="_blank" rel="noreferrer noopener">
      ${labelText}
    </a>
    `
  const iconBoxChildren = String.raw`
    <a class="dds-panel-link dds-panel-link--large" href="https://www.digdir.no/" target="_blank" rel="noreferrer noopener">
      <span class="dds-panel-link__label">${labelText}</span>
      ${ChevronRightIcon}
    </a>
    `

  return String.raw`
    <div class="${classPrefix}">
      ${icon ? iconBoxChildren : textBoxChildren}
    </div>
    `
}

export { createLinkBox }
