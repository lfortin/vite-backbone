// UseCaseModel.js
const UseCaseModel = Backbone.Model.extend({
  defaults: {
    title: "",
    description: "",
    link: null,
    hasCounter: false,
    counter: 0,
  },
});

export default UseCaseModel;
