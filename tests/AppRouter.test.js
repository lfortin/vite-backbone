// AppRouter.test.js
import AppRouter from "../src/routers/AppRouter.js";
import { usecases } from "../src/data/usecases.js";
import { blogPosts } from "../src/data/blogPosts.js";

describe("AppRouter", () => {
  let router;

  beforeEach(() => {
    // Ensure the app container is clean before each test
    $("#app").empty();
    router = new AppRouter();
  });

  it("initializes and appends all views into #app", () => {
    const childIds = $("#app > div")
      .map((_, el) => el.id)
      .get();

    expect(childIds).toHaveLength(6);
    expect(childIds).toEqual(
      expect.arrayContaining(["home", "about", "help", "blog", "blog-post", "not-found"]),
    );
  });

  it("home() shows the home view and populates it with use cases", () => {
    router.home();

    const cards = $("#home .card");
    expect(cards.length).toBe(usecases.length);

    // Other views should be hidden
    expect($("#about").css("display")).toBe("none");
    expect($("#help").css("display")).toBe("none");
    expect($("#blog").css("display")).toBe("none");
    expect($("#blog-post").css("display")).toBe("none");
    expect($("#not-found").css("display")).toBe("none");
  });

  it("about() shows the about view", () => {
    router.about();

    expect($("#about").css("display")).not.toBe("none");
    expect($("#home").css("display")).toBe("none");
  });

  it("help() shows the help view", () => {
    router.help();

    expect($("#help").css("display")).not.toBe("none");
    expect($("#home").css("display")).toBe("none");
  });

  it("blogIndex() shows the blog index with first page posts", () => {
    router.blogIndex();

    const cards = $("#blog article.card");
    const pageSize = 5;

    expect(cards.length).toBe(Math.min(pageSize, blogPosts.length));
    expect($("#blog").css("display")).not.toBe("none");
    expect($("#home").css("display")).toBe("none");
  });

  it("blogIndex(page) clamps page number within valid range", () => {
    router.blogIndex(2);

    const pageSize = 5;
    const expectedOnSecondPage = Math.max(blogPosts.length - pageSize, 0);
    const cards = $("#blog article.card");

    expect(cards.length).toBe(expectedOnSecondPage);
  });

  it("blogPost(slug) shows a blog post when it exists", () => {
    const slug = blogPosts[0].slug;

    router.blogPost(slug);

    const headingText = $("#blog-post h1").text();
    expect(headingText).toContain(blogPosts[0].title);
    expect($("#blog-post").css("display")).not.toBe("none");
    expect($("#not-found").css("display")).toBe("none");
  });

  it("blogPost(slug) falls back to notFound when post is missing", () => {
    router.blogPost("non-existent-slug");

    expect($("#not-found").css("display")).not.toBe("none");
    expect($("#blog-post").css("display")).toBe("none");
    expect($("#not-found").text()).toContain("404 Not Found");
  });

  it("notFound() shows the not-found view", () => {
    router.notFound();

    expect($("#not-found").css("display")).not.toBe("none");
    expect($("#home").css("display")).toBe("none");
  });
});
