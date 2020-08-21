'use strict';

function FakeStorage() {
  this.clear();
}

FakeStorage.prototype = {
  key: function key(index) {
    // sanitise index as int
    index = parseInt(index); // return early if index isn't a positive number or larger than length

    if (isNaN(index) || index < 0 || index >= this.length) {
      return null;
    } // loop through data object until at nth key


    var i = 0;

    for (var key in this._data) {
      if (this._data.hasOwnProperty(key)) {
        if (i === index) {
          return key;
        }

        i++;
      }
    } // otherwise return null


    return null;
  },
  getItem: function getItem(key) {
    // only get if there's something to get
    return this._data.hasOwnProperty(key) ? this._data[key] : null;
  },
  setItem: function setItem(key, value) {
    // if we're adding a new item, incriment the length
    if (!this._data.hasOwnProperty(key)) {
      this.length++;
    } // always store the value as a string


    this._data[key] = value.toString();
  },
  removeItem: function removeItem(key) {
    // only remove if there's something to remove
    if (this._data.hasOwnProperty(key)) {
      delete this._data[key];
      this.length--;
    }
  },
  clear: function clear() {
    this._data = {};
    this.length = 0;
  }
};

module.exports = FakeStorage;
