export function elements() {
  ;(function (window, document, undefined) {
    window.ddsElements = function ({
      parentContainerID,
      selectors,
      tenColSelectors,
      colorRedSelectors,
      colorYellowSelectors,
      colorBlueSelectors,
    }) {
      const parentContainer = $('#' + parentContainerID)

      if (!parentContainer.length) {
        return
      }

      const children = parentContainer.children()
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
          color: getColor(element),
          canPlace: isSelectorPresent(selectors, element),
          placed: false,
          direction: 'left',
          height: $(element).innerHeight(),
          column: getColumns(element),
        })
      })

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
            color = getNextColor(previousElement.color)
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
              insertElement({
                color,
                type: number,
                horPos,
                verPos,
                size,
                column: item.column,
              }),
            )
            previousElement.horizontalPos = horPos
            mainArray[i].placed = true
          }
        }
      }

      function getColumns(element) {
        const tenColArray = tenColSelectors.split(',')
        const elementClassList = element.classList
        let column = 12

        elementClassList.forEach(function (item, index) {
          if (arrayContains('.' + item, tenColArray)) {
            column = 10
          }
        })
        return column
      }

      function arrayContains(string, arr) {
        return arr.indexOf(string) > -1
      }

      function getColor(element) {
        const redClassList = colorRedSelectors.split(',')
        const blueClassList = colorBlueSelectors.split(',')
        const yellowClassList = colorYellowSelectors.split(',')

        const elementClassList = element.classList
        let color = null

        elementClassList.forEach(function (item, index) {
          if (arrayContains('.' + item, redClassList)) {
            color = 'red'
          }
          if (arrayContains('.' + item, blueClassList)) {
            color = 'blue'
          }
          if (arrayContains('.' + item, yellowClassList)) {
            color = 'yellow'
          }
        })

        return color
      }
    }
  })(window, document)

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

  const getNextColor = (color) => {
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

  const insertElement = ({ color, type, horPos, verPos, size, column }) => {
    return String.raw`<div class="ddsweb-element ddsweb-element--${color} ddsweb-element--${horPos} ddsweb-element--${verPos} ddsweb-element--${type} ddsweb-element--${size} ddsweb-element--${column}"></div>`
  }
}
