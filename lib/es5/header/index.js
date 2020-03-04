"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeader = void 0;

var _methods = require("./methods");

// Imports
const createHeader = () => {
  // Create container to display across top
  let headerDiv = document.createElement("div"); // Add 'header' id

  headerDiv.setAttribute("id", "header"); // Create navigation => returns ul element

  let navBar = (0, _methods.createNavigation)(); // Append navigation to header

  headerDiv.appendChild(navBar); // Add element to body

  document.body.appendChild(headerDiv);
};

exports.createHeader = createHeader;