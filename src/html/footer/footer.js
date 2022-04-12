import chevronRightIcon from '@digdir/ds-icons/svg/chevron_right/outline.svg'
import facebook from '@digdir/ds-icons/svg/facebook/outline.svg'
//import TwitterIcon from '@digdir/ds-icons/svg/outline/Twitter.svg'
const footer = () => {
  const classPrefix = 'ddsweb-footer'

  // Element content
  const titleText = 'Jobbe med digitalisering'
  const descriptionText =
    'Embarrassed space windshield children. The detailed however, how provide earnestly been and for he a physics by the didn`t were evening.'

  // Elements

  return String.raw`
    <footer class="container">
    <div class='${classPrefix} row'>
    <div class='${classPrefix}__left col-xl-3  col-md-5 col-xs-3'>
    <h1 class='${classPrefix}__title'><span>Logo</span> Digdir </h1>
    <p class='${classPrefix}__paragraph'>${descriptionText}</p> <span>${facebook}</span><span>twitter icon</span></div>
    <div class='${classPrefix}__middle col-xl-3  col-md-5 col-xs-3'>
    <h1 class='${classPrefix}__title'>${titleText}</h1>
    <ul class='${classPrefix}__list'>
    <a class='${classPrefix}__list--link' href=# ><li class='${classPrefix}__list--item'>${chevronRightIcon}Arkitekturprinsipper</li></a>
    <a class='${classPrefix}__list--link' href=# ><li class='${classPrefix}__list--item'>${chevronRightIcon}Deling av data</li></a>
    <a class='${classPrefix}__list--link' href=# ><li class='${classPrefix}__list--item'>${chevronRightIcon}Informasjonsforvaltning</li></a>
    <a class='${classPrefix}__list--link' href=# ><li class='${classPrefix}__list--item'>${chevronRightIcon}Design</li></a>
    <a class='${classPrefix}__list--link' href=# ><li class='${classPrefix}__list--item'>${chevronRightIcon}Interne applikasjoner</li></a>
    </ul>
    </div>
    <div class='${classPrefix}__right col-xl-3  col-md-5 col-xs-3'><h1 class='${classPrefix}__title'>${titleText}</h1>
    <ul class='${classPrefix}__list'>
    <a class='${classPrefix}__list--link' href=# ><li class='${classPrefix}__list--item'>${chevronRightIcon}Arkitekturprinsipper</li></a>
    <a class='${classPrefix}__list--link' href=# ><li class='${classPrefix}__list--item'>${chevronRightIcon}Deling av data</li></a>
    <a class='${classPrefix}__list--link' href=# ><li class='${classPrefix}__list--item'>${chevronRightIcon}Informasjonsforvaltning</li></a>
    <a class='${classPrefix}__list--link' href=# ><li class='${classPrefix}__list--item'>${chevronRightIcon}Design</li></a>
    <a class='${classPrefix}__list--link' href=# ><li class='${classPrefix}__list--item'>${chevronRightIcon}Interne applikasjoner</li></a>
    </ul>
    </div>
    </div>
    </footer>
    `
}

export { footer }
