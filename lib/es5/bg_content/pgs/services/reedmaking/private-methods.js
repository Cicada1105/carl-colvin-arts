"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReedPriceBox = void 0;

var _methods = require("../../../../global/methods");

// These will hold a majority of the methods used to display
// 	content for the reedmaking page
// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage
const createReedPriceBox = reedData => {
  let nameCont = (0, _methods.createElement)({
    element: 'div',
    className: 'nameCont'
  }); // Create span element to add styling to only the text element

  let nameSpan = (0, _methods.createTextElement)({
    element: 'span',
    text: reedData.name,
    className: 'reedName'
  }); // Container to have the blend mode to allow the text to be different color

  let nameBlendCont = (0, _methods.createElement)({
    element: 'div',
    className: 'nameBlend'
  }); // Append Description container to blend container

  let descriptionCont = createDescriptionCont(reedData);
  nameBlendCont.appendChild(descriptionCont); // Append blend and text to container

  nameCont.appendChild(nameSpan);
  nameCont.appendChild(nameBlendCont); // Return name container that holds the description and pricing children

  return nameCont;
};

exports.createReedPriceBox = createReedPriceBox;

const createDescriptionCont = (_ref) => {
  let {
    description,
    pricing
  } = _ref;
  // createElement's default element is div
  let cont = (0, _methods.createElement)({
    className: 'descriptionCont'
  }); // Create span element to add styling to only the text element

  let span = (0, _methods.createTextElement)({
    element: 'span',
    text: description,
    className: 'descriptionName'
  }); // Container to have the blend mode to allow text to be different color

  let blendCont = (0, _methods.createElement)({
    className: 'descriptionBlend'
  }); // Add pricing data container to the description blend

  let pricingCont = createPriceCont(pricing);
  blendCont.appendChild(pricingCont); // Append blend and text to container

  cont.appendChild(span);
  cont.appendChild(blendCont);
  return cont;
}; // Method takes in IPricing Object Array and returns container organized
// 	with passed data


const createPriceCont = priceData => {
  // createElement's default element is div
  let cont = (0, _methods.createElement)({
    className: 'pricingCont'
  });
  let priceFormat = "";
  priceData.forEach(price => {
    priceFormat += "".concat(price.quantity, " | $").concat(price.cost, "\n");
  }); // Create span element to add styling to only the text element

  let span = (0, _methods.createTextElement)({
    element: 'span',
    text: priceFormat,
    className: 'pricingName'
  }); // Container to have the blend mode to allow text to be different color

  let blendCont = (0, _methods.createElement)({
    className: 'pricingBlend'
  }); // Append blend and text to price container

  cont.appendChild(span);
  cont.appendChild(blendCont);
  return cont;
};