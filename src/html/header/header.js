import searchIcon from '@digdir/ds-icons/svg/outline/Search.svg'
import menuIcon from '@digdir/ds-icons/svg/outline/Menu.svg'
import closeIcon from '@digdir/ds-icons/svg/outline/Close.svg'
import { createSearchField } from '../searchfield/searchfield'



const classPrefix = 'ddsweb-header'
const menuClassPrefix = 'ddsweb-menu'
const dropdownClassPrefix = 'ddsweb-dropdown'
const classPrefixMegaMenu = 'ddsweb-header-mega-menu'
const classPrefixIconLink = 'dds-icon-link'
const croppedChevronSvg = String.raw`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="8.59 6 7.41 12">
        <path d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z" />
    </svg>`

const shortcutList = (list) => {
    return String.raw`
        <li class="${classPrefixMegaMenu}__item">
            <a class="${classPrefixMegaMenu}__list-title" href="#">Jobbe med digitalisering</a>
            <ul class="${classPrefixMegaMenu}__nested-list">
                ${list.map(item => `<li class="${classPrefixMegaMenu}__nested-item">${shortcutLink(item)}</li>`).join("")}
            </ul>
        </li>
    `
}

//language=HTML
const shortcutLink = (text) => {
    return String.raw`
        <a class="${classPrefixIconLink} ${classPrefixIconLink}--shortcut ${classPrefixIconLink}--icon-left"
            href="https://www.digdir.no/" rel="noreferrer noopener">
            ${croppedChevronSvg}
            ${text}
        </a>
    `
}







const createHeader = ({ }) => {


    return String.raw`

<header class="${classPrefix}">
    <div class="${classPrefix}__top-bar">
        <div class="container">
            <div class="${classPrefix}__top-bar-left ">
                <div class="${classPrefix}__logo-container">
                    <img class="${classPrefix}__logo" src="logo_digdir.svg" />
                </div>
            </div>
            <div class="${classPrefix}__top-bar-middle">
                <ul class="${menuClassPrefix}">
                    <li class="${menuClassPrefix}__item">
                        <div class="${dropdownClassPrefix}">
                            <button class="${dropdownClassPrefix}__theme ${dropdownClassPrefix}__toggle dropdown-toggle"
                                type="button" id="dropdownMenuButton" aria-haspopup="true" data-dds-toggle="#tema"
                                aria-expanded="false" data-bs-toggle="dropdown"> Tema</button>

                            <ul class="${dropdownClassPrefix}__list dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li class=" ${menuClassPrefix}__item">
                                    <a class="${menuClassPrefix}__link dropdown-item" href="#">Nyheter</a>
                                </li>
                                <li class="${menuClassPrefix}__item">
                                    <a class="${menuClassPrefix}__link dropdown-item" href="#">Rapporter</a></li>
                                <li class="${menuClassPrefix}__item">
                                    <a class="${menuClassPrefix}__link dropdown-item" href="#">Bloggen</a></li>
                                <li class="${menuClassPrefix}__item">
                                    <a class="${menuClassPrefix}__link dropdown-item" href="#">Digdir</a></li>
                            </ul>
                        </div>
                    </li>


                    <li class="${menuClassPrefix}__item"><a class="${menuClassPrefix}__link" href="#">Nyheter</a> </li>
                    <li class="${menuClassPrefix}__item"><a class="${menuClassPrefix}__link" href="#">Rapporter</a></li>
                    <li class="${menuClassPrefix}__item"><a class="${menuClassPrefix}__link" href="#">Bloggen</a></li>
                    <li class="${menuClassPrefix}__item"><a class="${menuClassPrefix}__link" href="#">Om oss</a></li>
                    <li class="${menuClassPrefix}__item"><a class="${menuClassPrefix}__link" href="#">Kontakt</a></li>
                </ul>

            </div>
            <div class="${classPrefix}__top-bar-right">
                <div class="${classPrefix}__search">
                    <button class="${classPrefix}__search-button ${classPrefix}__toggle" data-toggle="#search"
                        aria-expanded="false">
                        <span class="${classPrefix}__search-icon" data-toggle="#search">${searchIcon
                           }</span>Søk</button>

                </div>
                <div class="${classPrefix}__expanded" id="search">
                    <div class="${classPrefix}__expanded-content">
                        <h1 class="${classPrefix}__title">Søk på hele nettstedet</h1>
                        ${createSearchField({})}
                    </div>
                </div>
                <button class="${classPrefix}__menu-button ${classPrefix}__toggle" data-toggle="#menu"
                    aria-expanded="false">
                    <span class="${classPrefix}__menu-icon" data-toggle="#menu">${menuIcon}</span>Meny
                </button>
            </div>
        </div>
        <div class="${classPrefix}__expanded" id="menu">
            <div class="${classPrefix}__expanded-content">
                <div class="${classPrefix}-mega-menu">
                    <h2 class="${classPrefixMegaMenu}__title">Temaoversikt</h2>
                    <ul class="${classPrefixMegaMenu}__list">
                        ${shortcutList(['Arkitekturprinsipper', 'Deling av data', 'Informasjonsforvaltning', 'Design',
                        'Interne applikasjoner', 'Fellesløsninger'])}
                        ${shortcutList(['Arkitekturprinsipper', 'Deling av data', 'Informasjonsforvaltning', 'Design',
                        'Interne applikasjoner', 'Fellesløsninger'])}
                        ${shortcutList(['Arkitekturprinsipper', 'Deling av data', 'Informasjonsforvaltning', 'Design',
                        'Interne applikasjoner', 'Fellesløsninger'])}
                        ${shortcutList(['Arkitekturprinsipper', 'Deling av data', 'Informasjonsforvaltning', 'Design',
                        'Interne applikasjoner', 'Fellesløsninger'])}

                        ${shortcutList(['Arkitekturprinsipper', 'Deling av data', 'Informasjonsforvaltning', 'Design',
                        'Interne applikasjoner', 'Fellesløsninger'])}
                        ${shortcutList(['Arkitekturprinsipper', 'Deling av data', 'Informasjonsforvaltning', 'Design',
                        'Interne applikasjoner', 'Fellesløsninger'])}
                        ${shortcutList(['Arkitekturprinsipper', 'Deling av data', 'Informasjonsforvaltning', 'Design',
                        'Interne applikasjoner', 'Fellesløsninger'])}
                        ${shortcutList(['Arkitekturprinsipper', 'Deling av data', 'Informasjonsforvaltning', 'Design',
                        'Interne applikasjoner', 'Fellesløsninger'])}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="${classPrefix}__bottom-bar">
        <div class="container">
            <div class="${classPrefix}__bottom-bar-left"></div>
            <div class="${classPrefix}__bottom-bar-right"></div>
        </div>
    </div>
    <div class="${classPrefix}__overlay"></div>
</header>


`

}

export default createHeader
