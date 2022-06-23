const createBanner = ({circleColor = 'red'}) => {
    const classPrefix = 'ddsweb-banner'

    // Element content
    const titleText = 'Faglig arena for informasjonsforvaltning: Kurs i begrepsanalyse'
    const subTitle = 'Digitaliseringsbloggen'

    // Functions
    const changeCircleColor = () => {
        return classPrefix + '--' + circleColor;
    }

    //language=HTML
    return String.raw`
        <div class="${classPrefix}">
            <div class="container">
                <div class="row">
                    <div class="${classPrefix}__content ${changeCircleColor()}">

                        <nav class="dds-breadcrumbs">
                            <ol class="dds-breadcrumbs__list">
                                <li class="dds-breadcrumbs__item">
                                    <a class="dds-link" href="." rel="noreferrer noopener">Hjem</a>
                                </li>
                                <li class="dds-breadcrumbs__item">
                                    <a class="dds-link" href="." rel="noreferrer noopener">Nivå 1</a>
                                </li>
                                <li class="dds-breadcrumbs__item">
                                    <label class="dds-breadcrumbs__text">Nåværende side</label>
                                </li>
                            </ol>
                        </nav>

                        <div class="row justify-content-center align-content-center flex-grow-1">
                            <div class="col-lg-11 col-xl-8">
                                <h1 class="${classPrefix}__title-container">
                                    <span class="${classPrefix}__sub-title">${subTitle}</span>
                                    <span class="${classPrefix}__title">${titleText}</span>
                                </h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `
}

export {createBanner}
