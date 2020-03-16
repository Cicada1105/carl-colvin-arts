"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadReedmakingPage = void 0;

var _loadMethods = require("./load-methods");

// Imports
const loadReedmakingPage = () => {
  // Load data introducing reeds to user
  (0, _loadMethods.loadIntroData)(); // Load tabs that hold Reed data

  (0, _loadMethods.loadTabs)(); // Load the reed pricings
  //loadPricings();
};

exports.loadReedmakingPage = loadReedmakingPage;