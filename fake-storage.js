/*!
 * Fake Storage - Copyright (c) 2015 Jacob Buck
 * https://github.com/jacobbuck/fake-storage
 * Licensed under the terms of the MIT license.
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define([], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		exports.FakeStorage = factory();
	} else {
		// Browser global
		root.FakeStorage = factory();
	}
}(this, function () {
	'use strict';

	function FakeStorage () {
		this.clear();
	}

	FakeStorage.prototype = {
		key: function (index) {
			// sanitise index as int
			index = parseInt(index);
			// return early if index isn't a number, or is negative
			if (isNaN(index) || index < 0) { return null; }
			// loop through data object until at nth key
			var i = 0;
			for (var key in this.__data) {
				if (this.__data.hasOwnProperty(key)) {
					if (i === index) {
						return key;
					}
					i++;
				}
			}
			// otherwise return null
			return null;
		},

		getItem: function (key) {
			// only get if there's something to get
			return (key !== '' && this.__data.hasOwnProperty(key)) ? this.__data[key] : null;
		},

		setItem: function (key, value) {
			// ensure the key isn't empty
			if (key !== '') {
				// if we're adding a new item, incriment the length
				if (!this.__data.hasOwnProperty(key)) {
					this.length++;
				}
				// always store the value as a string
				this.__data[key] = value.toString();
			}
		},

		removeItem: function (key) {
			// only remove if there's something to remove
			if (key !== '' && this.__data.hasOwnProperty(key)) {
				delete this.__data[key];
				this.length--;
			}
		},

		clear: function () {
			this.__data = {};
			this.length = 0;
		}
	};

	return FakeStorage;
}));