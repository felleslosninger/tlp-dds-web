//language=HTML
export const header = () => String.raw`
    <div class="header">
        <div class="container">
            <div class="header__left">
                <img class="header__logo" src="logo_digdir.svg" alt="fff">
            </div>
            <div class="header__middle">
                <ul>
                    <li><a href="#">Hjem</a></li>
                    <li>
                        <button>Nyheter</button>
                        <ul>
                            <li><a href="">Playstation</a></li>
                            <li><a href="">Nintendo</a></li>
                            <li><a href="">Microsoft</a></li>
                            <li><a href="">Sony</a></li>
                            <li><a href="">Sega</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Rapporter</a></li>
                    <li><a href="#">Kontakt</a></li>
                    <li><a href="#">Om oss</a></li>
                </ul>
            </div>
            <div class="header__right">
                <button class="header-toggle">
                    <div class="header-toggle__icon fal fa-search"></div>
                    <div class="header-toggle__text">Søk</div>
                </button>
            </div>
        </div>
    </div>
`