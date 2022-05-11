import SunIcon from '@digdir/ds-icons/svg/outline/Sun.svg'
import ArrowRightIcon from '@digdir/ds-icons/svg/outline/ArrowRight.svg'

const createNavigationCard = ({
  showIcon = true,
  iconBackground,
  backgroundColor,
  title,
  desc,
  icon,
}) => {
  const classPrefix = 'ddsweb-navigation-card'

  // Elements
  const titleText =
    'For deg som skal bruke data fra andre på nettsider' || title
  const paragraphText =
    'Se hva slags data som er tilgjengelig, og hvordan du kan bruke dem riktig' ||
    desc
  const theIcon = SunIcon || icon

  //language=HTML
  return String.raw`
        <div class='${classPrefix}'>
            <a class='${classPrefix}__link ${classPrefix}__link-${backgroundColor}' href=#>
                ${
                  showIcon
                    ? `<span class='${classPrefix}__icon ${classPrefix}__icon-${
                        iconBackground ? iconBackground : ''
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
