import jQuery from 'jquery'

// Import component javascript modules
import {dropdown} from "./_dropdown";
import {headerDrawers} from "./_header-drawers";

// Set jQuery globally
window.$ = window.jQuery = jQuery

// Run ES6 modules
dropdown();
headerDrawers();
