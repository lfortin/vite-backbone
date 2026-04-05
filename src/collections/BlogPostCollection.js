// BlogPostCollection.js
import BaseCollection from "./BaseCollection.js";
import BlogPostModel from "../models/BlogPostModel.js";

const BlogPostCollection = BaseCollection.extend({
  model: BlogPostModel,
});

export default BlogPostCollection;
