"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPerformancePage = void 0;

var _load_methods = require("./load_methods");

// Imports
const loadPerformancePage = () => {
  // Load intro to the Performance page
  (0, _load_methods.loadPerformanceIntro)(); // Load section to display/discuss previous performances

  (0, _load_methods.loadPreviousPerformances)(); // Load rates for user to view 

  (0, _load_methods.loadRates)();
};

exports.loadPerformancePage = loadPerformancePage;