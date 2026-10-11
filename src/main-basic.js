import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";
import "./styles/style-basic.css";

// Inline SVG Assets
const viteLogo = `<img src="/vite.svg" class="logo vite-logo" alt="Vite logo" />`;

const backboneLogo = `
  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 722 897" class="logo backbone-logo" role="img" aria-label="Backbone.js">
    <title>Backbone.js</title>
    <path fill="#002A41" d="M0 0v485l361 205.785V550.903L119.496 413.235V197L361 334.667V205.785z"/>
    <path fill="#0071B5" d="M722 0v485L361 690.785V550.903l241.504-137.667V197L361 334.667V205.785z"/>
    <path fill="#0071B5" d="M0 896.785v-485L361 206v139.882L119.496 483.549v205.236L361 551.118V691z"/>
    <path fill="#002A41" d="M722 896.785v-485L361 206v139.882l241.504 137.667v205.236L361 551.118V691z"/>
  </svg>
`;

const AppView = Backbone.View.extend({
  el: "#app",

  count: 0,

  events() {
    return {
      "click #counter-btn": "incrementCounter",
    };
  },

  incrementCounter(event) {
    event.preventDefault();
    this.count += 1;
    this.$("#counter-btn").text(`count is ${this.count}`);
  },

  template: _.template(`
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
  `),

  render() {
    this.$el.html(
      this.template({
        viteLogo,
        backboneLogo,
        count: this.count,
      }),
    );

    return this;
  },
});

$(() => {
  const app = new AppView();
  app.render();
});
