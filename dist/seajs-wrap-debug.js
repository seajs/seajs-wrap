(function(){
/**
 * The Sea.js plugin for loading CommonJS file
 */

var global = window
var wrapExec = {}

seajs.on("resolve", function(data) {
  var id = data.id
  if (!id) return ""

  var m = id.match(/[^?]+(\.\w+)?(\?.*)?$/)
  var uri = seajs.resolve(id, data.refUri)

  if (m && (m[1] === '.js' || !m[1])) {
    var query = m[2] || '';
    wrapExec[uri] = function(uri, content) {
      var wrapedContent;
      var defineReg = /define\(\s*function\s*\(\s*require\s*(.*)?\)\s*\{/;
      var defineReg2 = /define\(\s*\w+\s*\)/;
      if (defineReg.test(content) ||
          defineReg2.test(content) ||
          query.indexOf('nowrap') > 0) {
        wrapedContent= content;
      } else {
        wrapedContent = 'define(function(require, exports, module) {\n' +
                        content + '\n})';
      }
      globalEval(wrapedContent);
    }
  }

  data.uri = uri
})

seajs.on("request", function(data) {
  var exec = wrapExec[data.uri]

  if (exec) {
    xhr(data.requestUri, function(content) {
      exec(data.uri, content)
      data.onRequest()
    })

    data.requested = true
  }
})


// Helpers

function xhr(url, callback) {
  var r = global.ActiveXObject ?
      new global.ActiveXObject("Microsoft.XMLHTTP") :
      new global.XMLHttpRequest()

  r.open("GET", url, true)

  r.onreadystatechange = function() {
    if (r.readyState === 4) {
      // Support local file
      if (r.status > 399 && r.status < 600) {
        throw new Error("Could not load: " + url + ", status = " + r.status)
      }
      else {
        callback(r.responseText)
      }
    }
  }

  return r.send(null)
}

function globalEval(content) {
  if (content && /\S/.test(content)) {
    (global.execScript || function(content) {
      (global.eval || eval).call(global, content)
    })(content)
  }
}

define("undefined/seajs-wrap/1.0.0/seajs-wrap-debug", [], {});
})();