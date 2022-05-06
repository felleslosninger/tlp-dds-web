export function elements() {
  $(document).ready(function () {
    $('.ddsweb-section').prepend(test())

    const dataSelectors = $('[data-dds-selectors]')

    if (!dataSelectors.length) {
      return
    }

    const selectors = dataSelectors.data('dds-selectors')
    const selectorElements = $(selectors)
    let mainArray = []

    selectorElements.each(function (index, element) {
      let color = $(element).data('dds-color')
      mainArray.push({
        element: element,
        color: color,
      })
    })

    console.log(mainArray)
  })

  const test = () => {
    //language=HTML
    return String.raw`
            <img class="ddsweb-section__element" src="digdir-elements/Type=1, Color=Blue.svg" alt="">
        `
  }
}
