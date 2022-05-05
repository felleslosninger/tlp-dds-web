const createSection = ({ underlinecolor = 'grey', backgroundColor = true }) => {
  const classPrefix = 'ddsweb-section'

  // Element content
  const titleText = 'Tittel på seksjon'
  const paragraphText =
    'The is in was in which, over our the so sides academic was software done well for just the prepared children the manipulate language'

  // Functions
  const changeUnderlineColor = () => {
    switch (underlinecolor) {
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

  return String.raw`
    <section class="${classPrefix} ${background()}">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 mx-auto">
                    <div class="${classPrefix}__header">
                        <h1 class="${classPrefix}__title">${titleText}</h1>
                        <div class="${classPrefix}__line ${changeUnderlineColor()} "></div>
                    </div>
                </div>
                <div class="col-xl-12 mx-auto">
                    <div class="${classPrefix}__content">
                        <p class="${classPrefix}__paragraph">${paragraphText}</p>
                        <div class="${classPrefix}__rectangle"></div>
                    </div>
                </div>
            </div>
        </div>
    
    </section>
        `
}

export { createSection }
