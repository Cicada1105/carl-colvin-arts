"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBgFade = void 0;

var _methods = require("../global/methods");

var _data = require("./data");

// Imports
// 	 Global
//	 Local
//import { createImageFade } from './methods'
const createBgFade = () => {
  // Get current path to determine bg image
  const currFile = (0, _methods.getCurrentFile)(); // Image location

  let imgLocation; // Image alt

  let imgAlternative; // Based on current location, display different image
  // Data is associative with currFile being name of key

  imgLocation = _data.data[currFile].path;
  imgAlternative = _data.data[currFile].alt; // Fade image 
  //let imageFade:any = createImageFade(imgLocation,imgAlternative);

  let imageFade = document.createElement('img');
  imageFade.setAttribute('src', imgLocation);
  imageFade.setAttribute('alt', imgAlternative);
  imageFade.setAttribute('id', 'bgImage'); // Append image to document

  document.body.appendChild(imageFade);
};

exports.createBgFade = createBgFade;