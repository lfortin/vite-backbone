// UseCaseCollection.js
import UseCaseModel from './UseCaseModel.js';

const UseCaseCollection = Backbone.Collection.extend({
  model: UseCaseModel,
});

export default UseCaseCollection;
