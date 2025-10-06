// AboutView.js
const AboutView = Backbone.View.extend({
  id: "about",

  tagName: "div",

  render() {
    const html = `
      <div class="container mt-4">
        <h2>About</h2>
        <p>This is a Vite + Backbone starter template using Bootstrap, Handlebars, and more.</p>
        <p>Released under the MIT-0 License.</p>
      </div>
    `;

    this.$el.html(html);
    return this;
  },
});

export default AboutView;
