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

      // Stop running script if parent selector does not exist
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

      // Main loop
      for (let i = 0; i < mainArray.length; i++) {
        let item = mainArray[i]
        let prevItem = i > 0 ? mainArray[i - 1] : null
        let color = 'red'
        let variant = 1
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

          // set variant
          variant = getVariantNumber(i + childrenCount, horPos, item.column)

          // insert image
          if (i === 0 || (prevItem !== null && !prevItem.placed)) {
            $(item.element).prepend(
              insertElement({
                color,
                variant,
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

      // Returns the column based on item config
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

      // Check if an array contains string
      function arrayContains(string, arr) {
        return arr.indexOf(string) > -1
      }

      // Returns color string based on configuration
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

  // Checks if selectorString has a class inside element
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

  // Get the next color from previous color
  const getNextColor = (color) => {
    if (color === 'blue') {
      return 'red'
    } else if (color === 'red') {
      return 'yellow'
    } else {
      return 'blue'
    }
  }

  // Get horizontal string direction based on a number
  const getHorizontalPos = (number) => {
    if (number % 2 === 0) {
      return 'left'
    } else {
      return 'right'
    }
  }

  // Get vertical string direction based on a number
  const getVerticalPos = (number) => {
    if (number % 2 === 0) {
      return 'top'
    } else {
      return 'bottom'
    }
  }

  // Get the variant to be used based on config
  const getVariantNumber = (number, horPos, column) => {
    if (column === 12) {
      if (number % 4 === 0) {
        return horPos === 'left' ? 6 : 6
      } else {
        return horPos === 'left' ? 5 : 5
      }
    } else {
      if (number % 2 === 0) {
        return horPos === 'left' ? 4 : 2
      } else {
        return horPos === 'left' ? 4 : 2
      }
    }
  }

  // Returns SVG based on variant
  const getSvgByVariant = (variant) => {
    if (variant === 1 || variant === 2) {
      //language=HTML
      return String.raw`
                <svg viewBox="0 0 618 376" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="183.08" cy="188.079" rx="183.08" ry="183.079"/>
                    <path d="M528.039 0L617.429 283.756L333.676 373.142L244.286 89.3859L528.039 0Z"/>
                </svg>
            `
    } else if (variant === 3 || variant === 4) {
      //language=HTML
      return String.raw`
                <svg viewBox="0 0 597 364" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="419.063" cy="186.03" rx="177.063" ry="177.03"/>
                    <path d="M272.508 0L354.156 272.498L81.6473 354.119L-0.00112268 81.6215L272.508 0Z"/>
                </svg>
            `
    } else if (variant === 5) {
      //language=HTML
      return String.raw`
                <svg viewBox="0 0 376 618" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="188.079" cy="434.92" rx="183.08" ry="183.079" transform="rotate(-90 188.079 434.92)"/>
                    <path d="M0 89.9609L283.756 0.57064L373.142 284.324L89.3859 373.714L0 89.9609Z"/>
                </svg>
            `
    } else if (variant === 6) {
      //language=HTML
      return String.raw`
                <svg viewBox="0 0 376 617" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="183.079" cy="183.92" rx="183.08" ry="183.079" transform="rotate(-90 183.079 183.92)"/>
                    <path d="M283.75 617L0.000679314 527.589L89.414 243.844L373.163 333.256L283.75 617Z"/>
                </svg>
            `
    }
  }

  // Insert Profile element into DOM
  const insertElement = ({ color, variant, horPos, verPos, size, column }) => {
    //language=HTML
    return String.raw`
            <div class="ddsweb-element ddsweb-element--${color} ddsweb-element--${horPos} ddsweb-element--${verPos} ddsweb-element--${variant} ddsweb-element--${size} ddsweb-element--${column}-col">
                ${getSvgByVariant(variant)}
            </div>
        `
  }
}
