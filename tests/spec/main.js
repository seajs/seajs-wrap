seajs.config({
  base: './'
})

seajs.use("../../dist/seajs-wrap-debug", function() {
  seajs.use('init')
})
