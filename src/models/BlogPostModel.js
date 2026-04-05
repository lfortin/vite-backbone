// BlogPostModel.js
import BaseModel from "./BaseModel.js";

const BlogPostModel = BaseModel.extend({
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
