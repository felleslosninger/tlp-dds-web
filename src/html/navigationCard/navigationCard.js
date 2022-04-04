import sun from '@digdir/ds-icons/svg/wb_sunny/outline.svg'
import arrow from '@digdir/ds-icons/svg/arrow_forward/outline.svg'

const createNavigationCard = ({
  icon = sun,
  color = 'red',
  iconBackground = false,
}) => {
  const classPrefix = 'ddsweb-navigation-card'
  const titleText = 'For deg som skal bruke data fra andre på nettsider'
  const paragraphText =
    'Se hva slags data som er tilgjengelig, og hvordan du kan bruke dem riktig'
  // Element content

  return String.raw`
    <a class='${classPrefix}__link' href=#>
        ${icon}
     <h1 class='${classPrefix}__title'>
     ${titleText}
     </h1>
    <p class='${classPrefix}__paragraph'>
        ${paragraphText} 
    </p>
    ${arrow}
    </a>
    `
}

export { createNavigationCard }
