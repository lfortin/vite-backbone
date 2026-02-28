// BlogPostCollection.js
import BlogPostModel from "../models/BlogPostModel.js";

const BlogPostCollection = Backbone.Collection.extend({
  model: BlogPostModel,
});

export default BlogPostCollection;
