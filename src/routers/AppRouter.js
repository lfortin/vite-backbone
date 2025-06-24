// AppRouter.js
import HomeView from "../views/HomeView.js";
import AboutView from "../views/AboutView.js";
import HelpView from "../views/HelpView.js";
import NotFoundView from "../views/NotFoundView.js";
import { usecases } from "../data/usecases.js";

const home = new HomeView();
const about = new AboutView();
const help = new HelpView();
const notFound = new NotFoundView();

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
    notFound.render();
  },
});

export default AppRouter;
