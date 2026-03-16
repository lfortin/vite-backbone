// BlogPostView.js
import BlogPostModel from "../models/BlogPostModel.js";
import { html } from "../util/tags.js";

const blogPostTemplate = html`
  <div class="container mt-4 blog-post">
    <div class="row">
      <div class="col-lg-8">
        {{#if post}}
        <article>
          <h1 class="mb-1">{{post.title}}</h1>
          <p class="text-muted small mb-3">{{post.date}}</p>

          <div class="blog-content">{{{post.content}}}</div>

          {{#if post.tags.length}}
          <p class="mt-3">
            <strong>Tags:</strong>
            {{#each post.tags}}
            <span class="badge bg-secondary me-1">{{this}}</span>
            {{/each}}
          </p>
          {{/if}}

          <p class="mt-4">
            <a href="#blog" class="btn btn-outline-primary"> &laquo; Back to blog </a>
          </p>
        </article>
        {{else}}
        <p>That blog post could not be found.</p>
        <p>
          <a href="#blog" class="btn btn-outline-primary"> &laquo; Back to blog </a>
        </p>
        {{/if}}
      </div>
    </div>
  </div>
`;

const BlogPostView = Backbone.View.extend({
  id: "blog-post",

  tagName: "div",

  initialize() {
    this.model = new BlogPostModel();
    this.listenTo(this.model, "change", this.render);
  },

  template: Handlebars.compile(blogPostTemplate),

  render() {
    const html = this.template({
      post: this.model ? this.model.toJSON() : null,
    });

    this.$el.html(html);
    return this;
  },
});

export default BlogPostView;
