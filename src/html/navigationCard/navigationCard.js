import SunIcon from '@digdir/ds-icons/svg/outline/Sun.svg'
import ArrowRightIcon from '@digdir/ds-icons/svg/outline/ArrowRight.svg'

const createNavigationCard = ({
  showIcon = true,
  iconBackground = false,
  backgroundColor = true,
  title,
  desc,
  icon = false,
}) => {
  const classPrefix = 'ddsweb-navigation-card'

  // Elements
  const titleText =
    'For deg som skal bruke data fra andre på nettsider' || title
  const paragraphText =
    'Se hva slags data som er tilgjengelig, og hvordan du kan bruke dem riktig' ||
    desc
  const theIcon = icon || SunIcon

  // Switch statement that adds a modifier based on the value of backgroundColor

  const changeBackground = () => {
    switch (backgroundColor) {
      case 'blue':
        return classPrefix + '--blue'
      case 'yellow':
        return classPrefix + '--yellow'
      case 'white':
        return classPrefix + '--white'
      case 'grey':
        return classPrefix + '--grey'
      case 'red':
        return classPrefix + '--red'

      default:
        return classPrefix + ''
    }
  }

  const active = () => {
    if (backgroundColor === 'white' && iconBackground === 'red') {
      return classPrefix + '__active--red'
    }
    if (backgroundColor === 'white' && iconBackground === 'yellow') {
      return classPrefix + '__active--yellow'
    }
    if (backgroundColor === 'white' && iconBackground === 'blue') {
      return classPrefix + '__active--blue'
    } else {
      return ''
    }
  }

  // Function that adds a class __with-background if the user has iconBackground to true

  const changeIconBackground = () => {
    if (showIcon === false) {
      return
    }

    if (
      showIcon === true &&
      backgroundColor === 'red' &&
      iconBackground === 'red'
    ) {
      return classPrefix + '__with-background' + '--red'
    }

    if (
      showIcon === true &&
      backgroundColor === 'blue' &&
      iconBackground === 'blue'
    ) {
      return classPrefix + '__with-background' + '--blue'
    }

    if (
      showIcon === true &&
      backgroundColor === 'yellow' &&
      iconBackground === 'yellow'
    ) {
      return classPrefix + '__with-background' + '--yellow'
    }

    if (
      showIcon === true &&
      backgroundColor === 'white' &&
      iconBackground === true
    ) {
      return classPrefix + '__with-background' + '--white'
    }

    if (
      showIcon === true &&
      backgroundColor === 'white' &&
      iconBackground === 'red'
    ) {
      return classPrefix + '__with-background' + '--red'
    }

    if (
      showIcon === true &&
      backgroundColor === 'white' &&
      iconBackground === 'blue'
    ) {
      return classPrefix + '__with-background' + '--blue'
    }

    if (
      showIcon === true &&
      backgroundColor === 'white' &&
      iconBackground === 'yellow'
    ) {
      return classPrefix + '__with-background' + '--yellow'
    }

    if (
      showIcon === true &&
      backgroundColor === 'grey' &&
      iconBackground === 'grey'
    ) {
      return classPrefix + '__with-background' + '--grey'
    } else {
      return ''
    }
  }

  //language=HTML
  return String.raw`
        <div class='${classPrefix} ${changeBackground()} ${active()} '>
            <a class='${classPrefix}__link' href=#>
                ${
                  showIcon
                    ? `<span class='${classPrefix}__icon ${
                        iconBackground ? changeIconBackground() : ''
                      }'>${theIcon}</span>`
                    : ''
                }

                <h1 class='${classPrefix}__title ${
    showIcon ? '' : `${classPrefix}--no-icon`
  }'>
                    ${titleText}
                </h1>
                <p class='${classPrefix}__desc'>
                    ${paragraphText}
                </p>
                <span class="${classPrefix}__arrow">
                          ${ArrowRightIcon}
                </span>
            </a>
        </div>

    `
}

export { createNavigationCard }
