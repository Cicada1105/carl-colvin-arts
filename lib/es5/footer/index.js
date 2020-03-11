"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFooter = void 0;

var _methods = require("../global/methods");

var _data = require("./data");

// local
const createFooter = () => {
  // Create container to display across top
  // createElement's default element is 'div'
  let footerDiv = (0, _methods.createElement)({
    idName: 'footer'
  }); // Container for social media links
  // createElement's default element is 'div'

  let socialCont = (0, _methods.createElement)({
    idName: 'social'
  }); // Create image container to hold social media images

  let img;

  for (img of _data.data) {
    // Create image node
    let imgNode = (0, _methods.createImageElement)({
      src: img.path,
      alt: img.alt,
      className: 'socialImg'
    });
    let imgLink = img.link; // Add event listener to redirect to another page

    imgNode.addEventListener("click", () => {
      window.open(imgLink, "_blank");
    }); // Append image to social media container

    socialCont.appendChild(imgNode);
  } // Append social media content to footer


  footerDiv.appendChild(socialCont); // Add element to body

  document.body.appendChild(footerDiv);
};

exports.createFooter = createFooter;