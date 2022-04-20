export function dropdown() {
  $(document).ready(function () {
    const dropdownToggles = $('[data-dds-toggle]')

    dropdownToggles.click(function (e) {
      const targetButton = $(e.target)
      const dropdown = targetButton.parent()

      if (dropdown.hasClass('dds-dropdown--open')) {
        closeDropdown(targetButton, dropdown)
      } else {
        openDropdown(targetButton, dropdown)
      }
    })

    $(document).click(function (e) {
      const target = $(e.target)
      if (!target.parents().hasClass('dds-dropdown')) {
        closeDropdowns()
      }
    })

    function openDropdown(targetButton, dropdown) {
      dropdown.addClass('dds-dropdown--open')
      dropdown.find('.dds-dropdown__menu').addClass('dds-dropdown__menu--open')
      targetButton.attr('aria-expanded', true)
    }

    function closeDropdown(targetButton, dropdown) {
      dropdown.removeClass('dds-dropdown--open')
      dropdown
        .find('.dds-dropdown__menu')
        .removeClass('dds-dropdown__menu--open')
      targetButton.attr('aria-expanded', false)
    }

    function closeDropdowns() {
      dropdownToggles.each(function (index, element) {
        const targetButton = $(element)
        const dropdown = targetButton.parent()
        closeDropdown(targetButton, dropdown)
      })
    }
  })
}
