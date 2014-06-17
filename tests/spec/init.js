define(function(require) {

  var test = require('../test')

  var common = require('./common')()
  var cmd = require('./cmd')()
  var umd = require('./umd')()
  var transported = require('./transported')()
  require('./nowrap.js?nowrap')

  test.assert(common === 'CommonJS')
  test.assert(cmd === 'cmd')
  test.assert(umd === 'umd')
  test.assert(transported === 'transported')
  test.assert(window.nowrapsupported === true)

  test.next()

});

