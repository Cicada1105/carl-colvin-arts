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

  switch (currFile) {
    case 'index':
      imgLocation = _data.data['oboe'].path;
      imgAlternative = _data.data['oboe'].alt;
      break;

    case 'about':
      imgLocation = _data.data['english_horn'].path;
      imgAlternative = _data.data['english_horn'].alt;
      break;

    case 'services':
      imgLocation = _data.data['poem'].path;
      imgAlternative = _data.data['poem'].alt;
      break;

    case 'listen':
      imgLocation = _data.data['oboe'].path;
      imgAlternative = _data.data['oboe'].alt;
      break;

    case 'contact':
      imgLocation = _data.data['oboe'].path;
      imgAlternative = _data.data['oboe'].alt;
      break;

    default:
      imgLocation = _data.data['oboe'].path;
      imgAlternative = _data.data['oboe'].alt;
  }

  ; // Fade image 
  //let imageFade:any = createImageFade(imgLocation,imgAlternative);

  let imageFade = document.createElement('img');
  imageFade.setAttribute('src', imgLocation);
  imageFade.setAttribute('alt', imgAlternative);
  imageFade.setAttribute('id', 'bgImage'); // Append image to document

  document.body.appendChild(imageFade);
};

exports.createBgFade = createBgFade;