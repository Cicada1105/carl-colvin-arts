"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imgCont = exports.infoBox = void 0;

var _methods = require("../../../global/methods");

// This file contains methods that are in addition to the load methods
// 	or aid in the processing of the load methods
// methods
const IMAGE_DIR = './resources/home_imgs/';

const infoBox = e => {
  let box = document.createElement('section');
  let h = (0, _methods.createTextElement)({
    element: 'h3',
    text: e.header
  }); // Sections contain articles/paragraphs
  // createTextElement's default element is 'p'

  let c = (0, _methods.createTextElement)({
    text: e.content
  });
  box.appendChild(h);
  box.appendChild(c);
  return box;
};

exports.infoBox = infoBox;

const imgCont = currImg => {
  // Create container to store the figure/image, border and data
  // createElement's default element is 'div'
  let fig = (0, _methods.createElement)({
    className: 'figure'
  }); // Image to display

  let img = (0, _methods.createImageElement)({
    src: currImg.path,
    alt: currImg.alt,
    className: 'homeImg'
  }); // Circular border to add depth to image

  let imgBorder = (0, _methods.createImageElement)({
    src: "".concat(IMAGE_DIR, "img_border.png"),
    className: 'imgBorder'
  });
  let figCaption = (0, _methods.createElement)({
    className: 'figcaption'
  }); // Data to display when user hovers over the image

  let figCaptionP;
  let figCaptionStr = typeof currImg.caption === "undefined" ? "" : currImg.caption;
  figCaptionP = (0, _methods.createTextElement)({
    text: figCaptionStr
  }); // On hovering over imgBorder, fade img itself
  // Display data 

  imgBorder.addEventListener('mouseover', () => {
    img.style.filter = 'opacity(50%)';
    figCaption.style.display = 'block';
  }); // On leaving image, img has full opacity
  // Hide data

  imgBorder.addEventListener('mouseout', () => {
    img.style.filter = 'opacity(100%)';
    figCaption.style.display = 'none';
  }); // Append paragraph to caption container

  figCaption.appendChild(figCaptionP);
  fig.appendChild(img);
  fig.appendChild(imgBorder);
  fig.appendChild(figCaption);
  return fig;
};

exports.imgCont = imgCont;