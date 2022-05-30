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
  // functions

  const list1 = [
    {
      name: 'Arkitekturprinsipper',
      url: '#',
    },
    {
      name: 'Deling av data',
      url: '#',
    },
    {
      name: 'Informasjonsforvaltning',
      url: '#',
    },
    {
      name: 'Design',
      url: '#',
    },
    {
      name: 'Interne applikasjoner',
      url: '#',
    },
  ]

  const list = (array) => {
    return String.raw`
  <ul class='${classPrefix}__list'>
    ${array.reduce(
      (updated, latest) =>
        updated.concat(
          ` <li class="${classPrefix}__list-item"><a class="${classPrefix}__list-link" href='${latest.url}'>${latest.name}</a>
    </li>`,
        ),
      '',
    )}
  </ul>
   
   `
  }

  //language=HTML
  return String.raw`
        <footer class='${classPrefix}'>
          <div class='container'>
            <div class='row justify-content-center'>
        
              <div class='col-xl-4 col-md-5 col-xs-10'>
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
              <div class='col-xl-3 col-md-5 col-xs-3'>
                <div class='${classPrefix}__title'>Fellesløsninger</div>
                <ul class='${classPrefix}__list'>
                  ${list(list1)}
                </ul>
        
        
              </div>
        
              <div class='col-xl-4 col-md-10 col-xs-3'>
                <div class='${classPrefix}__title'>Jobbe med digitalisering</div>
                <ul class='${classPrefix}__list'>
                  ${list(list1)}
                </ul>
              </div>
            </div>
          </div>
        </footer>
    `
}

export { footer }
