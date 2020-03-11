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

    case 'listen':
      (0, _index4.loadListenPage)();
      break;

    case 'contact':
      (0, _index5.loadContactPage)();
      break;

    default:
      (0, _index3.loadServicesPage)();
    // Doesn't have it's own home page so will redirect to loading specific page
  }
};

exports.createBodyContent = createBodyContent;
},{"../global/methods":18,"./pgs/about/index":2,"./pgs/contact/index":3,"./pgs/home/index":5,"./pgs/listen/index":6,"./pgs/services/index":8}],2:[function(require,module,exports){
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
exports.Rows = void 0;
const IMG_PATH = "./resources/home_imgs/";
const Rows = [{
  infoData: {
    header: "About",
    content: "Carl Colvin is a freelance musician, teacher, writer, and " + "editor originally from Chicago, Illinois and now recently residing " + "in the Cincinnati, Ohio area."
  },
  imgData: {
    path: IMG_PATH + "carl_headshot.png",
    alt: "Carl Headshot",
    caption: "Carl Headshot"
  }
}, {
  infoData: {
    header: "Listen",
    content: "Listen to carl's best moooosic"
  },
  imgData: {
    path: IMG_PATH + "oboe_performance.png",
    alt: "Carl Performing Oboe",
    caption: "Performing with spoken word artist and art curator Kenya Fulton " + "at the Dank Haus in Chicago."
  }
}, {
  infoData: {
    header: "Services",
    content: "Take part in carl's top tier services. 6 stars out of 5"
  },
  imgData: {
    path: IMG_PATH + "flight_poem.png",
    alt: "Flight Poem",
    caption: "Flight: Poem written by Carl Colvin and published in America's Best Emerging Poets"
  }
}];
exports.Rows = Rows;
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadHomePage = void 0;

var _data = require("./data");

var _methods = require("../../../global/methods");

// Imports
const loadHomePage = () => {
  let currBox;
  let currImg;

  _data.Rows.forEach((row, i) => {
    currBox = infoBox(row.infoData);
    currImg = imgCont(row.imgData); // createElement's default element is div

    let dataRow = (0, _methods.createElement)({
      className: 'row'
    }); // Alternate info boxes and images

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
  });
};

exports.loadHomePage = loadHomePage;

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
    src: './resources/home_imgs/img_border.png',
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
},{"../../../global/methods":18,"./data":4}],6:[function(require,module,exports){
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
exports.loadEditingPage = void 0;

const loadEditingPage = () => {
  console.log("Loading Editing Page");
};

exports.loadEditingPage = loadEditingPage;
},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadServicesPage = void 0;

var _methods = require("../../../global/methods");

var _index = require("./editing/index");

var _index2 = require("./performance/index");

var _index3 = require("./reedmaking/index");

var _index4 = require("./writing/index");

// This file will handle which services page to load based on the current file
// Imports
const loadServicesPage = () => {
  let currPage = (0, _methods.getCurrentFile)();

  switch (currPage) {
    case "editing":
      (0, _index.loadEditingPage)();
      break;

    case "performance":
      (0, _index2.loadPerformancePage)();
      break;

    case "reedmaking":
      (0, _index3.loadReedmakingPage)();
      break;

    case "writing":
      (0, _index4.loadWritingPage)();
      break;
  }
};

exports.loadServicesPage = loadServicesPage;
},{"../../../global/methods":18,"./editing/index":7,"./performance/index":9,"./reedmaking/index":11,"./writing/index":13}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPerformancePage = void 0;

const loadPerformancePage = () => {
  console.log("Loading Performance Page");
};

exports.loadPerformancePage = loadPerformancePage;
},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
const data = [{
  name: "Reed 1",
  description: "Has very good cane. Da best",
  pricing: [{
    quantity: 5,
    cost: 50
  }, {
    quantity: 10,
    cost: 90
  }, {
    quantity: 20,
    cost: 160
  }]
}, {
  name: "Reed 2",
  description: "Has really good cane. Better dan da best",
  pricing: [{
    quantity: 5,
    cost: 60
  }, {
    quantity: 10,
    cost: 110
  }, {
    quantity: 20,
    cost: 180
  }]
}, {
  name: "Reed 3",
  description: "Has amazing cane. Top of da line",
  pricing: [{
    quantity: 5,
    cost: 75
  }, {
    quantity: 10,
    cost: 140
  }, {
    quantity: 20,
    cost: 240
  }]
}];
exports.data = data;
},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadReedmakingPage = void 0;

var _data = require("./data");

var _methods = require("./methods");

var _methods2 = require("../../../../global/methods");

// Imports
const loadReedmakingPage = () => {
  // Load reed images and descriptions
  loadReedImages(); // Load the reed pricings

  loadPricings();
};

exports.loadReedmakingPage = loadReedmakingPage;

const loadReedImages = () => {
  console.log("loading images");
};

const loadPricings = () => {
  // Create reed pricing container for each Reed
  _data.data.forEach(reed => {
    // Create container that will be used to help with sizing and positioning
    // createElement's default element is 'div'
    let reedCont = (0, _methods2.createElement)({
      className: 'priceBox'
    });
    let reedPricingBox = (0, _methods.createReedPriceBox)(reed); // Append reed pricing box to the reed container

    reedCont.appendChild(reedPricingBox);
    document.body.appendChild(reedCont);
  });
};
},{"../../../../global/methods":18,"./data":10,"./methods":12}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReedPriceBox = void 0;

var _methods = require("../../../../global/methods");

// These will hold a majority of the methods used to display
// 	content for the reedmaking page
// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage
const createReedPriceBox = reedData => {
  let nameCont = (0, _methods.createElement)({
    element: 'div',
    className: 'nameCont'
  }); // Create span element to add styling to only the text element

  let nameSpan = (0, _methods.createTextElement)({
    element: 'span',
    text: reedData.name,
    className: 'reedName'
  }); // Container to have the blend mode to allow the text to be different color

  let nameBlendCont = (0, _methods.createElement)({
    element: 'div',
    className: 'nameBlend'
  }); // Append Description container to blend container

  let descriptionCont = createDescriptionCont(reedData);
  nameBlendCont.appendChild(descriptionCont); // Append blend and text to container

  nameCont.appendChild(nameSpan);
  nameCont.appendChild(nameBlendCont); // Return name container that holds the description and pricing children

  return nameCont;
};

exports.createReedPriceBox = createReedPriceBox;

const createDescriptionCont = (_ref) => {
  let {
    description,
    pricing
  } = _ref;
  // createElement's default element is div
  let cont = (0, _methods.createElement)({
    className: 'descriptionCont'
  }); // Create span element to add styling to only the text element

  let span = (0, _methods.createTextElement)({
    element: 'span',
    text: description,
    className: 'descriptionName'
  }); // Container to have the blend mode to allow text to be different color

  let blendCont = (0, _methods.createElement)({
    className: 'descriptionBlend'
  }); // Add pricing data container to the description blend

  let pricingCont = createPriceCont(pricing);
  blendCont.appendChild(pricingCont); // Append blend and text to container

  cont.appendChild(span);
  cont.appendChild(blendCont);
  return cont;
}; // Method takes in IPricing Object Array and returns container organized
// 	with passed data


const createPriceCont = priceData => {
  // createElement's default element is div
  let cont = (0, _methods.createElement)({
    className: 'pricingCont'
  });
  let priceFormat = "";
  priceData.forEach(price => {
    priceFormat += "".concat(price.quantity, " | $").concat(price.cost, "\n");
  }); // Create span element to add styling to only the text element

  let span = (0, _methods.createTextElement)({
    element: 'span',
    text: priceFormat,
    className: 'pricingName'
  }); // Container to have the blend mode to allow text to be different color

  let blendCont = (0, _methods.createElement)({
    className: 'pricingBlend'
  }); // Append blend and text to price container

  cont.appendChild(span);
  cont.appendChild(blendCont);
  return cont;
};
},{"../../../../global/methods":18}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadWritingPage = void 0;

const loadWritingPage = () => {
  console.log("Loading writing page");
};

exports.loadWritingPage = loadWritingPage;
},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
// Use for development
const imgPath = 'file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/resources/bg_imgs/'; // Each page will hold a different image fade
//	 Define associative array

const data = {
  "": {
    path: imgPath + "oboe_sheet_music.jpg",
    alt: "Oboe and Sheet Music"
  },
  "index": {
    path: imgPath + "oboe_sheet_music.jpg",
    alt: "Oboe and Sheet Music"
  },
  "about": {
    path: imgPath + "english_horn_sheet_music.jpg",
    alt: "English Horn"
  },
  "reedmaking": {
    path: imgPath + "reedmaking_bg.jpg",
    alt: "Reeds with sharpening tools and woodblock"
  },
  "writing": {
    path: imgPath + "flight_poem.jpg",
    alt: "Poem"
  },
  "performance": {
    path: imgPath + "carl_red_pew.jpg",
    alt: "Playing oboe in church pew"
  },
  "editing": {
    path: imgPath + "",
    alt: "Editing"
  },
  "listen": {
    path: imgPath + "rand_reeds.jpg",
    alt: "Extra reed pic"
  },
  "contact": {
    path: imgPath + "",
    alt: "Some picture of carl"
  }
};
exports.data = data;
},{}],15:[function(require,module,exports){
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

  let imageFade = (0, _methods.createImageElement)({
    src: imgLocation,
    alt: imgAlternative,
    idName: 'bgImage'
  }); // Append image to document

  document.body.appendChild(imageFade);
};

exports.createBgFade = createBgFade;
},{"../global/methods":18,"./data":14}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
// Use during development
const imagePath = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/resources/media_imgs"; // Use during production
//const imagePath = "./resources/media_imgs";
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
},{}],17:[function(require,module,exports){
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
},{"../global/methods":18,"./data":16}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
exports.createTextElement = createTextElement;
exports.createImageElement = createImageElement;
exports.getCurrentFile = void 0;

/*
    Global methods shared by the entire project
*/
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

const getCurrentFile = () => {
  // Get current path location
  let pathName = window.location.pathname; // Split location path to extract file name

  let pathArray = pathName.split("/"); // Last element will contain file name with extension

  let currPg = pathArray[pathArray.length - 1]; // Remove extension '.html' = length of currPg(up to but not including) - 5(length of .html)

  let fileName = currPg.slice(0, currPg.length - 5);
  return fileName;
};

exports.getCurrentFile = getCurrentFile;

function createElement(_ref) {
  let {
    element = "div",
    className = "",
    idName = ""
  } = _ref;

  try {
    if (!className && !idName) throw new TypeError("className or idName ommited. createElement requires either one.");
    let e = document.createElement(element);
    if (className) e.setAttribute('class', className);
    if (idName) e.setAttribute('id', idName);
    return e;
  } catch (e) {
    console.log(e);
    return;
  }
}

function createTextElement(_a) {
  var {
    element = "p",
    text = ""
  } = _a,
      rest = __rest(_a, ["element", "text"]);

  try {
    if (!text) throw new TypeError("'text' string omitted. createTextElement requires 'text' parameter");
    let el = document.createElement(element);
    if (rest.className) el.setAttribute('class', rest.className);
    if (rest.idName) el.setAttribute('id', rest.idName);
    let txt = text;
    let txtNode = document.createTextNode(txt);
    el.appendChild(txtNode);
    return el;
  } catch (e) {
    console.log(e);
  }
}

function createImageElement(_a) {
  var {
    src = '',
    alt = ''
  } = _a,
      rest = __rest(_a, ["src", "alt"]);

  try {
    if (!src) throw new TypeError("'src' parameter ommited. createImageElement requires 'src' parameter");
    let img = document.createElement('img');
    img.setAttribute('src', src);
    if (alt) img.setAttribute('alt', alt);
    if (rest.className) img.setAttribute('class', rest.className);
    if (rest.idName) img.setAttribute('id', rest.idName);
    return img;
  } catch (e) {
    console.log(e);
  }
}
},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGradient = void 0;

var _methods = require("../global/methods");

// This files creates the gradient effect that will be displayed on every page
// Imports
// global
const createGradient = () => {
  let cvsEl = (0, _methods.createElement)({
    element: 'canvas',
    idName: 'bgCanvas'
  });
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
},{"../global/methods":18}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.links = void 0;
// Use during development
const rootDir = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/"; // Use during production
//const rootDir:string = "/";

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
  link: "",
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
},{}],21:[function(require,module,exports){
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
},{"../global/methods":18,"./methods":22}],22:[function(require,module,exports){
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
},{"../global/methods":18,"./data":20}],23:[function(require,module,exports){
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
},{"./bg_content/index":1,"./bg_img/index":15,"./footer/index":17,"./gradient/index":19,"./header/index":21}]},{},[23])(23)
});
