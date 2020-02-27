"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;

var _index = require("./gradient/index");

var _index2 = require("./bg_img/index");

var _index3 = require("./header/index");

var _index4 = require("./footer/index");

var _index5 = require("./bg_content/index");

// imports
const init = () => {
  (0, _index2.createBgFade)();
  (0, _index.createGradient)();
  (0, _index3.createHeader)();
  (0, _index4.createFooter)();
  (0, _index5.createBodyContent)();
};

exports.init = init;