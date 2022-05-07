export function elements() {
  $(document).ready(function () {
    setTimeout(function () {
      const elementsContainer = $('[data-dds-selectors]')

      if (!elementsContainer.length) {
        return
      }

      const selectorString = elementsContainer.data('dds-selectors')
      const children = elementsContainer.children()
      const childrenCount = children.length

      let mainArray = []
      let previousElement = {
        verticalPos: 'top',
        horizontalPos: 'left',
        color: 'blue',
      }

      // Generate initial array values
      children.each(function (index, element) {
        mainArray.push({
          element: element,
          color: $(element).data('dds-color'),
          canPlace: isSelectorPresent(selectorString, element),
          placed: false,
          direction: 'left',
          height: $(element).innerHeight(),
        })
      })

      // Main loop
      for (let i = 0; i < mainArray.length; i++) {
        let item = mainArray[i]
        let prevItem = i > 0 ? mainArray[i - 1] : null
        let color = 'red'
        let number = 1
        let horPos = 'left'
        let verPos = 'top'
        let size = 'large'

        if (item.canPlace) {
          // Set color
          if (
            item.color === 'red' ||
            item.color === 'blue' ||
            item.color === 'yellow'
          ) {
            color = item.color
          } else {
            color = getColor(previousElement.color)
            previousElement.color = color
          }

          // Set horizontal direction
          if (i === 0) {
            horPos = getHorizontalPos(i + childrenCount)
          } else {
            horPos = previousElement.horizontalPos === 'left' ? 'right' : 'left'
          }

          // Set vertical direction
          if (i === 0) {
            verPos = getVerticalPos(i + childrenCount)
          } else {
            verPos = previousElement.verticalPos === 'top' ? 'bottom' : 'top'
          }

          // Set size
          if (item.height < 600) {
            size = 'small'
          }

          // set number
          number = getNumber(i + childrenCount, horPos)

          // insert image
          if (i === 0 || (prevItem !== null && !prevItem.placed)) {
            $(item.element).prepend(
              insertImage({
                color,
                type: number,
                horPos,
                verPos,
                size,
              }),
            )
            previousElement.horizontalPos = horPos
            mainArray[i].placed = true
          }
        }
      }
    }, 100)
  })

  const isSelectorPresent = (selectorString, element) => {
    const selectorStringArray = selectorString.split(',')
    const elementStringArray = $(element)[0].classList
    let found = false

    for (let i = 0; i < selectorStringArray.length; i++) {
      let selectorString = selectorStringArray[i]

      for (let j = 0; j < elementStringArray.length; j++) {
        let elementString = elementStringArray[j]

        if (selectorString === '.' + elementString) {
          found = true
          break
        }
      }
    }

    return found
  }

  const getColor = (color) => {
    if (color === 'blue') {
      return 'red'
    } else if (color === 'red') {
      return 'yellow'
    } else {
      return 'blue'
    }
  }

  const getHorizontalPos = (number) => {
    if (number % 2 === 0) {
      return 'left'
    } else {
      return 'right'
    }
  }

  const getVerticalPos = (number) => {
    if (number % 2 === 0) {
      return 'top'
    } else {
      return 'bottom'
    }
  }

  const getNumber = (number, horPos) => {
    if (number % 4 === 0) {
      return horPos === 'left' ? 7 : 7
    } else if (number % 3 === 0) {
      return horPos === 'left' ? 6 : 6
    } else if (number % 2 === 0) {
      return horPos === 'left' ? 4 : 3
    } else {
      return horPos === 'left' ? 1 : 2
    }
  }

  const insertImage = ({ color, type, horPos, verPos, size }) => {
    //language=HTML
    return String.raw`
            <img
                    class="ddsweb-element ddsweb-element--${horPos} ddsweb-element--${verPos} ddsweb-element--${type} ddsweb-element--${size}"
                    src="digdir-elements/${color}-${type}.svg" role="presentation"
                    alt="">
        `
  }
}
