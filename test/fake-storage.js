var expect = require('expect.js');
var FakeStorage = require('../fake-storage.js');

describe('Fake Storage', function () {

	describe('getItem method', function () {
		it('returns the value associated with a given key', function () {
			var store = new FakeStorage();
			store.setItem('foo', 'bar');
			store.setItem('', 'bar');
			expect(store.getItem('foo')).to.be('bar');
			expect(store.getItem('')).to.be('bar');
		});

		it('returns null if the given key does not exist', function () {
			var store = new FakeStorage();
			expect(store.getItem('foz')).to.be(null);
		});
	});

	describe('setItem method', function () {
		it('stores a new key/value pair', function () {
			var store = new FakeStorage();
			expect(store.getItem('foo')).to.be(null);
			store.setItem('foo', 'bar');
			expect(store.getItem('foo')).to.be('bar');
		});

		it('stores the value as a string', function () {
			var store = new FakeStorage();
			store.setItem('number', 2);
			expect(store.getItem('number')).to.be('2');
			store.setItem('boolean', true);
			expect(store.getItem('boolean')).to.be('true');
			store.setItem('array', ['hey', 'man']);
			expect(store.getItem('array')).to.be('hey,man');
			store.setItem('object', {hey: 'man'});
			expect(store.getItem('object')).to.be('[object Object]');
		});

		it('updates the value of an existing key', function () {
			var store = new FakeStorage();
			store.setItem('foo', 'bar');
			expect(store.getItem('foo')).to.be('bar');
			store.setItem('foo', 'baz');
			expect(store.getItem('foo')).to.be('baz');
		});

		it('increases the length attribute when storing a new key/value pair', function () {
			var store = new FakeStorage();
			expect(store.length).to.be(0);
			store.setItem('foo', 'bar');
			expect(store.length).to.be(1);
			store.setItem('foo', 'rad');
			expect(store.length).to.be(1);
			store.setItem('foz', 'baz');
			expect(store.length).to.be(2);
		});
	});

	describe('removeItem method', function () {
		it('removes a key/value pair with a given key', function () {
			var store = new FakeStorage();
			store.setItem('foo', 'bar');
			store.removeItem('foo');
			expect(store.getItem('foo')).to.be(null);
		});

		it('decreases the length attribute', function () {
			var store = new FakeStorage();
			store.setItem('foo', 'bar');
			store.removeItem('foo');
			expect(store.length).to.be(0);
		});

		it('does nothing if the given key does not exist', function () {
			var store = new FakeStorage();
			store.setItem('foo', 'bar');
			store.removeItem('foz');
			expect(store.getItem('foo')).to.be('bar');
			expect(store.length).to.be(1);
		});
	});

	describe('clear method', function () {
		var store = new FakeStorage();
		store.setItem('bar', 'foo');
		store.setItem('foo', 'bar');
		store.clear();

		it('removes all key/value pairs', function () {
			expect(store.getItem('bar')).to.be(null);
			expect(store.getItem('foo')).to.be(null);
		});

		it('resets the length attribute', function () {
			expect(store.length).to.be(0);
		});
	});

	describe('key method', function () {
		var store = new FakeStorage();
		store.setItem('foo', 'hey');
		store.setItem('bar', 'ho!');

		it('returns the name of the nth key in the list', function () {
			expect(store.key(0)).to.be('foo');
			expect(store.key('0')).to.be('foo');
			expect(store.key(1)).to.be('bar');
			expect(store.key(1.0)).to.be('bar');
		});

		it('returns null if the given index is greater than or equal to the number of key/value pairs', function () {
			expect(store.key(store.length)).to.be(null);
			expect(store.key(9001)).to.be(null);
		});

		it('returns null if the given index is not valid', function () {
			expect(store.key(-1)).to.be(null);
			expect(store.key(NaN)).to.be(null);
			expect(store.key(Infinity)).to.be(null);
			expect(store.key('foo')).to.be(null);
		});
	});

});