// BlogPostView.js
import BlogPostCollection from "../collections/BlogPostCollection.js";

const blogPostTemplate = `
<div class="container mt-4 blog-post">
  <div class="row">
    <div class="col-lg-8">
      {{#if post}}
        <article>
          <h1 class="mb-1">{{post.title}}</h1>
          <p class="text-muted small mb-3">{{post.date}}</p>

          <div class="blog-content">
            {{{post.content}}}
          </div>

          {{#if post.tags.length}}
            <p class="mt-3">
              <strong>Tags:</strong>
              {{#each post.tags}}
                <span class="badge bg-secondary me-1">{{this}}</span>
              {{/each}}
            </p>
          {{/if}}

          <p class="mt-4">
            <a href="#blog" class="btn btn-outline-primary">
              &laquo; Back to blog
            </a>
          </p>
        </article>
      {{else}}
        <p>That blog post could not be found.</p>
        <p>
          <a href="#blog" class="btn btn-outline-primary">
            &laquo; Back to blog
          </a>
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
    this.collection = new BlogPostCollection();
    this.currentPost = null;
  },

  showBySlug(slug) {
    if (!this.collection) return false;

    const model = this.collection.get(slug);

    if (!model) {
      this.currentPost = null;
      this.render();
      return false;
    }

    this.currentPost = model;
    this.render();
    return true;
  },

  template: Handlebars.compile(blogPostTemplate),

  render() {
    const html = this.template({
      post: this.currentPost ? this.currentPost.toJSON() : null,
    });

    this.$el.html(html);
    return this;
  },
});

export default BlogPostView;
