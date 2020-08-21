var expect = require('expect');
var FakeStorage = require('.');

describe('Fake Storage', function () {
  describe('getItem method', function () {
    it('returns the value associated with a given key', function () {
      var store = new FakeStorage();
      store.setItem('foo', 'bar');
      store.setItem('', 'bar');
      expect(store.getItem('foo')).toBe('bar');
      expect(store.getItem('')).toBe('bar');
    });

    it('returns null if the given key does not exist', function () {
      var store = new FakeStorage();
      expect(store.getItem('foz')).toBe(null);
    });
  });

  describe('setItem method', function () {
    it('stores a new key/value pair', function () {
      var store = new FakeStorage();
      expect(store.getItem('foo')).toBe(null);
      store.setItem('foo', 'bar');
      expect(store.getItem('foo')).toBe('bar');
    });

    it('stores the value as a string', function () {
      var store = new FakeStorage();
      store.setItem('number', 2);
      expect(store.getItem('number')).toBe('2');
      store.setItem('boolean', true);
      expect(store.getItem('boolean')).toBe('true');
      store.setItem('array', ['hey', 'man']);
      expect(store.getItem('array')).toBe('hey,man');
      store.setItem('object', { hey: 'man' });
      expect(store.getItem('object')).toBe('[object Object]');
    });

    it('updates the value of an existing key', function () {
      var store = new FakeStorage();
      store.setItem('foo', 'bar');
      expect(store.getItem('foo')).toBe('bar');
      store.setItem('foo', 'baz');
      expect(store.getItem('foo')).toBe('baz');
    });

    it('increases the length attribute when storing a new key/value pair', function () {
      var store = new FakeStorage();
      expect(store.length).toBe(0);
      store.setItem('foo', 'bar');
      expect(store.length).toBe(1);
      store.setItem('foo', 'rad');
      expect(store.length).toBe(1);
      store.setItem('foz', 'baz');
      expect(store.length).toBe(2);
    });
  });

  describe('removeItem method', function () {
    it('removes a key/value pair with a given key', function () {
      var store = new FakeStorage();
      store.setItem('foo', 'bar');
      store.removeItem('foo');
      expect(store.getItem('foo')).toBe(null);
    });

    it('decreases the length attribute', function () {
      var store = new FakeStorage();
      store.setItem('foo', 'bar');
      store.removeItem('foo');
      expect(store.length).toBe(0);
    });

    it('does nothing if the given key does not exist', function () {
      var store = new FakeStorage();
      store.setItem('foo', 'bar');
      store.removeItem('foz');
      expect(store.getItem('foo')).toBe('bar');
      expect(store.length).toBe(1);
    });
  });

  describe('clear method', function () {
    var store = new FakeStorage();
    store.setItem('bar', 'foo');
    store.setItem('foo', 'bar');
    store.clear();

    it('removes all key/value pairs', function () {
      expect(store.getItem('bar')).toBe(null);
      expect(store.getItem('foo')).toBe(null);
    });

    it('resets the length attribute', function () {
      expect(store.length).toBe(0);
    });
  });

  describe('key method', function () {
    var store = new FakeStorage();
    store.setItem('foo', 'hey');
    store.setItem('bar', 'ho!');

    it('returns the name of the nth key in the list', function () {
      expect(store.key(0)).toBe('foo');
      expect(store.key('0')).toBe('foo');
      expect(store.key(1)).toBe('bar');
      expect(store.key(1.0)).toBe('bar');
    });

    it('returns null if the given index is greater than or equal to the number of key/value pairs', function () {
      expect(store.key(store.length)).toBe(null);
      expect(store.key(9001)).toBe(null);
    });

    it('returns null if the given index is not valid', function () {
      expect(store.key(-1)).toBe(null);
      expect(store.key(NaN)).toBe(null);
      expect(store.key(Infinity)).toBe(null);
      expect(store.key('foo')).toBe(null);
    });
  });
});
