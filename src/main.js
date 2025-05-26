import "./globals"; // Sets globals for jQuery, Underscore, Backbone, and Handlebars
import AppRouter from "./routers/AppRouter.js";

new AppRouter(); // Initialize router
Backbone.history.start(); // Enable routing

// DOM Ready
$(function () {
  // Initialize custom jQuery plugins or behaviors
});
