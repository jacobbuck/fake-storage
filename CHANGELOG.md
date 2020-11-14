# Changelog

## Unreleased

### Changed

- Enabled loose mode on '@babel/preset-env' to reduce build output.
- Updated internal storage mechanism.

## 2.0.0 - 2020-08-21

### Added

- Added [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) for Babel helpers.
- Set `"sideEffects": false` in [package.json](./package.json).

### Changed

- Refactored internals in modern JavaScript.
- Updated `length` property to a getter.

### Removed

- **BREAKING** Removed support for Internet Explorer 10 and earlier.

## 1.2.0 - 2020-08-21

### Added

- Added ES Module build.

### Changed

- Builds are now done with [Rollup](http://rollupjs.org).

## 1.1.0 - 2017-04-12

### Changed

- Replace UMD build to CommonJS build.
- Updated devDependencies.

### Removed

- Removed `bower.json`.

## 1.0.3 - 2015-09-12

### Changed

- Minor internal changes.

## 1.0.2 - 2015-05-05

### Changed

- Allow empty string key.

### Fixed

- Fix CommonJS export.

## 1.0.1 - 2015-05-03

### Added

- Added `bower.json` to publish to bower.

## 1.0.0 - 2015-05-02

Initial public version! :tada:
