(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.begin = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBodyContent = void 0;

var _methods = require("../global/methods");

var _index = require("./pgs/home/index");

var _index2 = require("./pgs/about/index");

var _index3 = require("./pgs/services/index");

var _index4 = require("./pgs/listen/index");

var _index5 = require("./pgs/contact/index");

// Imports
// Different pages
const createBodyContent = () => {
  let currFile = (0, _methods.getCurrentFile)();

  switch (currFile) {
    case 'index':
      (0, _index.loadHomePage)();
      break;

    case 'about':
      (0, _index2.loadAboutPage)();
      break;

    case 'services':
      (0, _index3.loadServicesPage)();
      break;

    case 'listen':
      (0, _index4.loadListenPage)();
      break;

    case 'contact':
      (0, _index5.loadContactPage)();
      break;
  }
};

exports.createBodyContent = createBodyContent;
},{"../global/methods":12,"./pgs/about/index":2,"./pgs/contact/index":3,"./pgs/home/index":5,"./pgs/listen/index":6,"./pgs/services/index":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadAboutPage = void 0;

const loadAboutPage = () => {
  console.log("loading about page");
};

exports.loadAboutPage = loadAboutPage;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadContactPage = void 0;

const loadContactPage = () => {
  console.log("loading contact page");
};

exports.loadContactPage = loadContactPage;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imgData = exports.infoData = void 0;
const infoData = [{
  header: "About",
  content: "Carl Colvin is a freelance musician, teacher, writer, and " + "editor originally from Chicago, Illinois and now recently residing " + "in the Cincinnati, Ohio area"
}, {
  header: "Listen",
  content: ""
}, {
  header: "Services",
  content: ""
}];
exports.infoData = infoData;
const ccImgsPath = "./resources/cc_imgs/";
const imgData = [{
  path: ccImgsPath + "carl_headshot.png",
  alt: "Carl Headshot",
  caption: "Carl Headshot"
}, {
  path: ccImgsPath + "oboe_performance.png",
  alt: "Carl Performing Oboe",
  caption: "Carl Playing Oboe"
}, {
  path: ccImgsPath + "",
  alt: "Carl doing stuff",
  caption: "Carl"
}];
exports.imgData = imgData;
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadHomePage = void 0;

var _data = require("./data");

// Imports
const loadHomePage = () => {
  let numDataRows = _data.infoData.length;
  let currBox;
  let currImg;

  for (let i = 0; i < numDataRows; i++) {
    currBox = infoBox(_data.infoData[i]);
    currImg = imgCont(_data.imgData[i]);
    let dataRow = document.createElement('div');
    dataRow.setAttribute('class', 'row'); // Alternate info boxes and images

    if (i % 2 == 0) {
      currBox.setAttribute('id', 'left');
      currImg.setAttribute('id', 'right');
    } else {
      currImg.setAttribute('id', 'left');
      currBox.setAttribute('id', 'right');
    }

    dataRow.appendChild(currBox);
    dataRow.appendChild(currImg); // Append each row to the page

    document.body.appendChild(dataRow);
  }
};

exports.loadHomePage = loadHomePage;

const infoBox = e => {
  let box = document.createElement('section');
  let h = document.createElement('h3');
  let hText = document.createTextNode(e.header);
  h.appendChild(hText); // Sections contain articles

  let c = document.createElement('p');
  let cText = document.createTextNode(e.content);
  c.appendChild(cText);
  box.appendChild(h);
  box.appendChild(c);
  return box;
};

const imgCont = currImg => {
  // HTML figure contains image and caption
  let fig = document.createElement('figure');
  let img = document.createElement('img');
  img.setAttribute('src', currImg.path);
  img.setAttribute('alt', currImg.alt);
  let figCaption = document.createElement('figcaption');
  let figCaptionStr = typeof currImg.caption === "undefined" ? "" : currImg.caption;
  let figCaptionTxt = document.createTextNode(figCaptionStr);
  figCaption.appendChild(figCaptionTxt);
  fig.appendChild(img);
  fig.appendChild(figCaption);
  return fig;
};
},{"./data":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadListenPage = void 0;

const loadListenPage = () => {
  console.log("loading listen page");
};

exports.loadListenPage = loadListenPage;
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadServicesPage = void 0;

const loadServicesPage = () => {
  console.log("loading services page");
};

exports.loadServicesPage = loadServicesPage;
},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
// Use for development
const imgPath = 'file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/resources/music_imgs/'; // Each page will hold a different image fade
//	 Define associative array

const data = {
  "oboe": {
    path: imgPath + "oboe_sheet_music.png",
    alt: "Oboe and Sheet Music"
  },
  "english_horn": {
    path: imgPath + "",
    alt: "English Horn"
  },
  "poem": {
    path: imgPath + "",
    alt: "Poem"
  }
};
exports.data = data;
},{}],9:[function(require,module,exports){
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
},{"../global/methods":12,"./data":8}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
// Use during development
const imagePath = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/resources/media_imgs"; // Use during production
// const imagePath = "/resources/media_imgs";
// const imagePath = "./resources/media_imgs";
// Data holding info about social media links

const data = [{
  path: imagePath + "/ig_logo.png",
  alt: "instagram",
  link: "https://www.instagram.com/carl_colvin_arts"
}, {
  path: imagePath + "/in_logo.png",
  alt: "linkedin",
  link: "https://www.linkedin.com/in/carl-colvin-68122379"
}, {
  path: imagePath + "/twitter_logo.png",
  alt: "twitter",
  link: "https://twitter.com/CarlColvinArts"
}, {
  path: imagePath + "/fb_logo.png",
  alt: "facebook",
  link: "tbd"
}];
exports.data = data;
},{}],11:[function(require,module,exports){
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
},{"./data":10}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentFile = void 0;

/*
    Global methods shared by the entire project
*/
const getCurrentFile = () => {
  // Get current path location
  let pathName = window.location.pathname; // Split location path to extract file name

  let pathArray = pathName.split("/"); // Last element will contain file name with extension

  let currPg = pathArray[pathArray.length - 1]; // Remove extension '.html' = length of currPg(up to but not including) - 5(length of .html)

  let fileName = currPg.slice(0, currPg.length - 5);
  return fileName;
};

exports.getCurrentFile = getCurrentFile;
},{}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.links = void 0;
// Use during development
const rootDir = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/"; // Use during production
// const rootDir:string = "/";

const links = [{
  name: "Carl Colvin Arts",
  link: rootDir + "index.html",
  subdirectories: []
}, {
  name: "About",
  link: rootDir + "pgs/about.html",
  subdirectories: []
}, {
  name: "Services",
  link: rootDir + "pgs/services/services.html",
  subdirectories: [{
    name: "Writing",
    link: rootDir + "pgs/services/writing.html",
    subdirectories: []
  }, {
    name: "Reedmaking",
    link: rootDir + "pgs/services/reedmaking.html",
    subdirectories: []
  }, {
    name: "Editing",
    link: rootDir + "pgs/services/editing.html",
    subdirectories: []
  }, {
    name: "Performance",
    link: rootDir + "pgs/services/performance.html",
    subdirectories: []
  }]
}, {
  name: "Listen",
  link: rootDir + "pgs/listen.html",
  subdirectories: []
}, {
  name: "Contact",
  link: rootDir + "pgs/contact.html",
  subdirectories: []
}];
exports.links = links;
},{}],15:[function(require,module,exports){
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
},{"./methods":16}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNavigation = void 0;

var _data = require("./data");

var _methods = require("../global/methods");

// This file is used to display navigation 
// Imports
// Current page user is on
const CURRENT_PATH = (0, _methods.getCurrentFile)();

let createNavigation = () => {
  // Create new ul element
  let navUl = document.createElement("ul"); // Add ul element attribute

  navUl.setAttribute("id", "navigation"); // Current link of type ILink

  let link; // Subdirectories of links can be array of ILinks or null

  let directories;

  for (link of _data.links) {
    // Using of when dealing with arrays
    // Create li for current link
    let currLi = document.createElement("li"); // Add text to element

    let txtNode = document.createTextNode(link.name); // Append text to li

    currLi.appendChild(txtNode); // Check if current file matches a link (equivalent => 0)

    if (CURRENT_PATH.localeCompare(link.name.toLowerCase()) == 0) {
      // Add attribute to current li
      currLi.setAttribute("class", "active");
    } // Check if home page to float left: index.html


    if (link.name.localeCompare("Carl Colvin Arts") == 0) {
      // Add id to home page
      currLi.setAttribute("id", "homeLink");
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
  let subUl = document.createElement('ul'); // Each sub directory of the navigation bar has same class name

  subUl.setAttribute('class', 'subDir');

  for (let dir of dirs) {
    // Create the current LI to be appended to UL
    let currSubLi; // Text node to store name property of dir

    let subLiTxtNode; // Create LI element for current subdirectory

    currSubLi = document.createElement("li"); // Create text node storing li name

    subLiTxtNode = document.createTextNode(dir.name); // Append text node of li element to node itself

    currSubLi.appendChild(subLiTxtNode);

    if (CURRENT_PATH.localeCompare(dir.name.toLowerCase()) == 0) {
      // Add active attribute to current li
      currSubLi.setAttribute("id", "active");
    }

    let subLink = dir.link; // Add event listener

    currSubLi.addEventListener("click", () => {
      window.open(subLink, "_self");
    }); // Append current li element to subdirectory ul

    subUl.appendChild(currSubLi);
  }

  return subUl;
};
},{"../global/methods":12,"./data":14}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;

var _index = require("./gradient/index");

var _index2 = require("./bg_img/index");

var _index3 = require("./header/index");

var _index4 = require("./footer/index");

var _index5 = require("./bg_content/index");

// imports
const init = () => {
  (0, _index2.createBgFade)();
  (0, _index.createGradient)();
  (0, _index3.createHeader)();
  (0, _index4.createFooter)();
  (0, _index5.createBodyContent)();
};

exports.init = init;
},{"./bg_content/index":1,"./bg_img/index":9,"./footer/index":11,"./gradient/index":13,"./header/index":15}]},{},[17])(17)
});
