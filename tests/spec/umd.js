(function(factory) {
  if (typeof module !== "undefined" && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function') {
    define(factory);
  } else {
    window.umd = factory();
  }
})(function() {
  return function() {
    return 'umd';
  };
});
