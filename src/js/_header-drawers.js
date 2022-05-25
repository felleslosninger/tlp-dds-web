import searchIcon from '@digdir/ds-icons/svg/outline/Search.svg'
import menuIcon from '@digdir/ds-icons/svg/outline/Menu.svg'
import closeIcon from '@digdir/ds-icons/svg/outline/Close.svg'

export function headerDrawers() {
  jQuery(function () {
    const toggleBtns = $('button[data-toggle]')
    const animationSpeed = 400
    const overlay = $('.ddsweb-header__overlay')
    const menuButton = $('.ddsweb-header__menu-button')
    const searchButton = $('.ddsweb-header__search-button')

    toggleBtns.on('click', function (e) {
      let target = $(e.target)
      let dropdownSelector = target.data('toggle')
      let dropdown = $(dropdownSelector)
      let searchBtnIcon = $('.ddsweb-header__search-icon')
      let megaMenuIcon = $('.ddsweb-header__menu-icon')
      target.addClass('ddsweb-header__button-active')
      if (dropdown.hasClass('dds-dropdown__active')) {
        closeDropdown(dropdown, true)
        searchBtnIcon.html(searchIcon)
        megaMenuIcon.html(menuIcon)
        searchBtnIcon.removeClass('ddsweb-header__search-icon--active')
        megaMenuIcon.removeClass('ddsweb-header__menu-icon--active')
      } else {
        openDropdown(dropdown, e)
      }
    })

    function openDropdown(dropdown) {
      dropdown.addClass('dds-dropdown__active')
      $(dropdown).attr('aria-expanded', 'true')
      let dropDownContent = $('.ddsweb-header__expanded-content')
      let menuContent = $('#menu')
      let searchContent = $('#search')
      let megaMenuIcon = $('.ddsweb-header__menu-icon')
      let searchBtnIcon = $('.ddsweb-header__search-icon')
      if (dropdown.attr('id') === 'search') {
        searchBtnIcon.addClass('ddsweb-header__search-icon--active')
        searchBtnIcon.html(closeIcon)
        megaMenuIcon.html(menuIcon)
        megaMenuIcon.removeClass('ddsweb-header__menu-icon--active')
        dropdown.animate({
          height: '300px',
          opacity: '1',
        })
        dropDownContent.animate({ opacity: '1' })
        dropdown.find('.ddsweb-search-field__input').focus()
        menuContent.removeClass('dds-dropdown__active')
        menuContent.attr('aria-expanded', 'false')
        menuContent.animate({ opacity: '0', height: '0px' })
        menuButton.removeClass('ddsweb-header__button-active')
      } else if (dropdown.attr('id') === 'menu') {
        searchBtnIcon.html(searchIcon)
        megaMenuIcon.html(closeIcon)
        megaMenuIcon.addClass('ddsweb-header__menu-icon--active')
        searchBtnIcon.removeClass('ddsweb-header__search-icon--active')
        searchButton.removeClass('ddsweb-header__button-active')
        dropdown.animate({
          height: '700px',
          opacity: '1',
        })
        dropDownContent.animate({ opacity: '1' })
        searchContent.removeClass('dds-dropdown__active')
        searchContent.attr('aria-expanded', 'false')
        searchContent.animate({ opacity: '0', height: '0px' })
      }

      if (dropdown.hasClass('dds-dropdown__active')) {
        overlay
          .css({ display: 'block' })
          .show()
          .animate({ opacity: '1' }, animationSpeed)
      } else {
        overlay
          .css({ opacity: '0', display: 'block' })
          .animate({ opacity: '0' }, animationSpeed)
      }
    }

    function closeDropdown(dropdown) {
      dropdown.removeClass('dds-dropdown__active')
      $(dropdown).attr('aria-expanded', 'false')
      let dropDownContent = $('.ddsweb-header__expanded-content')
      let menuContent = $('#menu')
      let searchContent = $('#search')

      if (dropdown.attr('id') === 'search') {
        dropdown.animate({
          height: '0px',
          opacity: '0',
        })
        dropDownContent.animate({ opacity: '0' })

        menuContent.animate({ opacity: '0', height: '0px' })
        menuContent.attr('aria-expanded', 'false')
        searchButton.removeClass('ddsweb-header__button-active')
      } else if (dropdown.attr('id') === 'menu') {
        searchContent.animate({ opacity: '0', height: '0px' })
        searchContent.attr('aria-expanded', 'false')
        dropdown.animate({
          height: '0px',
          opacity: '0',
        })
        menuButton.removeClass('ddsweb-header__button-active')
      }
      if (dropdown.hasClass('dds-dropdown__active')) {
        overlay
          .css({ opacity: '0', display: 'block' })
          .show()
          .animate({ opacity: '1' }, animationSpeed)
      } else {
        overlay.animate({ opacity: '0' }, animationSpeed)
      }
    }

    $(document).on('click', function (e) {
      let target = $(e.target)
      let megaMenuIcon = $('.ddsweb-header__menu-icon')
      let searchBtnIcon = $('.ddsweb-header__search-icon')
      let dropdown = $('.ddsweb-header__expanded')
      const overlay = $('.ddsweb-header__overlay')

      if (target.hasClass('ddsweb-header__overlay')) {
        dropdown.removeClass('dds-dropdown__active')
        dropdown.animate({ opacity: '0', height: '0px' })
        dropdown.attr('aria-expanded', 'false')
        overlay.animate({ opacity: '0', display: 'none' })
        searchBtnIcon.html(searchIcon)
        megaMenuIcon.html(menuIcon)
        searchBtnIcon.removeClass('ddsweb-header__search-icon--active')
        megaMenuIcon.removeClass('ddsweb-header__menu-icon--active')
        menuButton.removeClass('ddsweb-header__button-active')
        searchButton.removeClass('ddsweb-header__button-active')
      }
    })
  })
}
