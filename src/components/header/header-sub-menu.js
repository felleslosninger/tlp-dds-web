//language=HTML
export const headerSubMenu = () => String.raw`
    <div class="header">
        <div class="container">
            <div class="header__left">
                <img class="header__logo" src="logo_digdir.svg" alt="Logo">
            </div>
            <div class="header__right">
                <button class="header-toggle">
                    <div class="header-toggle__icon fal fa-search"></div>
                    <div class="header-toggle__text">Søk</div>
                </button>
            </div>
        </div>
    </div>
    <div class="sub-header">
        <div class="container">
            <ul class="sub-header__list">
                <li>
                    <button>Tema</button>
                </li>
                <li>
                    <a href="#">Nyheter</a>
                    <a href="#">Sport</a>
                    <a href="#">Arrangement</a>
                    <a href="#">Underholdning</a>
                    <a href="#">Kontakt</a>
                    <a href="#">Om oss</a>
                </li>
            </ul>
        </div>
    </div>
`