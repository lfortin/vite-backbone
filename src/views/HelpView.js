// HelpView.js
import { html } from "../util/tags.js";

const content = html`
  <div class="container mt-4">
    <h2>Help</h2>
    <p>
      Need help? Create an issue on the
      <a href="https://github.com/lfortin/vite-backbone" target="_blank">GitHub repo</a> or check
      the <a href="https://backbonejs.org/#Getting-started" target="_blank">Backbone.js docs</a>.
    </p>
  </div>
`;

const HelpView = Backbone.View.extend({
  id: "help",

  tagName: "div",

  render() {
    this.$el.html(content);
    return this;
  },
});

export default HelpView;
