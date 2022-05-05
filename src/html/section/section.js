const createSection = ({
  title = 'Tittel på seksjon',
  desc = 'What for follow turned taken fate trade, multi the point not having a would it succeed the were there the a there, greatest hall commitment but the right but not poetic at a for behavioural.' +
    '\n',
  content = false,
  lineColor = 'grey',
  backgroundColor = true,
}) => {
  const classPrefix = 'ddsweb-section'

  // Functions
  const changeUnderlineColor = () => {
    switch (lineColor) {
      case 'blue':
        return classPrefix + '__line--blue'
      case 'yellow':
        return classPrefix + '__line--yellow'
      case 'grey':
        return classPrefix + '__line--grey'
      case 'red':
        return classPrefix + '__line--red'

      default:
        return classPrefix + ''
    }
  }

  const background = () => {
    if (backgroundColor === true) {
      return classPrefix + '--background'
    } else {
      return ''
    }
  }

  // Elements

  //language=HTML
  return String.raw`
        <section class="${classPrefix} ${background()}">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 mx-auto">
                        <div class="${classPrefix}__header">
                            <h1 class="${classPrefix}__title">${title}</h1>
                            <div class="${classPrefix}__line ${changeUnderlineColor()} "></div>
                            <p class="${classPrefix}__paragraph">${desc}</p>
                        </div>
                    </div>
                    <div class="col-xl-12 mx-auto">
                        <div class="${classPrefix}__content">
                            ${
                              content
                                ? content
                                : `<div class="${classPrefix}__rectangle"></div>`
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

export { createSection }
