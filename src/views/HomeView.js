// HomeView.js
import UseCaseCollection from "../collections/UseCaseCollection.js";

const usecasesTemplate = `
<div class="container mt-4">
  <h2 class="mb-4">vite-backbone template: Use Cases</h2>
  <div class="row">
    {{#each usecases}}
      <div class="col-md-4 mb-3">
        <div class="card h-100 shadow-sm" data-model-id="{{id}}">
          <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">{{description}}</p>
            {{#if link}}
              <a href="{{link}}" class="btn btn-primary" target="_blank">Learn More</a>
            {{/if}}
            {{#if hasCounter}}
              <a href="#" class="btn btn-success button-counter">count is {{counter}}</a>
            {{/if}}
          </div>
        </div>
      </div>
    {{/each}}
  </div>
</div>
`;

const HomeView = Backbone.View.extend({
  el: "#app",

  events: {
    "click a.button-counter": "onCounterClick",
  },

  onCounterClick(event) {
    event.preventDefault();

    const cardId = $(event.target).closest(".card").attr("data-model-id");
    const model = this.collection.get(cardId);
    model.set("counter", model.get("counter") + 1);
  },

  initialize() {
    // Initialize collection
    this.collection = new UseCaseCollection();

    this.listenTo(this.collection, "update reset change", this.render);
  },

  template: Handlebars.compile(usecasesTemplate),

  render() {
    const html = this.template({
      usecases: this.collection.toJSON(),
    });

    this.$el.html(html);
  },
});

export default HomeView;
