export function headerDrawers() {
  $(document).ready(function () {
    const toggleBtns = $('button[data-toggle]')
    const animationSpeed = 400
    const overlay = $('.ddsweb-header__overlay')
    const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6.5 35.25V33H41.5V35.25ZM6.5 25.15V22.85H41.5V25.15ZM6.5 15V12.75H41.5V15Z"/></svg>`
    const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M39.55 41.1 26.55 28.15Q25.05 29.45 23.075 30.175Q21.1 30.9 18.95 30.9Q13.85 30.9 10.325 27.375Q6.8 23.85 6.8 18.8Q6.8 13.8 10.325 10.275Q13.85 6.75 18.9 6.75Q23.95 6.75 27.475 10.275Q31 13.8 31 18.8Q31 20.9 30.275 22.9Q29.55 24.9 28.2 26.5L41.2 39.45ZM18.95 28.65Q23 28.65 25.85 25.775Q28.7 22.9 28.7 18.8Q28.7 14.7 25.85 11.85Q23 9 18.95 9Q14.8 9 11.95 11.85Q9.1 14.7 9.1 18.8Q9.1 22.9 11.95 25.775Q14.8 28.65 18.95 28.65Z"/></svg>`

    toggleBtns.click(function (e) {
      let target = $(e.target)
      let dropdownSelector = target.data('toggle')
      let dropdown = $(dropdownSelector)
      closeOtherDropdowns(dropdown)
      if (dropdown.hasClass('dds-dropdown__active')) {
        closeDropdown(dropdown, true)
      } else {
        openDropdown(dropdown)
      }
    })

    function closeOtherDropdowns(dropdown) {
      let activeExpanded = $('.dds-dropdown__active')

      activeExpanded.each(function (index, item) {
        if (dropdown.attr('id') !== $(item).attr('id')) {
          closeDropdown($(item), false)
        }
      })
    }

    function openDropdown(dropdown) {
      let dropdownContent = dropdown.children().first()
      let dropdownHeight = dropdownContent.outerHeight()

      dropdown.prev().attr('aria-expanded', true)
      dropdown.addClass('dds-dropdown__active')
      overlay.fadeIn(animationSpeed)
      dropdown.animate(
        {
          height: dropdownHeight,
        },
        animationSpeed,
      )
      dropdownContent.animate(
        {
          opacity: 1,
        },
        animationSpeed / 3,
      )
    }

    function closeDropdown(dropdown, anim) {
      let dropdownContent = dropdown.children().first()
      dropdown.prev().attr('aria-expanded', false)
      dropdown.removeClass('dds-dropdown__active')

      if (anim) {
        overlay.fadeOut(animationSpeed)
      }
      dropdown.animate(
        {
          height: 0,
        },
        animationSpeed,
      )
      dropdownContent.animate(
        {
          opacity: 0,
        },
        animationSpeed / 3,
      )
    }

    $(document).click(function (e) {
      let target = $(e.target)
      let activeExpanded = $('.dds-dropdown__active')
      const icon = $('.ddsweb-header__menu-icon')
      const iconSearch = $('.ddsweb-header__search-icon')
      const btnText = $('.ddsweb-header__menu-button-text')
      const button = $('.ddsweb-header__menu-button')
      if (!target.hasClass('ddsweb-header__overlay')) {
        return
      }

      activeExpanded.each(function (index, item) {
        closeDropdown($(item), true)
        icon.removeClass('ddsweb-header__menu-icon-active')
        icon.html(menuIcon)
        iconSearch.removeClass('ddsweb-header__search-icon-active')
        iconSearch.html(searchIcon)
        btnText.html('Meny')
        button.removeClass('ddsweb-header__menu-button-active')
      })
    })
  })
}
