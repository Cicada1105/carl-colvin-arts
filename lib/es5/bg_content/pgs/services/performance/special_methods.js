"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createImageHeader = void 0;

var _methods = require("../../../../global/methods");

// Special methods used by the Performance page
// Can be used by methods specified in load_methods.ts
// methods
// Methods will take in an object of type ImageHeaderInterface
// Returns relative container with proper designed
const createImageHeader = headerData => {
  // Container to hold every element of the header
  let cont = (0, _methods.createElement)({
    className: "imageHeaderCont"
  });
  let centerCont = createCenterImageHeader(headerData); // "hr" element to be display on left of header and images
  //let leftHrCont:any = createElement({className:"hrCont",idName:"leftHrCont"});
  //let leftHr:any = createElement({element:"hr",className:"",idName:"hrLeft"});
  // Append hr to it's container to be later used to calculate sizing
  //leftHrCont.appendChild(leftHr);
  // "hr" element to be display on right of header and images
  //let rightHrCont:any = createElement({className:"hrCont",idName:"rightHrCont"});
  //let rightHr:any = createElement({element:"hr",idName:"hrRight"});
  // Append hr to it's container to be later used to calculate sizing
  //rightHrCont.appendChild(rightHr);
  // Append elements to parent container
  //cont.appendChild(leftHrCont);

  cont.appendChild(centerCont); //cont.appendChild(rightHrCont);
  // Apend Container to document

  document.body.appendChild(cont);
};

exports.createImageHeader = createImageHeader;

const createCenterImageHeader = headerData => {
  let cont = (0, _methods.createElement)({
    className: "centerHeaderCont"
  }); // Musical symbol to be display on left side of header

  let leftSymbol = (0, _methods.createImageElement)({
    src: headerData.image.path,
    alt: headerData.image.alt,
    className: "musicalSymbol"
  }); // Header text to be at the center of the container

  let header = (0, _methods.createTextElement)({
    element: "h3",
    text: headerData.header
  }); // Musical symbol to be display on right side of header

  let rightSymbol = (0, _methods.createImageElement)({
    src: headerData.image.path,
    alt: headerData.image.alt,
    className: "musicalSymbol"
  }); // Append Header and Symbols to center container

  cont.appendChild(leftSymbol);
  cont.appendChild(header);
  cont.appendChild(rightSymbol);
  return cont;
};