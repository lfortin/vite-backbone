// tests/setup.js
import $ from "jquery";
import Backbone from "backbone";
import Handlebars from "handlebars";
global.$ = $; // Ensure $ is available globally
global.jQuery = $; // Ensure jQuery is available globally
global.Backbone = Backbone; // Ensure Backbone is available globally
global.Handlebars = Handlebars; // Ensure Handlebars is available globally

// Add root element to the DOM
document.body.innerHTML = '<div id="app"></div>';
