// AppRouter.js
import AppView from "./AppView.js";
import { usecases } from "./data/usecases.js";

const AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    about: "about",
    help: "help",
  },

  home() {
    AppView.collection.reset(usecases); // Show main use case list
  },

  about() {
    $("#app").html(`
      <div class="container mt-4">
        <h2>About</h2>
        <p>This is a Vite + Backbone starter template using Bootstrap, Handlebars, and more.</p>
        <p>Released under the MIT License.</p>
      </div>
    `);
  },

  help() {
    $("#app").html(`
      <div class="container mt-4">
        <h2>Help</h2>
        <p>Need help? Create an issue on the <a href="https://github.com/lfortin/vite-backbone" target="_blank">GitHub repo</a> or check the <a href="https://backbonejs.org/#Getting-started" target="_blank">Backbone.js docs</a>.</p>
      </div>
    `);
  },
});

const router = new AppRouter();
export default router;
