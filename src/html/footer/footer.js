import facebookIcon from '../../../assets/experimental-icons/Facebook.svg'
import twitterIcon from '../../../assets/experimental-icons/twitter.svg'


const createFooter = ({}) => {
    const classPrefix = 'ddsweb-footer'

    // Element content


    const croppedChevronSvg = String.raw`<svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="8.59 6 7.41 12"
      >
      <path d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"/>
    </svg>`

    //language=HTML
    const shortcutLink = (text) => {
        return String.raw`
            <a class="dds-icon-link dds-icon-link--shortcut dds-icon-link--icon-left"
               href="https://www.digdir.no/"
               rel="noreferrer noopener">
                ${croppedChevronSvg}
                ${text}
            </a>
        `
    }

    //language=HTML
    return String.raw`
        <footer class="${classPrefix}">
            <div class="${classPrefix}__container">
                <div class="${classPrefix}__grid">
                    <div class="${classPrefix}__column">
                        <img class="${classPrefix}__logo" src="logo_digdir_negative.svg" alt="">
                        <p class="${classPrefix}__desc">Digitaliseringsdirektoratet skal vere regjeringa sitt fremste
                            verktøy for raskare og meir samordna digitalisering av samfunnet.</p>
                        <div class="${classPrefix}-socials">
                            <a class="${classPrefix}-socials__icon" href="#">
                                ${twitterIcon}
                            </a>
                            <a class="${classPrefix}-socials__icon" href="#">
                                ${facebookIcon}
                            </a>
                        </div>
                    </div>
                    <div class="${classPrefix}__column">
                        <h2 class="${classPrefix}__title">Viktige lenker</h2>
                        <ul class="${classPrefix}__list">
                            <li class="${classPrefix}__list-item">${shortcutLink('Support')}</li>
                            <li class="${classPrefix}__list-item">${shortcutLink('Informasjonssikkerhet')}</li>
                            <li class="${classPrefix}__list-item">${shortcutLink('Om Data')}</li>
                            <li class="${classPrefix}__list-item">${shortcutLink('Arkitekturprinsipper')}</li>
                        </ul>
                    </div>
                    <div class="${classPrefix}__column">
                        <h2 class="${classPrefix}__title">Jobbe med digitalisering</h2>
                        <ul class="${classPrefix}__list">
                            <li class="${classPrefix}__list-item">${shortcutLink('Om oss')}</li>
                            <li class="${classPrefix}__list-item">${shortcutLink('Digitaliseringsbloggen')}</li>
                            <li class="${classPrefix}__list-item">${shortcutLink('Kontakt')}</li>
                            <li class="${classPrefix}__list-item">${shortcutLink('Deling av data')}</li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    `
}

export {createFooter}
