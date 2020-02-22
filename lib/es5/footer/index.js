"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFooter = void 0;

var _data = require("./data");

// Improts
const createFooter = () => {
  // Create container to display across top
  let footerDiv = document.createElement("div"); // Add 'header' id

  footerDiv.setAttribute("id", "footer"); // Container for social media links

  let socialCont = document.createElement("div"); // Append id to container

  socialCont.setAttribute("id", "social"); // Create image container to hold social media images

  let img;

  for (img of _data.data) {
    // Create image node
    let imgNode = document.createElement("img"); // Add src attribute

    imgNode.setAttribute("src", img.path); // Add alt attribute

    imgNode.setAttribute("alt", img.alt); // Add id attribute

    imgNode.setAttribute("class", "socialImg");
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