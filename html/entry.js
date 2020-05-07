

window.js_loaded = false;

if (!global.jQuery) {
  global.jQuery = require('jquery');
}

require("../dist/index");

jQuery(function(){
  var $ = jQuery;
  var y = $("#container");
  var z = $('<div id="target">JQuery is working?</div>').appendTo(y);
  z.plugin_functionality({
    html: "plugin is working",
    italic: true
  });
  window.jQuery = jQuery;
  window.js_loaded = true;
});
