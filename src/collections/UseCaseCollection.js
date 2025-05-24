// UseCaseCollection.js
import UseCaseModel from '../models/UseCaseModel.js';

const UseCaseCollection = Backbone.Collection.extend({
  model: UseCaseModel,
});

export default UseCaseCollection;
