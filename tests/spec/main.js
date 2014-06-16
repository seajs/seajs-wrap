seajs.config({
  base: './'
})

seajs.use("../../dist/seajs-wrap", function() {
  seajs.use('init')
})
