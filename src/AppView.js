// AppView.js
import UseCaseCollection from './UseCaseCollection.js';

const usecasesTemplate = `
<div class="container mt-4">
  <h2 class="mb-4">vite-backbone template: Use Cases</h2>
  <div class="row">
    {{#each usecases}}
      <div class="col-md-4 mb-3">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">{{description}}</p>
            {{#if link}}
              <a href="{{link}}" class="btn btn-primary" target="_blank">Learn More</a>
            {{/if}}
          </div>
        </div>
      </div>
    {{/each}}
  </div>
</div>
`;

const AppView = Backbone.View.extend({
  el: '#app',

  initialize() {
    // Initialize collection with data
    this.collection = new UseCaseCollection([
      {
        title: 'Component-Based Views',
        description: 'Backbone lets you structure your app into small reusable views.',
        link: 'https://backbonejs.org/#View',
      },
      {
        title: 'Logic + Layout Separation',
        description: 'Handlebars keeps your HTML clean and logic-free.',
      },
      {
        title: 'Quick Styling',
        description: 'Bootstrap helps rapidly layout components with minimal CSS.',
        link: 'https://getbootstrap.com/docs/5.3/components/card/',
      },
      {
        title: 'Data Binding & Events',
        description: 'Backbone’s models and collections support change events and syncing.',
        link: 'https://backbonejs.org/#Model',
      },
      {
        title: 'Client-Side Routing',
        description: 'Use Backbone.Router to manage application state and navigation.',
        link: 'https://backbonejs.org/#Router',
      },
      {
        title: 'Dynamic Template Rendering',
        description: 'Update views easily by re-rendering Handlebars templates with new data.',
      },
      {
        title: 'Fast Dev with Vite',
        description: 'Vite enables blazing fast HMR and optimized production builds.',
        link: 'https://vitejs.dev/',
      },
      {
        title: 'Extend with jQuery Plugins',
        description: 'Seamlessly integrate jQuery plugins into Backbone views.',
      },
      {
        title: 'Single Page App Foundation',
        description: 'Backbone is ideal for small to medium SPAs with clear structure.',
      },
    ]);
  },

  render() {
    const template = Handlebars.compile(usecasesTemplate);
    const html = template({
      usecases: this.collection.toJSON(),
    });

    this.$el.html(html);
  },
});

const instance = new AppView();
export default instance;
