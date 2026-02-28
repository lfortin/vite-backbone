// blogPosts.js
export const blogPosts = [
  {
    slug: "2026-02-28-getting-started-with-vite-backbone",
    date: "2026-02-28",
    title: "Getting Started with Vite + Backbone",
    excerpt:
      "Learn how this starter template wires together Vite, Backbone, Handlebars, jQuery, and Bootstrap to build small SPAs.",
    content: `
      <p>
        This starter template is designed to give you a modern build setup for
        classic Backbone applications. Vite handles fast bundling and HMR,
        while Backbone keeps your app structure simple and understandable.
      </p>
      <p>
        The core ideas are:
      </p>
      <ul>
        <li>Use <strong>Backbone.Router</strong> for hash-based navigation.</li>
        <li>Render views with <strong>Backbone.View</strong> and <strong>Handlebars</strong> templates.</li>
        <li>Style everything quickly with <strong>Bootstrap 5</strong> and <strong>Bootstrap Icons</strong>.</li>
      </ul>
      <p>
        You can extend this blog with more posts, or replace it with your own
        content loaded from an API.
      </p>
    `,
    tags: ["vite", "backbone", "starter"],
  },
  {
    slug: "2026-02-20-structuring-views-and-templates",
    date: "2026-02-20",
    title: "Structuring Views and Templates",
    excerpt:
      "A quick overview of how to keep your Backbone views small and reusable, while using Handlebars for layout.",
    content: `
      <p>
        In this starter, each page is represented by a dedicated
        <code>Backbone.View</code> class under <code>src/views</code>.
        Handlebars templates are defined as template strings and compiled once.
      </p>
      <p>
        This separation makes it easy to:
      </p>
      <ul>
        <li>Reuse views in different routes.</li>
        <li>Swap templates without changing view logic.</li>
        <li>Test view behavior in isolation.</li>
      </ul>
    `,
    tags: ["views", "handlebars"],
  },
  {
    slug: "2026-02-10-client-side-routing-with-backbone",
    date: "2026-02-10",
    title: "Client-Side Routing with Backbone.Router",
    excerpt:
      "Use Backbone.Router to keep your navigation in sync with the URL, including simple blog routes.",
    content: `
      <p>
        Backbone.Router gives you a light-weight way to handle navigation in
        small single-page applications. Routes map URL fragments to handler
        functions that show or hide views.
      </p>
      <p>
        In this example blog, routes such as
        <code>#blog</code> and <code>#blog/:slug</code> are used to show the
        blog index and individual posts.
      </p>
    `,
    tags: ["router", "spa"],
  },
  {
    slug: "2026-02-05-working-with-backbone-collections",
    date: "2026-02-05",
    title: "Working with Backbone.Collections",
    excerpt: "Learn how collections help you manage groups of models and keep your UI in sync.",
    content: `
      <p>
        Collections are ordered sets of models with helpful APIs for filtering,
        sorting, and syncing with a server.
      </p>
      <p>
        In this starter, both the home view and the blog use collections to
        manage lists of items.
      </p>
    `,
    tags: ["collections"],
  },
  {
    slug: "2026-02-01-rendering-with-handlebars",
    date: "2026-02-01",
    title: "Rendering with Handlebars",
    excerpt: "Handlebars keeps your templates declarative while letting Backbone handle the logic.",
    content: `
      <p>
        Handlebars templates in this project are defined as template strings
        and compiled once per view.
      </p>
      <p>
        Your views simply pass JSON data to the template and inject the
        resulting HTML into the DOM.
      </p>
    `,
    tags: ["handlebars", "templating"],
  },
  {
    slug: "2026-01-25-bootstrap-layout-basics",
    date: "2026-01-25",
    title: "Bootstrap Layout Basics",
    excerpt: "Use Bootstrap’s grid and utility classes to quickly build responsive layouts.",
    content: `
      <p>
        Both the home and blog pages use Bootstrap's grid system to stay
        responsive with minimal custom CSS.
      </p>
      <p>
        You can extend these layouts with more components like alerts, badges,
        and navs as needed.
      </p>
    `,
    tags: ["bootstrap", "layout"],
  },
  {
    slug: "2026-01-15-testing-with-vitest",
    date: "2026-01-15",
    title: "Testing with Vitest",
    excerpt: "Vitest makes it easy to test Backbone models, collections, and simple views.",
    content: `
      <p>
        This starter includes a minimal Vitest setup so you can add unit tests
        as your app grows.
      </p>
      <p>
        Start with model and collection tests, then add view tests for critical
        UI behavior.
      </p>
    `,
    tags: ["testing", "vitest"],
  },
];
