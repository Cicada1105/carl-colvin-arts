(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.begin = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
const imagePath = "./resources/media_imgs"; // Data holding info about social media links

const data = [{
  name: "instagram",
  path: imagePath + "/ig_logo.png",
  link: "https://www.instagram.com/carl_colvin_arts"
}, {
  name: "linkedin",
  path: imagePath + "/in_logo.png",
  link: "https://www.linkedin.com/in/carl-colvin-68122379"
}, {
  name: "twitter",
  path: imagePath + "/twitter_logo.png",
  link: "https://twitter.com/CarlColvinArts"
}, {
  name: "facebook",
  path: imagePath + "/fb_logo.png",
  link: "tbd"
}];
exports.data = data;
},{}],2:[function(require,module,exports){
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

    imgNode.setAttribute("alt", img.name); // Add id attribute

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
},{"./data":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGradient = void 0;

const createGradient = () => {
  const cvsEl = document.createElement("canvas");
  cvsEl.setAttribute("id", "bgCanvas");
  document.body.appendChild(cvsEl);
  const cvs = document.getElementById("bgCanvas");
  let ctx = cvs.getContext('2d');
  let grd = ctx.createLinearGradient(0, 0, 300, 150); // Create color stops

  grd.addColorStop(0, "#340604");
  grd.addColorStop(1, "black");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 300, 150);
};

exports.createGradient = createGradient;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.links = void 0;
const links = [{
  name: "About",
  path: "pgs/about.html",
  subdirectories: []
}, {
  name: "Services",
  path: "pgs/services/services_home.html",
  subdirectories: [{
    name: "Reedmaking",
    path: "pgs/services/reedmaking.html",
    subdirectories: []
  }, {
    name: "Editing",
    path: "pgs/services/editing.html",
    subdirectories: []
  }, {
    name: "Writing",
    path: "pgs/services/writing.html",
    subdirectories: []
  }, {
    name: "Performance",
    path: "pgs/services/performance.html",
    subdirectories: []
  }]
}, {
  name: "Listen",
  path: "pgs/listen.html",
  subdirectories: []
}, {
  name: "Contact",
  path: "pgs/contact.html",
  subdirectories: []
}];
exports.links = links;
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeader = void 0;

var _data = require("./data");

var _methods = require("./methods");

// Imports
const createHeader = () => {
  // Create container to display across top
  let headerDiv = document.createElement("div"); // Add 'header' id

  headerDiv.setAttribute("id", "header"); // Create navigation => returns ul element

  let navBar = createNavigation(); // Append navigation to header

  headerDiv.appendChild(navBar); // Add element to body

  document.body.appendChild(headerDiv);
};

exports.createHeader = createHeader;

const createNavigation = () => {
  // Store current path
  let currPath = (0, _methods.getCurrentFile)(); // Current link of type ILink

  let link; // Subdirectories of links can be array of ILinks or null

  let directories; // Create new ul element

  let navUl = document.createElement("ul"); // Add ul element attribute

  navUl.setAttribute("id", "navigation");

  for (link of _data.links) {
    // Create li for current link
    let currLi = document.createElement("li"); // Add text to element

    let txtNode = document.createTextNode(link.name); // Append text to li

    currLi.appendChild(txtNode); // Check if current file matches a link (equivalent => 0)

    if (currPath.localeCompare(link.name.toLowerCase()) == 0) {
      // Add attribute to current li
      currLi.setAttribute("id", "active");
    } // Store path of current link to use in event listener


    let linkPath = link.path; // Add event listener for when link is clicked on

    currLi.addEventListener("click", () => {
      window.open(linkPath, "_blank");
    }); // Store current subdirectories to loop through

    /*directories = link.subdirectories;
    // Current link could either have null subdirectories or an array of ILink objects
    if ((directories != null) && (directories.length > 0)) {
      // Create new ul for subdirectories
      let subUl = document.createElement("ul");
      let subLi:any;
      let subLiTxt:any;
           for (let dir of directories) {
        // Create li element for current subdirectory
        subLi = document.createElement("li");
        // Create text node storing li name
        subLiTxt = document.createTextNode(dir.name);
        // Append text node of li element to node itself
        subLi.appendChild(subLiTxt);
             if (currPath.localeCompare(dir.name.toLowerCase()) == 0) {
          // Add active attribute to current li
          subLi.setAttribute("id","active");
               // No need to continue comparing other links
          break;
        }
             // Append current li element to subdirectory ul
        subUl.appendChild(subLi);
      }
           // Append ul subdirectory to li main directory element
      currLi.appendChild(subUl);
    }*/
    // Append current li element to the ul navigation

    navUl.appendChild(currLi);
  } // Return ul node to be added to the header


  return navUl;
};
},{"./data":4,"./methods":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentFile = void 0;

const getCurrentFile = () => {
  // Get current path location
  let pathName = window.location.pathname; // Split location path to extract file name

  let pathArray = pathName.split("/"); // Last element will contain file name with extension

  let currPg = pathArray[pathArray.length - 1]; // Remove extension '.html' = length of currPg(up to but not including) - 5(length of .html)

  let fileName = currPg.slice(0, currPg.length - 5);
  return fileName;
};

exports.getCurrentFile = getCurrentFile;
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;

var _index = require("./gradient/index");

var _index2 = require("./header/index");

var _index3 = require("./footer/index");

// imports
const init = () => {
  (0, _index.createGradient)();
  (0, _index2.createHeader)();
  (0, _index3.createFooter)();
};

exports.init = init;
},{"./footer/index":2,"./gradient/index":3,"./header/index":5}]},{},[7])(7)
});
