# fake-storage

Memory-based storage to shim [Web Storage](http://www.w3.org/TR/webstorage/).

## Usage

Create a new instance:

```js
const myStorage = new FakeStorage();
```

Then you can use your `myStorage` object much like the [Storage interface](http://www.w3.org/TR/webstorage/#storage):

```js
myStorage.getItem('foo');
myStorage.setItem('foo', 'bar');
myStorage.removeItem('foo');
myStorage.key(2);
myStorage.clear();
myStorage.length;
```

## License

MIT - see [LICENSE](LICENSE)
