// vite-backbone
// Starter template for Backbone.js apps using Vite, Bootstrap 5, Handlebars, jQuery, and Underscore.
// https://github.com/lfortin/vite-backbone
//
// Copyright (c) 2025 Laurent Fortin
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the “Software”), to deal in the
// Software without restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
//
// THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
// PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
// OR OTHER DEALINGS IN THE SOFTWARE.

import "./globals.js"; // Sets globals for jQuery, Underscore, Backbone, and Handlebars
import AppRouter from "./routers/AppRouter.js";

new AppRouter(); // Initialize router
Backbone.history.start(); // Enable routing

// DOM Ready
$(function () {
  // Initialize custom jQuery plugins or behaviors
});
