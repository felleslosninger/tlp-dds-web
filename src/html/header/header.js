import searchIcon from '@digdir/ds-icons/svg/outline/Search.svg'
import menuIcon from '@digdir/ds-icons/svg/outline/Menu.svg'
import { createSearchField } from '../searchfield/searchfield'

const classPrefix = 'ddsweb-header'
const menuClassPrefix = 'ddsweb-menu'
const dropdownClassPrefix = 'ddsweb-dropdown'

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
                            <button class="${dropdownClassPrefix}__toggle dropdown-toggle" type="button"
                                id="dropdownMenuButton" aria-haspopup="true" data-dds-toggle="#tema"
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
                    <button class="${classPrefix}__search-button" data-toggle="#search"
                        aria-expanded="false">${searchIcon}Søk</button>

                </div>
                <div class="${classPrefix}__expanded" id="search">
                    <div class="${classPrefix}__expanded-content">
                        <h1 class="${classPrefix}__title">Søk på hele nettstedet</h1>
                        ${createSearchField({})}
                    </div>
                </div>
                <button class="${classPrefix}__menu-button"><span
                        class="${classPrefix}__menu-icon">${menuIcon}</span>Meny</button>
            </div>
        </div>
    </div>
    <div class="${classPrefix}__bottom-bar">
        <div class="container">
            <div class="${classPrefix}__bottom-bar-left"></div>
            <div class="${classPrefix}__bottom-bar-right"></div>
        </div>
    </div>



</header>


`
}

export default createHeader
