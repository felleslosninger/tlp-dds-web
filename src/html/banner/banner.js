const createBanner = ({ circleColor = 'red' }) => {
  const classPrefix = 'ddsweb-banner'

  // Element content
  const titleText = 'Bannertittel'

  // Functions

  const changeCircleColor = () => {
    switch (circleColor) {
      case 'blue':
        return classPrefix + '--blue'
      case 'yellow':
        return classPrefix + '--yellow'

      case 'red':
        return classPrefix + '--red'

      default:
        return classPrefix + ''
    }
  }

  // Elements

  return String.raw`
      <div class="${classPrefix}">
      <div class="${classPrefix}__content ${changeCircleColor()}">
        <h1 class="${classPrefix}__title">${titleText}</h1>
        </div>
      </div>
      `
}

export { createBanner }
