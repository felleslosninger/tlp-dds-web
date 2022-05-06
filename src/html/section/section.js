const createSection = ({
  title = 'Tittel på seksjon',
  desc,
  content = false,
  footer = false,
  lineColor = 'grey',
  backgroundColor,
}) => {
  const classPrefix = 'ddsweb-section'
  const theDesc =
    desc || desc === undefined
      ? 'What for follow turned taken fate trade, multi the point not having a would it succeed the were there the a there, greatest hall commitment but the right but not poetic at a for behavioural.'
      : ''
  const theFooter = footer || false

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
    if (backgroundColor === 'grey') {
      return classPrefix + '--grey'
    } else {
      return ''
    }
  }

  // Elements

  //language=HTML
  return String.raw`
        <section class="${classPrefix} ${background()}" data-dds-color="${lineColor}">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 mx-auto">
                        <div class="${classPrefix}__header">
                            <h1 class="${classPrefix}__title">${title}</h1>
                            <div class="${classPrefix}__line ${changeUnderlineColor()} "></div>
                            ${
                              theDesc
                                ? `<p class="${classPrefix}__paragraph">${theDesc}</p>`
                                : ''
                            }
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
                        ${
                          theFooter
                            ? `<div class="${classPrefix}__footer">${theFooter}</div>`
                            : ''
                        }
                    </div>
                </div>
            </div>
        </section>
    `
}

export { createSection }
