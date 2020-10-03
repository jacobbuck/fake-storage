class FakeStorage {
  #data = {};

  get length() {
    return Object.keys(this.#data).length;
  }

  key(n) {
    return Object.keys(this.#data)[Number.parseInt(n, 10)] ?? null;
  }

  getItem(key) {
    const _data = this.#data;
    const _key = `${key}`;
    return _data.hasOwnProperty(_key) ? _data[_key] : null;
  }

  setItem(key, value) {
    return (this.#data[`${key}`] = `${value}`);
  }

  removeItem(key, value) {
    const _data = this.#data;
    const _key = `${key}`;
    if (_data.hasOwnProperty(_key)) {
      delete _data[_key];
    }
  }

  clear(key, value) {
    this.#data = {};
  }
}

export default FakeStorage;
