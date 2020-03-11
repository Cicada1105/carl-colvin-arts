"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeader = void 0;

var _methods = require("../global/methods");

var _methods2 = require("./methods");

// Imports
// global
// local
const createHeader = () => {
  // Create container to display across top
  // createElement's default element is 'div'
  let headerDiv = (0, _methods.createElement)({
    idName: 'header'
  }); // Create navigation => returns ul element

  let navBar = (0, _methods2.createNavigation)(); // Append navigation to header

  headerDiv.appendChild(navBar); // Add element to body

  document.body.appendChild(headerDiv);
};

exports.createHeader = createHeader;