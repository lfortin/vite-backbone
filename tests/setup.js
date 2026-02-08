// setup.js
import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";
import Handlebars from "handlebars";
global.$ = $;
global.jQuery = $;
global._ = _;
global.Backbone = Backbone;
global.Handlebars = Handlebars;

// Add root element to the DOM
document.body.innerHTML = '<div id="app"></div>';
