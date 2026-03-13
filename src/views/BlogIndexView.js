// BlogIndexView.js
import BlogPostCollection from "../collections/BlogPostCollection.js";
import { html } from "../util/tags.js";

const PAGE_SIZE = 5;

const blogIndexTemplate = html`
  <div class="container mt-4 blog-list">
    <div class="row">
      <div class="col-lg-8">
        <h2 class="mb-4">Blog</h2>

        {{#if posts.length}} {{#each posts}}
        <article class="card mb-3 shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-1">
              <a href="#blog/{{slug}}" class="blog-post-link text-decoration-none"> {{title}} </a>
            </h5>
            <p class="text-muted small mb-2">{{date}}</p>
            <p class="card-text mb-0">{{excerpt}}</p>
          </div>
        </article>
        {{/each}} {{else}}
        <p>No blog posts available yet.</p>
        {{/if}} {{#if hasPagination}}
        <nav aria-label="Blog pagination">
          <ul class="pagination justify-content-center mt-4">
            <li class="page-item {{#if isFirstPage}}disabled{{/if}}">
              <a class="page-link" href="#blog/page/{{prevPage}}" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>

            {{#each pages}}
            <li class="page-item {{#if isCurrent}}active{{/if}}">
              <a class="page-link" href="#blog/page/{{number}}">{{number}}</a>
            </li>
            {{/each}}

            <li class="page-item {{#if isLastPage}}disabled{{/if}}">
              <a class="page-link" href="#blog/page/{{nextPage}}" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        {{/if}}
      </div>
    </div>
  </div>
`;

const BlogIndexView = Backbone.View.extend({
  id: "blog",

  tagName: "div",

  initialize() {
    this.collection = new BlogPostCollection();
    this.currentPage = 1;
    this.listenTo(this.collection, "update reset", this.render);
  },

  setPage(page) {
    const totalPages = this._getTotalPages();
    const nextPage = Math.min(Math.max(page, 1), totalPages || 1);

    this.currentPage = nextPage;
    this.render();
  },

  _getTotalPages() {
    if (!this.collection) return 1;

    const totalPosts = this.collection.length;
    return totalPosts > 0 ? Math.ceil(totalPosts / PAGE_SIZE) : 1;
  },

  template: Handlebars.compile(blogIndexTemplate),

  render() {
    const totalPages = this._getTotalPages();
    const currentPage = this.currentPage || 1;

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const pageModels = this.collection ? this.collection.slice(startIndex, endIndex) : [];

    const posts = pageModels.map((model) => model.toJSON());

    const pages = [];
    for (let i = 1; i <= totalPages; i += 1) {
      pages.push({
        number: i,
        isCurrent: i === currentPage,
      });
    }

    const html = this.template({
      posts,
      hasPagination: totalPages > 1,
      pages,
      isFirstPage: currentPage === 1,
      isLastPage: currentPage === totalPages,
      prevPage: currentPage - 1,
      nextPage: currentPage + 1,
    });

    this.$el.html(html);
    return this;
  },
});

export default BlogIndexView;
