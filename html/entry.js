

window.js_loaded = false;

if (!global.jQuery) {
  global.jQuery = require('jquery');
}

require("../dist/index");

jQuery(function(){
  var $ = jQuery;
  var y = $("#container");
  var z = $('<div>JQuery is working?</div>').appendTo(y);
  // set the id
  z.attr("id", "target");
  z.plugin_functionality({
    html: "plugin is working",
    italic: true
  });
  window.js_loaded = true;
});

// put jquery in the global environment so we can use it in tests
window.jQuery = jQuery;
