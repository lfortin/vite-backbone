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

  initialize() {
    // insert views into the DOM
    $("#app").empty();
    $("#app").append(home.$el);
    $("#app").append(about.$el);
    $("#app").append(help.$el);
    $("#app").append(notFound.$el);
  },

  _showView(view) {
    if (!view?.$el) {
      return;
    }
    $("#app > div").not(view.el).hide();
    view.$el.show();
  },

  home() {
    home.collection.reset(usecases); // Show main use case list
    this._showView(home);
  },

  about() {
    this._showView(about.render());
  },

  help() {
    this._showView(help.render());
  },

  notFound() {
    this._showView(notFound.render());
  },
});

export default AppRouter;
