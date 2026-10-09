// vite-backbone
// Starter template for Backbone.js apps using Vite, Bootstrap 5, Handlebars, jQuery, and Underscore.
// https://github.com/lfortin/vite-backbone
//
// Copyright (c) 2025-2026 Laurent Fortin
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

import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";
import "./styles/style.css";

// Inline SVG Assets
const viteLogo = `
  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 256 257" class="logo vite-logo">
    <path fill="#41D1FF" d="M255.808 37.863L134.587 252.676c-2.473 4.38-8.7 4.38-11.174 0L2.192 37.863c-2.9-5.132 1.341-11.458 7.151-10.743l119.827 14.72a6.452 6.452 0 0 0 1.58 0l117.907-14.72c5.81-.715 10.051 5.611 7.151 10.743"/>
    <path fill="#BD34FE" d="M189.23 7.842l-64.838 114.93c-2.022 3.585-7.228 3.585-9.25 0L49.882 7.842C47.387 3.419 51.107-1.8 56.035-1.127l63.504 8.7a6.46 6.46 0 0 0 1.764 0l61.992-8.7c4.928-.673 8.648 4.546 6.153 8.969"/>
  </svg>
`;

const backboneLogo = `
  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 722 897" class="logo backbone-logo" role="img" aria-label="Backbone.js">
    <title>Backbone.js</title>
    <path fill="#002A41" d="M0 0v485l361 205.785V550.903L119.496 413.235V197L361 334.667V205.785z"/>
    <path fill="#0071B5" d="M722 0v485L361 690.785V550.903l241.504-137.667V197L361 334.667V205.785z"/>
    <path fill="#0071B5" d="M0 896.785v-485L361 206v139.882L119.496 483.549v205.236L361 551.118V691z"/>
    <path fill="#002A41" d="M722 896.785v-485L361 206v139.882l241.504 137.667v205.236L361 551.118V691z"/>
  </svg>
`;

class AppView extends Backbone.View {
  count = 0;

  constructor(options) {
    super({
      el: "#app",
      ...options,
    });
  }

  events() {
    return {
      "click #counter-btn": "incrementCounter",
    };
  }

  incrementCounter(event) {
    event.preventDefault();
    this.count += 1;
    this.$("#counter-btn").text(`count is ${this.count}`);
  }

  render() {
    const template = _.template(`
      <div class="starter-card">
        <div class="logo-group">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <%= viteLogo %>
          </a>
          <span class="plus">+</span>
          <a href="https://backbonejs.org" target="_blank" rel="noopener noreferrer">
            <%= backboneLogo %>
          </a>
        </div>

        <h1>Vite + Backbone</h1>

        <div class="card">
          <button id="counter-btn" type="button">
            count is <%= count %>
          </button>
          <p>Edit <code>src/main-basic.js</code> and save to test HMR</p>
        </div>

        <p class="read-the-docs">
          Click on the Vite and Backbone logos to learn more
        </p>
      </div>
    `);

    this.$el.html(
      template({
        viteLogo,
        backboneLogo,
        count: this.count,
      }),
    );

    return this;
  }
}

$(() => {
  const app = new AppView();
  app.render();
});
