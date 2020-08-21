function FakeStorage() {
  this.clear();
}

FakeStorage.prototype = {
  key(index) {
    // sanitise index as int
    index = parseInt(index);
    // return early if index isn't a positive number or larger than length
    if (isNaN(index) || index < 0 || index >= this.length) {
      return null;
    }
    // loop through data object until at nth key
    let i = 0;
    for (const key in this._data) {
      if (this._data.hasOwnProperty(key)) {
        if (i === index) {
          return key;
        }
        i++;
      }
    }
    // otherwise return null
    return null;
  },

  getItem(key) {
    // only get if there's something to get
    return this._data.hasOwnProperty(key) ? this._data[key] : null;
  },

  setItem(key, value) {
    // if we're adding a new item, increment the length
    if (!this._data.hasOwnProperty(key)) {
      this.length++;
    }
    // always store the value as a string
    this._data[key] = value.toString();
  },

  removeItem(key) {
    // only remove if there's something to remove
    if (this._data.hasOwnProperty(key)) {
      delete this._data[key];
      this.length--;
    }
  },

  clear() {
    this._data = {};
    this.length = 0;
  },
};

export default FakeStorage;
