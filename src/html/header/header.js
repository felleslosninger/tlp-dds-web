import facebookIcon from '../../../assets/experimental-icons/Facebook.svg'
import twitterIcon from '../../../assets/experimental-icons/twitter.svg'
import menuIcon from '@digdir/ds-icons/svg/menu/outline.svg'
import menuIcon2 from '../../../assets/experimental-icons/menu.svg'
import menuIcon3 from '../../../assets/experimental-icons/menu3.svg'
import chevronRightIcon from '@digdir/ds-icons/svg/chevron_right/outline.svg'
import searchIcon from '@digdir/ds-icons/svg/search/outline.svg'
import searchIcon2 from '../../../assets/experimental-icons/search.svg'
import searchIcon3 from '../../../assets/experimental-icons/search3.svg'


const createHeader = ({}) => {
    const classPrefix = 'ddsweb-header'
    const classPrefixMegaMenu = 'ddsweb-header-mega-menu'

    const croppedChevronSvg = String.raw`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="8.59 6 7.41 12">
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
    const shortcutList = (list) => {
        return String.raw`
            <li class="${classPrefixMegaMenu}__item">
                <a class="${classPrefixMegaMenu}__list-title" href="#">Digitale tjenester</a>
                <ul class="${classPrefixMegaMenu}__nested-list">
                    ${list.map(item => `<li class="${classPrefixMegaMenu}__nested-item">${shortcutLink(item)}</li>`).join("")}
                </ul>
            </li>
        `
    }

    //language=HTML
    return String.raw`
        <header class="${classPrefix}">
            <div class="${classPrefix}__bar">
                <div class="${classPrefix}__container">
                    <div class="${classPrefix}__left">
                        <img class="${classPrefix}__logo" src="logo_digdir.svg" alt="">
                    </div>
                    <div class="${classPrefix}__middle">
                        <ul class="${classPrefix}-menu">
                            <li class="${classPrefix}-menu__item dds-dropdown">
                                <button class="${classPrefix}-menu__toggle" id="dropdownButton" data-dds-toggle="#tema"
                                        aria-expanded="false">
                                    Tema
                                </button>
                                <ul class="dds-dropdown__menu" aria-labelledby="dropdownButton">
                                    <li class="dds-dropdown__item"><a href="#">Menu item 1</a></li>
                                    <li class="dds-dropdown__item"><a href="#">Menu item 2</a></li>
                                    <li class="dds-dropdown__item"><a href="#">Menu item 3</a></li>
                                    <li class="dds-dropdown__item"><a href="#">Menu item 4</a></li>
                                </ul>
                            </li>
                            <li class="${classPrefix}-menu__item ${classPrefix}-menu__item--active">
                                <a class="${classPrefix}-menu__link" href="#">Sporten</a>
                            </li>
                            <li class="${classPrefix}-menu__item">
                                <a class="${classPrefix}-menu__link" href="#">Været</a>
                            </li>
                        </ul>
                    </div>
                    <div class="${classPrefix}__right">
                        
                        <div class="${classPrefix}__search">
                            <button class="${classPrefix}__toggle" data-toggle="#search" aria-expanded="false">
                                ${searchIcon3}
                                <span>Søk</span>
                            </button>
                            <div class="${classPrefix}__expanded" id="search">
                                <div class="${classPrefix}__expanded-content">
                                    <a href="#">hi</a>
                                </div>
                            </div>
                        </div>

                        <div class="${classPrefix}__menu">
                            <button class="${classPrefix}__toggle" data-toggle="#menu" aria-expanded="false">
                                ${menuIcon3}
                                <span>Meny</span>
                            </button>
                            <div class="${classPrefix}__expanded" id="menu">
                                <div class="${classPrefix}__expanded-content">
                                    <div class="${classPrefix}-mega-menu">
                                        <h2 class="${classPrefixMegaMenu}__title">Temaoversikt</h2>
                                        <ul class="${classPrefixMegaMenu}__list">
                                            ${shortcutList(['Om oss', 'Rapporter'])}
                                            ${shortcutList(['Om oss', 'Rapporter'])}
                                            ${shortcutList(['Om oss', 'Rapporter'])}
                                            ${shortcutList(['Om oss', 'Rapporter'])}

                                            ${shortcutList(['Om oss', 'Rapporter'])}
                                            ${shortcutList(['Om oss', 'Rapporter'])}
                                            ${shortcutList(['Om oss', 'Rapporter'])}
                                            ${shortcutList(['Om oss', 'Rapporter'])}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="dds-button dds-button--secondary">Logg inn</button>
                    </div>
                </div>
            </div>
            <div class="${classPrefix}__overlay"></div>
        </header>
    `
}

export {createHeader}
