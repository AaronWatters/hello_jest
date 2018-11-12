"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Require jQuery only if needed.
if (!global.jQuery) {
  global.jQuery = require('jquery');
}

// my_plugin installs itself into the global jQuery object
require("./my_plugin");

function hello_jest_is_loaded() {
  return true;
}

exports.default = hello_jest_is_loaded;