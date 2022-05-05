import ChevronRightIcon from '@digdir/ds-icons/svg/outline/ChevronRight.svg'
import DigdirIcon from '../../../assets/logo_digdir_negative.svg'
import FacebookFilledIcon from '@digdir/ds-icons/svg/filled/FacebookFilled.svg'
import TwitterFilledIcon from '@digdir/ds-icons/svg/filled/TwitterFilled.svg'

const footer = () => {
  const classPrefix = 'ddsweb-footer'

  // Element content
  const titleText = 'Jobbe med digitalisering'
  const descriptionText =
    'Embarrassed space windshield children. The detailed however, how provide earnestly been and for he a physics by the didn`t were evening.'

  // Elements

  //language=HTML
  return String.raw`
        <section class="section">
            
            <div class="container">
                <div class="row">
                    <div class="col-xl-7">
                        <div class="section__header"></div>
                    </div>
                </div>
                <div class="section__content"></div>
            </div>
            
        </section>
        
        <footer>
            <div class='container'>
                <div class='${classPrefix} row'>

                    <div class='${classPrefix}__left col-xl-4  col-md-5 col-xs-10'>
                        <div class='${classPrefix}__logo--icon'>${DigdirIcon}</div>

                        <p class='${classPrefix}__paragraph'>${descriptionText}</p>
                        <div class='${classPrefix}__icon--wrapper'>
                            <a class='${classPrefix}__link ${classPrefix}__link--facebook' href="#">
                                <span class='${classPrefix}__icon'>${FacebookFilledIcon}</span>
                            </a>
                            <a class='${classPrefix}__link ${classPrefix}__link--twitter' href="#">
                                <span class='${classPrefix}__icon'> ${TwitterFilledIcon}</span>
                            </a>
                        </div>
                    </div>

                    <div class='${classPrefix}__middle col-xl-4  col-md-5 col-xs-3'>
                        <h1 class='${classPrefix}__title'>${titleText}</h1>
                        <ul class='${classPrefix}__list'>
                            <a class='${classPrefix}__list--link' href=#>
                                <li class='${classPrefix}__list--item'>${ChevronRightIcon}Arkitekturprinsipper</li>
                            </a>
                            <a class='${classPrefix}__list--link' href=#>
                                <li class='${classPrefix}__list--item'>${ChevronRightIcon}Deling av data</li>
                            </a>
                            <a class='${classPrefix}__list--link' href=#>
                                <li class='${classPrefix}__list--item'>${ChevronRightIcon}Informasjonsforvaltning</li>
                            </a>
                            <a class='${classPrefix}__list--link' href=#>
                                <li class='${classPrefix}__list--item'>${ChevronRightIcon}Design</li>
                            </a>
                        </ul>
                    </div>

                    <div class='${classPrefix}__right col-xl-4  col-md-10 col-xs-3'><h1 class='${classPrefix}__title'>
                        ${titleText}</h1>
                        <ul class='${classPrefix}__list'>
                            <a class='${classPrefix}__list--link' href=#>
                                <li class='${classPrefix}__list--item'>${ChevronRightIcon}Arkitekturprinsipper</li>
                            </a>
                            <a class='${classPrefix}__list--link' href=#>
                                <li class='${classPrefix}__list--item'>${ChevronRightIcon}Deling av data</li>
                            </a>
                            <a class='${classPrefix}__list--link' href=#>
                                <li class='${classPrefix}__list--item'>${ChevronRightIcon}Informasjonsforvaltning</li>
                            </a>
                            <a class='${classPrefix}__list--link' href=#>
                                <li class='${classPrefix}__list--item'>${ChevronRightIcon}Design</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    `
}

export { footer }
