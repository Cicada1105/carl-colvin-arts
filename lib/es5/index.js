"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;

var _index = require("./gradient/index");

var _index2 = require("./header/index");

var _index3 = require("./footer/index");

// imports
const init = () => {
  (0, _index.createGradient)();
  (0, _index2.createHeader)();
  (0, _index3.createFooter)();
};

exports.init = init;