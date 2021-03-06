export function headerDrawers() {
  $(document).ready(function () {
    const toggleBtns = $('button[data-toggle]')
    const animationSpeed = 400
    const overlay = $('.ddsweb-header__overlay')

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

      if (!target.hasClass('ddsweb-header__overlay')) {
        return
      }

      activeExpanded.each(function (index, item) {
        closeDropdown($(item), true)
      })
    })
  })
}
