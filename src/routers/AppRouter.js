// AppRouter.js
import HomeView from "../views/HomeView.js";
import AboutView from "../views/AboutView.js";
import HelpView from "../views/HelpView.js";
import NotFoundView from "../views/NotFoundView.js";
import BlogIndexView from "../views/BlogIndexView.js";
import BlogPostView from "../views/BlogPostView.js";
import { usecases } from "../data/usecases.js";
import { blogPosts } from "../data/blogPosts.js";

const home = new HomeView();
const about = new AboutView();
const help = new HelpView();
const blogIndexView = new BlogIndexView();
const blogPostView = new BlogPostView();
const notFound = new NotFoundView();

const AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    about: "about",
    help: "help",
    blog: "blogIndex",
    "blog/:slug": "blogPost",
    "*path": "notFound",
  },

  initialize() {
    // insert views into the DOM
    $("#app").empty();
    $("#app").append(home.$el);
    $("#app").append(about.$el);
    $("#app").append(help.$el);
    $("#app").append(blogIndexView.$el);
    $("#app").append(blogPostView.$el);
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

  blogIndex() {
    blogIndexView.collection.reset(blogPosts);
    blogIndexView.setPage(1);
    this._showView(blogIndexView);
  },

  blogPost(slug) {
    blogPostView.collection.reset(blogPosts);
    const found = blogPostView.showBySlug(slug);

    if (!found) {
      this.notFound();
      return;
    }

    this._showView(blogPostView);
  },

  notFound() {
    this._showView(notFound.render());
  },
});

export default AppRouter;
