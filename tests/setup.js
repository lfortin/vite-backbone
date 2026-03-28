// setup.js
import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";
import Handlebars from "handlebars";
window.$ = $;
window.jQuery = $;
window._ = _;
window.Backbone = Backbone;
window.Handlebars = Handlebars;

// Add root element to the DOM
document.body.innerHTML = '<div id="app"></div>';
