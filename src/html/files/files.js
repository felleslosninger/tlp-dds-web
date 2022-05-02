import ImageIcon from '@digdir/ds-icons/svg/outline/Image.svg'
import DownloadIcon from '@digdir/ds-icons/svg/outline/Download.svg'

const createFiles = ({ backgroundColor = 'blue' }) => {
  const classPrefix = 'ddsweb-files'

  // Element content
  const titleText = 'Dokument tittel'

  const paragraphText = `Kort tekst knyttet til dokumentet
  `
  // Functions

  const changeBackground = () => {
    switch (backgroundColor) {
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

  return String.raw`
  <a class='${classPrefix} ${changeBackground()}' href="#">
<div class='${classPrefix}__icon--left'>
<span class='${classPrefix}__icon--image'>${ImageIcon}</span>
</div>
<div class='${classPrefix}__content'>
<h1 class='${classPrefix}__title'>${titleText}</h1>
<p class='${classPrefix}__paragraph'>${paragraphText}</p>
</div>
<div class='${classPrefix}__icon--right'>
<span class='${classPrefix}__icon--download'>${DownloadIcon}</span>
</div>
</a>
    `
}

export { createFiles }
