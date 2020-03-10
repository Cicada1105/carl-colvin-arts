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
exports.imgData = exports.infoData = void 0;
const infoData = [{
  header: "About",
  content: "Carl Colvin is a freelance musician, teacher, writer, and " + "editor originally from Chicago, Illinois and now recently residing " + "in the Cincinnati, Ohio area."
}, {
  header: "Listen",
  content: ""
}, {
  header: "Services",
  content: ""
}];
exports.infoData = infoData;
const homeImgsPath = "./resources/home_imgs/";
const imgData = [{
  path: homeImgsPath + "carl_headshot.png",
  alt: "Carl Headshot",
  caption: "Carl Headshot"
}, {
  path: homeImgsPath + "oboe_performance.png",
  alt: "Carl Performing Oboe",
  caption: "Performing with spoken word artist and art curator Kenya Fulton " + "at the Dank Haus in Chicago."
}, {
  path: homeImgsPath + "flight_poem.png",
  alt: "Flight Poem",
  caption: "Flight: Poem written by Carl Colvin and published in America's Best Emerging Poets"
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
  let fig = document.createElement('div');
  fig.setAttribute('class', 'figure'); // Image to display within circular design

  let img = document.createElement('img');
  img.setAttribute('src', currImg.path);
  img.setAttribute('alt', currImg.alt);
  img.setAttribute('class', 'homeImg'); // Circular border to add depth to image

  let imgBorder = document.createElement('img');
  imgBorder.setAttribute('src', './resources/home_imgs/img_border.png');
  imgBorder.setAttribute('class', 'imgBorder');
  let figCaption = document.createElement('div');
  figCaption.setAttribute('class', 'figcaption');
  let figCaptionP = document.createElement('p');
  let figCaptionStr = typeof currImg.caption === "undefined" ? "" : currImg.caption;
  let figCaptionTxt = document.createTextNode(figCaptionStr); // On hovering over imgBorder, fade img itself

  imgBorder.addEventListener('mouseover', () => {
    img.style.filter = 'opacity(50%)';
    figCaption.style.display = 'block';
  }); // On leaving image, img has full opacity

  imgBorder.addEventListener('mouseout', () => {
    img.style.filter = 'opacity(100%)';
    figCaption.style.display = 'none';
  }); // Append caption text to paragraph

  figCaptionP.appendChild(figCaptionTxt); // Append paragraph to caption container

  figCaption.appendChild(figCaptionP);
  fig.appendChild(img);
  fig.appendChild(imgBorder);
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
    let reedCont = document.createElement('div'); // Class to add styling to each price box

    reedCont.setAttribute('class', 'priceBox');
    let reedPricingBox = (0, _methods.createReedPriceBox)(reed); // Append reed pricing box to the reed container

    reedCont.appendChild(reedPricingBox);
    document.body.appendChild(reedCont);
  });
};
},{"./data":10,"./methods":12}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReedPriceBox = void 0;

// These will hold a majority of the methods used to display
// 	content for the reedmaking page
// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage
const createReedPriceBox = reedData => {
  let nameCont = document.createElement('div');
  nameCont.setAttribute('class', 'nameCont'); // Create span element to add styling to only the text element

  let nameSpan = document.createElement('span'); // Add attribute to customize text

  nameSpan.setAttribute('class', 'reedName');
  let nameNode = document.createTextNode(reedData.name); // Append name node to the span element

  nameSpan.appendChild(nameNode); // Container to have the blend mode to allow the text to be different color

  let nameBlendCont = document.createElement('span');
  nameBlendCont.setAttribute('class', 'nameBlend'); // Append Description container to blend container

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
  let cont = document.createElement('div');
  cont.setAttribute('class', 'descriptionCont'); // Create span element to add styling to only the text element

  let span = document.createElement('span'); // Add attribute to customize text

  span.setAttribute('class', 'descriptionName');
  let textNode = document.createTextNode(description); // Append description node to the span element

  span.appendChild(textNode); // Container to have the blend mode to allow text to be different color

  let blendCont = document.createElement('span');
  blendCont.setAttribute('class', 'descriptionBlend'); // Add pricing data container to the description blend

  let pricingCont = createPriceCont(pricing);
  blendCont.appendChild(pricingCont); // Append blend and text to container

  cont.appendChild(span);
  cont.appendChild(blendCont);
  return cont;
}; // Method takes in IPricing Object Array and returns container organized
// 	with passed data


const createPriceCont = priceData => {
  let cont = document.createElement('div');
  cont.setAttribute('class', 'pricingCont'); // Create span element to add styling to only the text element

  let span = document.createElement('span'); // Add attribute to customize text

  span.setAttribute('class', 'pricingName');
  let priceFormat = "";
  priceData.forEach(price => {
    priceFormat += "".concat(price.quantity, " | $").concat(price.cost, "\n");
  });
  let priceNode = document.createTextNode(priceFormat); // Append text to the span node

  span.appendChild(priceNode); // Container to have the blend mode to allow text to be different color

  let blendCont = document.createElement('div');
  blendCont.setAttribute('class', 'pricingBlend'); // Append blend and text to price container

  cont.appendChild(span);
  cont.appendChild(blendCont);
  return cont;
};
},{}],13:[function(require,module,exports){
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

  let imageFade = document.createElement('img');
  imageFade.setAttribute('src', imgLocation);
  imageFade.setAttribute('alt', imgAlternative);
  imageFade.setAttribute('id', 'bgImage'); // Append image to document

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
},{"./data":16}],18:[function(require,module,exports){
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
},{}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
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
},{"./methods":22}],22:[function(require,module,exports){
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
      currLi.setAttribute("id", "active");
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
