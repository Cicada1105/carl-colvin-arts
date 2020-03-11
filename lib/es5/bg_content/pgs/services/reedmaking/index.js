"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadReedmakingPage = void 0;

var _data = require("./data");

var _methods = require("./methods");

var _methods2 = require("../../../../global/methods");

// Imports
const loadReedmakingPage = () => {
  // Load reed images and descriptions
  loadReedImages(); // Load the reed pricings

  loadPricings();
};

exports.loadReedmakingPage = loadReedmakingPage;

const loadReedImages = () => {
  console.log("loading images");
};

const loadPricings = () => {
  // Create reed pricing container for each Reed
  _data.data.forEach(reed => {
    // Create container that will be used to help with sizing and positioning
    // createElement's default element is 'div'
    let reedCont = (0, _methods2.createElement)({
      className: 'priceBox'
    });
    let reedPricingBox = (0, _methods.createReedPriceBox)(reed); // Append reed pricing box to the reed container

    reedCont.appendChild(reedPricingBox);
    document.body.appendChild(reedCont);
  });
};