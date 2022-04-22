import SunIcon from '@digdir/ds-icons/svg/outline/Sun.svg'
import ArrowRightIcon from '@digdir/ds-icons/svg/outline/ArrowRight.svg'

const createNavigationCard = ({
  icon = true,
  iconBackground = false,
  backgroundColor = true,
}) => {
  const classPrefix = 'ddsweb-navigation-card'
  // Elements

  const titleText = 'For deg som skal bruke data fra andre på nettsider'
  const paragraphText =
    'Se hva slags data som er tilgjengelig, og hvordan du kan bruke dem riktig'

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
    if (icon === false) {
      return
    }

    if (
      icon === true &&
      backgroundColor === 'red' &&
      iconBackground === 'red'
    ) {
      return classPrefix + '__with-background' + '--red'
    }

    if (
      icon === true &&
      backgroundColor === 'blue' &&
      iconBackground === 'blue'
    ) {
      return classPrefix + '__with-background' + '--blue'
    }

    if (
      icon === true &&
      backgroundColor === 'yellow' &&
      iconBackground === 'yellow'
    ) {
      return classPrefix + '__with-background' + '--yellow'
    }

    if (
      icon === true &&
      backgroundColor === 'white' &&
      iconBackground === true
    ) {
      return classPrefix + '__with-background' + '--white'
    }

    if (
      icon === true &&
      backgroundColor === 'white' &&
      iconBackground === 'red'
    ) {
      return classPrefix + '__with-background' + '--red'
    }

    if (
      icon === true &&
      backgroundColor === 'white' &&
      iconBackground === 'blue'
    ) {
      return classPrefix + '__with-background' + '--blue'
    }

    if (
      icon === true &&
      backgroundColor === 'white' &&
      iconBackground === 'yellow'
    ) {
      return classPrefix + '__with-background' + '--yellow'
    }

    if (
      icon === true &&
      backgroundColor === 'grey' &&
      iconBackground === 'grey'
    ) {
      return classPrefix + '__with-background' + '--grey'
    } else {
      return ''
    }
  }

  // Element content

  return String.raw`
  <div  class='${classPrefix} ${changeBackground()} ${active()} '>
	<a class='${classPrefix}__link' href=#>
	${
    icon
      ? `<span class='${classPrefix}__icon ${
          iconBackground ? changeIconBackground() : ''
        }'>${SunIcon}</span>`
      : ''
  }
	 
	
	<h1 class='${classPrefix}__title ${icon ? '' : `${classPrefix}--no-icon`}'>
		${titleText}
	</h1>
	<p class='${classPrefix}__paragraph'>
		${paragraphText} 
	</p>
	${ArrowRightIcon}  
</a>
</div>
	
		`
}

export { createNavigationCard }
