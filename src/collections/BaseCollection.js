// BaseCollection.js
const BaseCollection = Backbone.Collection.extend({
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

export default BaseCollection;
