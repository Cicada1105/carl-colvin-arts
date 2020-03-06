"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReedPriceBox = void 0;

// These will hold a majority of the methods used to display
// 	content for the reedmaking page
// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage
const createReedPriceBox = reedData => {
  let nameCont = document.createElement('div'); // Create span element to add styling to only the text element

  let nameSpan = document.createElement('span'); // Add attribute to customize text

  nameSpan.setAttribute('class', 'reedText');
  let nameNode = document.createTextNode(reedData.name); // Append name node to the span element

  nameSpan.appendChild(nameNode); // Append name to container

  nameCont.appendChild(nameSpan);
  nameCont.setAttribute('class', 'reedNameCont');
  let descriptionCont = createDescriptionCont(reedData.description);
  let pricingCont = createPriceCont(reedData.pricing); // Append pricing container to description container

  descriptionCont.appendChild(pricingCont); // Append description container to name container

  nameCont.appendChild(descriptionCont); // Return name container that holds the description and pricing children

  return nameCont;
};

exports.createReedPriceBox = createReedPriceBox;

const createDescriptionCont = desc => {
  let cont = document.createElement('div'); // Create span element to add styling to only the text element

  let span = document.createElement('span'); // Add attribute to customize text

  span.setAttribute('class', 'reedText');
  let textNode = document.createTextNode(desc); // Append description node to the span element

  span.appendChild(textNode); // Append description to container

  cont.appendChild(span);
  cont.setAttribute('class', 'reedDescriptionCont');
  return cont;
}; // Method takes in IPricing Object Array and returns container organized
// 	with passed data


const createPriceCont = priceData => {
  let priceCont = document.createElement('div');
  priceCont.setAttribute('class', 'reedPricingCont'); // Create span element to add styling to only the text element

  let span = document.createElement('span'); // Add attribute to customize text

  span.setAttribute('class', 'reedText');
  priceData.forEach(price => {
    let priceFormat = "".concat(price.quantity, " | $").concat(price.cost);
    let priceNode = document.createTextNode(priceFormat);
    span.appendChild(priceNode);
  }); // Append span element to price container

  priceCont.appendChild(span);
  return priceCont;
};