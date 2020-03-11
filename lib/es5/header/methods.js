"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNavigation = void 0;

var _methods = require("../global/methods");

var _data = require("./data");

// This file is used to display navigation 
// local
// Current page user is on
const CURRENT_PATH = (0, _methods.getCurrentFile)();

let createNavigation = () => {
  // Create new ul element
  let navUl = (0, _methods.createElement)({
    element: 'ul',
    idName: 'navigation'
  }); // Current link of type ILink

  let link; // Subdirectories of links can be array of ILinks or null

  let directories;

  for (link of _data.links) {
    // Using of when dealing with arrays
    // Create li for current link
    let currLi; // Check if current file matches a link (equivalent => 0)

    if (CURRENT_PATH.localeCompare(link.name.toLowerCase()) == 0) {
      // Add attribute to current li to signify it is the active link
      currLi = (0, _methods.createTextElement)({
        element: 'li',
        text: link.name,
        idName: 'active'
      });
    } // Check if home page to float left: index.html


    if (link.name.localeCompare("Carl Colvin Arts") == 0) {
      // Add id to home page
      currLi = (0, _methods.createTextElement)({
        element: 'li',
        text: link.name,
        idName: 'homeLink'
      });
    } else {
      currLi = (0, _methods.createTextElement)({
        element: 'li',
        text: link.name
      });
    } // Store path of current link to use in event listener


    let linkPath = link.link; // Add event listener for when link is clicked on

    currLi.addEventListener("click", () => {
      window.open(linkPath, "_self");
    }); // Current link could either have null subdirectories or an array of ILink objects

    if (link.subdirectories != null && link.subdirectories.length > 0) {
      // Create new ul for subdirectories
      let subdirectoryUl = createSubdirectory(link.subdirectories); // Append ul subdirectory to li main directory element

      currLi.appendChild(subdirectoryUl);
    }
    /*
        parentElement.insertBefore(element1, element2)
             Goes to parentElement and inserts element1 before
        element 2
    */
    // Floating li's to the right causes navigation to be displayed
    //  backwards when using appendChild.


    navUl.insertBefore(currLi, navUl.childNodes[0]);
  } // Return ul node to be added to the header


  return navUl;
};

exports.createNavigation = createNavigation;

let createSubdirectory = dirs => {
  // Create UL to contain LI's 
  let subUl = (0, _methods.createElement)({
    element: 'ul',
    className: 'subDir'
  });

  for (let dir of dirs) {
    // Create LI element for current subdirectory
    let currSubLi;

    if (CURRENT_PATH.localeCompare(dir.name.toLowerCase()) == 0) {
      // Add active attribute to current li
      currSubLi = (0, _methods.createTextElement)({
        element: 'li',
        text: dir.name,
        idName: 'active'
      });
    } else {
      currSubLi = (0, _methods.createTextElement)({
        element: 'li',
        text: dir.name
      });
    }

    let subLink = dir.link; // Add event listener

    currSubLi.addEventListener("click", () => {
      window.open(subLink, "_self");
    }); // Append current li element to subdirectory ul

    subUl.appendChild(currSubLi);
  }

  return subUl;
};