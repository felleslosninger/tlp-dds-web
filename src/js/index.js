import jQuery from 'jquery'

// Import component javascript modules
import { dropdown } from './_dropdown'
import { headerDrawers } from './_header-drawers'
import { elements } from './elements'
import { elementsInit } from './elements-init'

// Set jQuery globally
window.$ = window.jQuery = jQuery

// Run ES6 modules
dropdown()
headerDrawers()
elements()
elementsInit()
