// UseCaseModel.js
import BaseModel from "./BaseModel.js";

const UseCaseModel = BaseModel.extend({
  defaults: {
    title: "",
    description: "",
    link: null,
    hasCounter: false,
    counter: 0,
  },
});

export default UseCaseModel;
