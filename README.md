seajs-wrap [![spm package](http://spmjs.io/badge/seajs-wrap)](http://spmjs.io/package/seajs-wrap) [![Build Status](https://secure.travis-ci.org/seajs/seajs-wrap.png?branch=master)](https://travis-ci.org/seajs/seajs-wrap)
==========

The Sea.js plugin for loading CommonJS modules directly.

It would wrap files with 'define(function(require, exports, module) {})' block so that you can load CommonJS modules without wrapping it first.

It could only load modules in the same domain, so please use it in **developement environment**.

Install
-------

Install with [spm@3.x](http://spmjs.io):

    $ spm install seajs-wrap


Usage
-----

```html
<script src="path/to/sea.js"></script>
<script src="path/to/seajs-wrap.js"></script>

<script>
seajs.use(['common'], function(Common) {
  var str = Common(); // 'CommonJS'
})
</script>
```

```js
// common.js
// It is a CommonJS module
var example = 'CommonJS'
module.exports = function() {
  return example;
}
```

- no wrap

```html
<script>
seajs.use(['test.js?nowrap'], function() {
  // it would excute test.js without wrapping
})
</script>
```

For more details please visit [中文文档](https://github.com/seajs/seajs-wrap/issues/1).
