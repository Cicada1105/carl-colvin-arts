"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadRates = exports.loadPreviousPerformances = exports.loadPerformanceIntro = void 0;

var _data = require("./data");

var _special_methods = require("./special_methods");

// This file holds the load methods for the individual
// 	sections on the performance page
// Imports
// data
// methods
const loadPerformanceIntro = () => {
  (0, _special_methods.createImageHeader)(_data.headerData['performance']);
};

exports.loadPerformanceIntro = loadPerformanceIntro;

const loadPreviousPerformances = () => {
  (0, _special_methods.createImageHeader)(_data.headerData['previous_performances']);
};

exports.loadPreviousPerformances = loadPreviousPerformances;

const loadRates = () => {
  (0, _special_methods.createImageHeader)(_data.headerData['rates']);
};

exports.loadRates = loadRates;