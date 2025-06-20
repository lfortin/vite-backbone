// AppRouter.js
import HomeView from "../views/HomeView.js";
import AboutView from "../views/AboutView.js";
import HelpView from "../views/HelpView.js";
import { usecases } from "../data/usecases.js";

const home = new HomeView();
const about = new AboutView();
const help = new HelpView();

const AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    about: "about",
    help: "help",
    "*path": "notFound",
  },

  home() {
    home.collection.reset(usecases); // Show main use case list
  },

  about() {
    about.render();
  },

  help() {
    help.render();
  },

  notFound() {
    $("#app").html(`
      <div class="container mt-4">
        <h2 class="text-danger"><i class="bi bi-exclamation-triangle"></i> 404 Not Found</h2>
        <p>The page you requested could not be found.</p>
      </div>
    `);
  },
});

export default AppRouter;
