import searchIcon from '@digdir/ds-icons/svg/outline/Search.svg'

const createSearchField = ({}) => {
  const classPrefix = 'ddsweb-search-field'

  // Element content
  const placeHolderText = 'Søk her ...'
  const buttonText = 'Søk'

  // Functions

  // Elements

  return String.raw`
  <div class="${classPrefix}">
    <span aria-hidden="true" class="${classPrefix}__icon"> ${searchIcon}</span>
    <input class="${classPrefix}__input" type="text" placeholder="${placeHolderText}" />
    <button type="button" class="${classPrefix}__button">${buttonText}</button>
  
  </div>
      
          `
}

export { createSearchField }
