// BlogPostModel.js
const BlogPostModel = Backbone.Model.extend({
  idAttribute: "slug",

  defaults: {
    slug: "",
    title: "",
    date: "",
    excerpt: "",
    content: "",
    tags: [],
  },
});

export default BlogPostModel;
