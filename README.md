seajs-wrap
==========

The Sea.js plugin for loading CommonJS modules directly.

It would wrap files with 'define(function(require, exports, module) {})' block so that you can load CommonJS modules without wrapping it first.

It could only load modules in the same domain, so please use it in debug environment.

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

For more details please visit [中文文档](https://github.com/seajs/seajs-wrap/issues/1)

