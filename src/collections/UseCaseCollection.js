// UseCaseCollection.js
import BaseCollection from "./BaseCollection.js";
import UseCaseModel from "../models/UseCaseModel.js";

const UseCaseCollection = BaseCollection.extend({
  model: UseCaseModel,
});

export default UseCaseCollection;
