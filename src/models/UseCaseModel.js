// UseCaseModel.js
const UseCaseModel = Backbone.Model.extend({
  defaults: {
    title: "",
    description: "",
    link: null,
    hasCounter: false,
    counter: 0,
  },

  sync: function () {
    const xhr = Backbone.sync.apply(this, arguments);
    this._xhr = xhr;

    // optional cleanup
    xhr.always(() => {
      this._xhr = null;
    });

    return xhr;
  },

  abort: function () {
    if (!this._xhr) return;

    this._xhr.abort();
    this._xhr = null;
    this.trigger("abort");
  },
});

export default UseCaseModel;
