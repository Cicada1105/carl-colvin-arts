"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReedPriceBox = exports.createHeaderContent = void 0;

var _methods = require("../../../../global/methods");

// These will hold a majority of the methods used to display
// 	content for the reedmaking page

/************************************/

/*		Header Text and Contentd 	*/

/************************************/
const createHeaderContent = data => {
  let cont = (0, _methods.createElement)({
    className: "headerCont"
  });
  let headerCont = (0, _methods.createElement)({
    className: 'headerText'
  });
  let leftReed = (0, _methods.createImageElement)({
    src: '../../resources/reedmaking_imgs/reed.png',
    alt: 'Reed silhouette',
    className: 'reed_silhouette',
    idName: 'leftReed'
  });
  let introHeader = (0, _methods.createTextElement)({
    element: 'h3',
    text: data.header
  });
  let rightReed = (0, _methods.createImageElement)({
    src: '../../resources/reedmaking_imgs/reed.png',
    alt: 'Reed silhouette',
    className: 'reed_silhouette',
    idName: 'rightReed'
  });
  headerCont.appendChild(leftReed);
  headerCont.appendChild(introHeader);
  headerCont.appendChild(rightReed);
  let bodyCont = (0, _methods.createTextElement)({
    text: data.content,
    className: "headerBody"
  });
  cont.appendChild(headerCont);
  cont.appendChild(bodyCont);
  return cont;
};
/************************************/

/*		Reed Pricings Container 	*/

/************************************/
// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage


exports.createHeaderContent = createHeaderContent;

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

  let descriptionCont = createReedDescriptionCont(reedData);
  nameBlendCont.appendChild(descriptionCont); // Append blend and text to container

  nameCont.appendChild(nameSpan);
  nameCont.appendChild(nameBlendCont); // Return name container that holds the description and pricing children

  return nameCont;
};

exports.createReedPriceBox = createReedPriceBox;

const createReedDescriptionCont = (_ref) => {
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