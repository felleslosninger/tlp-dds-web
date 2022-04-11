const footer = () => {
  const classPrefix = 'ddsweb-footer'

  // Element content
  const titleText = 'Jobbe med digitalisering'
  const descriptionText =
    'Embarrassed space windshield children. The detailed however, how provide earnestly been and for he a physics by the didn`t were evening.'

  // Elements

  return String.raw`
    <footer>
    <div class=${classPrefix}>
    <div class='${classPrefix}__left'><h1>left</h1></div>
    <div class='${classPrefix}__middle'><h1>middle</h1></div>
    <div class='${classPrefix}__right'><h1>Right</h1></div>
    </div>
    </footer>
    `
}

export { footer }
