"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadHomePage = void 0;

var _load_methods = require("./load_methods");

// Imports
// methods
const loadHomePage = () => {
  // Load bootstrap to allow Font Awesome to be used
  (0, _load_methods.loadBootstrap)(); // Load Rows

  (0, _load_methods.loadRows)(); // Load previous for listen container

  (0, _load_methods.loadListenPreview)();
};

exports.loadHomePage = loadHomePage;