"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBodyContent = void 0;

var _methods = require("../global/methods");

var _index = require("./pgs/home/index");

var _index2 = require("./pgs/about/index");

var _index3 = require("./pgs/services/index");

var _index4 = require("./pgs/listen/index");

var _index5 = require("./pgs/contact/index");

// Imports
// Different pages
const createBodyContent = () => {
  let currFile = (0, _methods.getCurrentFile)();

  switch (currFile) {
    case 'index':
      (0, _index.loadHomePage)();
      break;

    case 'about':
      (0, _index2.loadAboutPage)();
      break;

    case 'listen':
      (0, _index4.loadListenPage)();
      break;

    case 'contact':
      (0, _index5.loadContactPage)();
      break;

    default:
      (0, _index3.loadServicesPage)();
    // Doesn't have it's own home page so will redirect to loading specific page
  }
};

exports.createBodyContent = createBodyContent;