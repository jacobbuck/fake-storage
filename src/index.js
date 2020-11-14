class FakeStorage {
  #data = new Map();

  get length() {
    return this.#data.size;
  }

  key(n) {
    n = Number.parseInt(n, 10);
    const iterator = this.#data.keys();
    let i = 0;
    let result = iterator.next();
    while (!result.done) {
      if (i === n) {
        return result.value;
      }
      i += 1;
      result = iterator.next();
    }
    return null;
  }

  getItem(key) {
    return this.#data.get(`${key}`) ?? null;
  }

  setItem(key, value) {
    this.#data.set(`${key}`, `${value}`);
  }

  removeItem(key) {
    this.#data.delete(`${key}`);
  }

  clear() {
    this.#data.clear();
  }
}

export default FakeStorage;
