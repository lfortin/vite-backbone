// NotFoundView.js
const NotFoundView = Backbone.View.extend({
  el: "#app",

  render() {
    const html = `
      <div class="container mt-4">
        <h2 class="text-danger"><i class="bi bi-exclamation-triangle"></i> 404 Not Found</h2>
        <p>The page you requested could not be found.</p>
      </div>
    `;

    this.$el.html(html);
    return this;
  },
});

export default NotFoundView;
