const classPrefix = 'ddsweb-image-section'

const createImageSection = ({
  title,
  desc,
  backgroundColor,
  imageDirection = 'left',
  linkText,
  imgPath,
}) => {
  const theTitle = title || 'Her finner du Stifinneren'
  const theDescription =
    desc ||
    'behovskatalogen kan du melde inn ditt eget behov, se hva andre har meldt inn, kommentere på andres bidrag og diskutere behovene med andre i Datalandsbyen. Ved å abonnere på oppdateringer kan du følge med på hva som skjer med behovet.\n'
  const theLinkText = linkText || 'Her er ei lenke'
  const theImgPath = imgPath || 'img/person-sprint-red.svg'

  //language=HTML
  return String.raw`
        <section class="${classPrefix} ${classPrefix}--${backgroundColor}">
            <div class="container">
                <div class="row align-items-center">
                    ${
                      imageDirection === 'left'
                        ? imageContainer(theImgPath)
                        : ''
                    }
                    ${
                      imageDirection === 'left'
                        ? '<div class="col-md-1"></div>'
                        : ''
                    }
                    <div class="col-md-6">
                        <div class="${classPrefix}__text-container">
                            <h2 class="${classPrefix}__title">${theTitle}</h2>
                            <p class="${classPrefix}__desc">${theDescription}</p>
                            ${internalLink(theLinkText)}
                        </div>
                    </div>
                    ${
                      imageDirection === 'right'
                        ? '<div class="col-md-1"></div>'
                        : ''
                    }
                    ${
                      imageDirection === 'right'
                        ? imageContainer(theImgPath)
                        : ''
                    }
                </div>
            </div>
        </section>
    `
}

const imageContainer = (theImgPath) => {
  //language=HTML
  return String.raw`
        <div class="col-md-5 justify-content-center d-flex">
            <div class="${classPrefix}__img-container">
                <img class="${classPrefix}__img" src=" ${theImgPath}" alt="">
            </div>
        </div>
    `
}

const internalLink = (text) => {
  //language=HTML
  return String.raw`
        <a
                class="dds-icon-link dds-icon-link--large dds-icon-link--icon-right"
                href="https://www.digdir.no/"
                rel="noreferrer noopener"
        >
            ${text}
            <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
            >
                <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                        fill="#1E2B3C"
                ></path>
                <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                        fill="#1E2B3C"
                ></path>
            </svg>
        </a>
    `
}

export default createImageSection
