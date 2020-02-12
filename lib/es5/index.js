"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;

var _gradient = require("./gradient");

var _navigation = require("./navigation");

// imports
const init = () => {
  (0, _gradient.createGradient)();
  (0, _navigation.createNavigation)();
  alert("It's working");
};

exports.init = init;