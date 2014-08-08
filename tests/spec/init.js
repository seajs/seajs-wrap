define(function(require) {

  var test = require('../test.js?nowrap')

  var common = require('./common')()
  var commonWithDot = require('./common.test')()
  var cmd = require('./cmd')()
  var cmdWithDot = require('./cmd.test')()
  var umd = require('./umd')()
  var style = require('./style.css.js')

  var transported = require('./transported')()
  require('./nowrap.js?nowrap')

  test.assert(common === 'CommonJS')
  test.assert(commonWithDot === 'CommonJSWithDot')
  test.assert(cmd === 'cmd')
  test.assert(cmdWithDot === 'cmdWithDot')
  test.assert(umd === 'umd')
  test.assert(transported === 'transported')
  test.assert(window.nowrapsupported === true)
  test.assert(style === null)
  test.assert(window.styleObj === 123)
  test.next()

});
