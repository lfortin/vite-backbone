// tests/setup.js
import $ from "jquery";
import Backbone from "backbone";
import Handlebars from "handlebars";
global.$ = $; // Ensure jQuery is available globally if AppView uses it
global.Backbone = Backbone; // Ensure Backbone is available globally if AppView uses it
global.Handlebars = Handlebars; // Ensure Handlebars is available globally if AppView uses it

// Add root element to the DOM
document.body.innerHTML = '<div id="app"></div>';
