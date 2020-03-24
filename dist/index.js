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
},{"../global/methods":26,"./pgs/about/index":2,"./pgs/contact/index":4,"./pgs/home/index":7,"./pgs/listen/index":10,"./pgs/services/index":12}],2:[function(require,module,exports){
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
exports.formData = void 0;
// This file holds the info to be display on the form
const formData = {
  header: "Contact",
  form: [{
    type: "text",
    name: "name",
    displayName: "Name",
    placeholder: "Enter name..."
  }, {
    type: "text",
    name: "email",
    displayName: "Email",
    placeholder: "example@gmail.com"
  }, {
    type: "text",
    name: "subject",
    displayName: "Subject",
    placeholder: "Enter subject..."
  }, {
    type: "text",
    name: "message",
    displayName: "Message",
    placeholder: "Enter message..."
  }],
  submit: {
    type: "button",
    name: "submitBtn",
    value: "Send"
  }
};
exports.formData = formData;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadContactPage = void 0;

var _methods = require("../../../global/methods");

var _data = require("./data");

var _methods2 = require("./methods");

// Imports
//  Global
//  methods
// 	Local
//	data
//  methods
const loadContactPage = () => {
  // Create container to hold contact form
  let formCont = (0, _methods.createElement)({
    idName: "formCont"
  }); // Create element for header

  let headerCont = (0, _methods.createTextElement)({
    element: "h3",
    text: _data.formData.header,
    idName: "headerCont"
  }); // Append header to form container

  formCont.appendChild(headerCont); // Create element for each text input

  _data.formData.form.forEach(input => {
    let formInput = (0, _methods2.loadTextInput)(input); // Append input to form container

    formCont.appendChild(formInput);
  }); // Create element for submit button


  let submitCont = (0, _methods2.loadButtonInput)(_data.formData.submit); // Append submit container to form container

  formCont.appendChild(submitCont);
  document.body.appendChild(formCont);
};

exports.loadContactPage = loadContactPage;
},{"../../../global/methods":26,"./data":3,"./methods":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadButtonInput = exports.loadTextInput = void 0;

var _methods = require("../../../global/methods");

// Local methods to be used by contact page
//  Global
//  methods
const loadTextInput = input => {
  let cont = (0, _methods.createElement)({
    className: "textInput"
  }); // Create text element for name to be displayed for input

  let inputText = (0, _methods.createTextElement)({
    element: "h2",
    text: input.displayName
  }); // Create element for input tag

  let inputTag = (0, _methods.createElement)({
    element: "input",
    idName: input.name
  }); // Set type attribute

  inputTag.setAttribute('type', input.type); // Set placeholder attribute

  inputTag.setAttribute('placeholder', input.placeholder); // Append input text and tag to input container

  cont.appendChild(inputText);
  cont.appendChild(inputTag);
  return cont;
};

exports.loadTextInput = loadTextInput;

const loadButtonInput = input => {
  let cont = (0, _methods.createElement)({
    idName: "submitCont"
  }); // Create container to be used to display messages about the form status

  let msgCont = (0, _methods.createElement)({
    element: "span",
    idName: "formMessage"
  }); // Create button element for submit button

  let submitBtn = (0, _methods.createElement)({
    element: "input",
    idName: input.name
  }); // Set type attribute

  submitBtn.setAttribute("type", input.type); // Set value attribute

  submitBtn.setAttribute("value", input.value); // Append message container and submit button to container

  cont.appendChild(msgCont);
  cont.appendChild(submitBtn);
  return cont;
};

exports.loadButtonInput = loadButtonInput;
},{"../../../global/methods":26}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rows = void 0;
const IMG_PATH = "./resources/home_imgs/"; // Use during development

const ROOT_PGS_DIR = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/pgs/"; // Use during production
//const ROOT_PGS_DIR:string = "/";

const Rows = [{
  infoData: {
    header: "About",
    link: "".concat(ROOT_PGS_DIR, "about.html"),
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
    link: "".concat(ROOT_PGS_DIR, "listen.html"),
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
    link: "".concat(ROOT_PGS_DIR, "services/performance.html"),
    content: "Take part in carl's top tier services. 6 stars out of 5"
  },
  imgData: {
    path: IMG_PATH + "flight_poem.png",
    alt: "Flight Poem",
    caption: 'Flight: Poem written by Carl Colvin and published in Z Publishing\'s "America\'s Best Emerging Poets" anthology'
  }
}];
exports.Rows = Rows;
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadHomePage = void 0;

var _load_methods = require("./load_methods");

// Imports
// methods
const loadHomePage = () => {
  // Load bootstrap to allow Font Awesome to be used
  (0, _load_methods.loadBootstrap)(); // Load Rows

  (0, _load_methods.loadRows)(); // Load previous for listen container

  (0, _load_methods.loadListenPreview)();
};

exports.loadHomePage = loadHomePage;
},{"./load_methods":8}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadListenPreview = exports.loadRows = exports.loadBootstrap = void 0;

var _methods = require("../../../global/methods");

var _special_methods = require("./special_methods");

var _data = require("./data");

// Imports
// 	methods
//	global
//	local
// 	data
const IMAGE_DIR = './resources/home_imgs/';

const loadBootstrap = () => {
  // Create link tag for Bootstrap Font Awesome icons
  let bootstrapLink = document.createElement('script'); // Add href attribute

  bootstrapLink.setAttribute('src', 'https://kit.fontawesome.com/296e9763f7.js'); // Append Bootstrap cdn to head for font asesome icons

  document.head.appendChild(bootstrapLink);
};

exports.loadBootstrap = loadBootstrap;

const loadRows = () => {
  let currBox;
  let currImg;

  _data.Rows.forEach((row, i) => {
    currBox = (0, _special_methods.infoBox)(row.infoData);
    currImg = (0, _special_methods.imgCont)(row.imgData); // createElement's default element is div

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

exports.loadRows = loadRows;

const loadListenPreview = () => {
  // Container to hold image and Font Awesome Icon
  let cont = (0, _methods.createElement)({
    idName: "listenImageCont"
  }); // Create Image Element to add to image container

  let listenImg = (0, _methods.createImageElement)({
    src: "".concat(IMAGE_DIR, "kao_ra_zen_album_cover.jpg"),
    alt: "Kao Rao Zen Album Cover",
    idName: "listenImage"
  }); // Add event listener to image to activate sound and switch icon

  listenImg.addEventListener('click', () => {
    volumeIcon.className = volumeIcon.className.indexOf("up") >= 0 ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    if (audioEl.paused) audioEl.play();else audioEl.pause();
  }); // Create audio element

  let audioEl = (0, _methods.createElement)({
    element: 'audio',
    idName: 'audioExcerpt'
  });
  audioEl.setAttribute('controls', ''); // Create source element

  let audioSrc = document.createElement('source');
  audioSrc.setAttribute('src', './resources/media/kenya-lifestream.wav');
  audioSrc.setAttribute('type', 'audio/wav'); // Append audio source to audio element

  audioEl.appendChild(audioSrc); // Start current time at 1:48(108 seconds);

  audioEl.currentTime = 108; // Add event listener to audio element

  audioEl.ontimeupdate = () => {
    if (audioEl.currentTime >= 161) {
      audioEl.currentTime = 108;
      audioEl.pause();
    }
  }; // Create container to hold font awesome icon


  let volumeIcon = (0, _methods.createElement)({
    element: 'i',
    className: 'fas fa-volume-mute'
  }); // Add event listener to icon to activate sound and switch icon

  volumeIcon.addEventListener('click', () => {
    volumeIcon.className = volumeIcon.className.indexOf("up") >= 0 ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    if (audioEl.paused) audioEl.play();else audioEl.pause();
  }); // Append image and icon to Listen Image Container

  cont.appendChild(listenImg);
  cont.appendChild(volumeIcon); // locate listen section element

  let listenEl = document.getElementsByClassName('row')[1].firstChild;
  listenEl.appendChild(cont);
};

exports.loadListenPreview = loadListenPreview;
},{"../../../global/methods":26,"./data":6,"./special_methods":9}],9:[function(require,module,exports){
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
  }); // Add event listener to header to redirect user to specific page

  h.addEventListener("click", () => {
    window.open(e.link, "_self");
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
},{"../../../global/methods":26}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadListenPage = void 0;

const loadListenPage = () => {
  console.log("loading listen page");
};

exports.loadListenPage = loadListenPage;
},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadEditingPage = void 0;

const loadEditingPage = () => {
  console.log("Loading Editing Page");
};

exports.loadEditingPage = loadEditingPage;
},{}],12:[function(require,module,exports){
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
},{"../../../global/methods":26,"./editing/index":11,"./performance/index":14,"./reedmaking/index":18,"./writing/index":21}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headerData = void 0;
// This file holds the data specific to the Performance page
const IMG_PATH = "../../resources/performance_imgs/";
const headerData = {
  "performance": {
    header: "Performance",
    image: {
      path: IMG_PATH + "treble_clef.png",
      alt: "Treble Clef Symbol"
    }
  },
  "previous_performances": {
    header: "Previous Performances",
    image: {
      path: IMG_PATH + "eighth_note.png",
      alt: "Eighth Note Symbol"
    }
  },
  "rates": {
    header: "Rates",
    image: {
      path: IMG_PATH + "bass_clef.png",
      alt: "Bass Clef Symbol"
    }
  }
};
exports.headerData = headerData;
},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPerformancePage = void 0;

var _load_methods = require("./load_methods");

// Imports
const loadPerformancePage = () => {
  // Load intro to the Performance page
  (0, _load_methods.loadPerformanceIntro)(); // Load section to display/discuss previous performances

  (0, _load_methods.loadPreviousPerformances)(); // Load rates for user to view 

  (0, _load_methods.loadRates)();
};

exports.loadPerformancePage = loadPerformancePage;
},{"./load_methods":15}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadRates = exports.loadPreviousPerformances = exports.loadPerformanceIntro = void 0;

var _data = require("./data");

var _special_methods = require("./special_methods");

// This file holds the load methods for the individual
// 	sections on the performance page
// Imports
// data
// methods
const loadPerformanceIntro = () => {
  (0, _special_methods.createImageHeader)(_data.headerData['performance']);
};

exports.loadPerformanceIntro = loadPerformanceIntro;

const loadPreviousPerformances = () => {
  (0, _special_methods.createImageHeader)(_data.headerData['previous_performances']);
};

exports.loadPreviousPerformances = loadPreviousPerformances;

const loadRates = () => {
  (0, _special_methods.createImageHeader)(_data.headerData['rates']);
};

exports.loadRates = loadRates;
},{"./data":13,"./special_methods":16}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createImageHeader = void 0;

var _methods = require("../../../../global/methods");

// Special methods used by the Performance page
// Can be used by methods specified in load_methods.ts
// methods
// Methods will take in an object of type ImageHeaderInterface
// Returns relative container with proper designed
const createImageHeader = headerData => {
  // Container to hold every element of the header
  let cont = (0, _methods.createElement)({
    className: "imageHeaderCont"
  });
  let centerCont = createCenterImageHeader(headerData); // "hr" element to be display on left of header and images
  //let leftHrCont:any = createElement({className:"hrCont",idName:"leftHrCont"});
  //let leftHr:any = createElement({element:"hr",className:"",idName:"hrLeft"});
  // Append hr to it's container to be later used to calculate sizing
  //leftHrCont.appendChild(leftHr);
  // "hr" element to be display on right of header and images
  //let rightHrCont:any = createElement({className:"hrCont",idName:"rightHrCont"});
  //let rightHr:any = createElement({element:"hr",idName:"hrRight"});
  // Append hr to it's container to be later used to calculate sizing
  //rightHrCont.appendChild(rightHr);
  // Append elements to parent container
  //cont.appendChild(leftHrCont);

  cont.appendChild(centerCont); //cont.appendChild(rightHrCont);
  // Apend Container to document

  document.body.appendChild(cont);
};

exports.createImageHeader = createImageHeader;

const createCenterImageHeader = headerData => {
  let cont = (0, _methods.createElement)({
    className: "centerHeaderCont"
  }); // Musical symbol to be display on left side of header

  let leftSymbol = (0, _methods.createImageElement)({
    src: headerData.image.path,
    alt: headerData.image.alt,
    className: "musicalSymbol"
  }); // Header text to be at the center of the container

  let header = (0, _methods.createTextElement)({
    element: "h3",
    text: headerData.header
  }); // Musical symbol to be display on right side of header

  let rightSymbol = (0, _methods.createImageElement)({
    src: headerData.image.path,
    alt: headerData.image.alt,
    className: "musicalSymbol"
  }); // Append Header and Symbols to center container

  cont.appendChild(leftSymbol);
  cont.appendChild(header);
  cont.appendChild(rightSymbol);
  return cont;
};
},{"../../../../global/methods":26}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pricingData = exports.tabData = exports.introData = void 0;
const introData = ["Reeds are hard, whether to play on or make. There's no getting around it. However, that " + "shouldn't stop you from playing at your best, and that is why I offer reedmaking services.", "I have been making reeds for 11 years and, like many other professional oboists, offer " + "them to the public for sale. My reeds are all handmade from start to finish, from tube " + "cane to performance-ready, and will not leave my hand until they are play-tested and at " + "a level that I would perform on them myself.", "My sale price reflects my years of experience in reeds and the cane itself. However, I " + "completely understand that everyone is different and may not like my reeds. If this is " + "the case, I would love the opportunity to make it right and get the best reed that fits " + "all your needs. If any of your needs are more immediate, I am more than happy to work with " + "you. I normally create and ship reeds within a week of receiving payment, Please reach me " + "via the \"Contact\" tab with any orders, issues, and special instructions."];
exports.introData = introData;
const tabData = [{
  header: "Reed Strength",
  descriptions: ["Medium-Easy:Reeds for players who need lighter resistance, faster response, " + "and flexible pitch. These are suggested for younger players or adults just " + "starting off.", "Medium: Reeds with a balance of stability, reliable resistance, and more " + "resistance to blow against than a medium-easy reed. These are what I use in " + "my everyday playing.", "Medium-Hard: Reeds with a bit more wood left on them, resulting in a larger " + "opening than a medium reed. These reeds are definitely still playable with " + "appropriate pitch and balance but require more air and support. These are intended " + "for experienced players who like more resistance or want a reed they can adjust."]
}, {
  header: "Gouge and Shape Details",
  descriptions: ["My oboe reeds are made from 10.5-11mm diameter cane, pre-gouged on a Ross " + "planer, and gouged on an Innoledy gouger. My English horn cane is also processed " + "on a Ross planer and Innoledy gouger and is measured from 11.5-12mm diamerer cane.", "My usual oboe shapes are Gilbert -1, Gilbert 1, and Caleb -1, though there " + "will be more to come... Gilbert shapes provide a beautifully focused sound " + "that nicely balances projection and stability. The Caleb shape provides even " + "more projection than the Gilbert shapes and a free sound meant to reach the " + "back of the concert hall.", "At the moment, my sole English horn shape is Jeanne standard.", "Leave a note in your order, and I will be happy to use any shape you would like."]
}, {
  header: "Staples and Tubes",
  descriptions: ["The staples and tubes I personally use are Pisoni silver staples at 47mm " + "length for oboe and brass Pisoni tubes for English horn. The staples I use " + "for others are Pisoni silver, brass Chiarugi 2's, and synthetic cork 47mm " + "length staples. The English horn reeds I make for others are also brass " + "Pisoni tubes but also Chudnow gold tubes.", "Synthetic cork staples are great for student players  They are durable " + "and easily managed for the rigors of a student's playing.", "Pisoni staples and tubes provide a wonderfully dark sound that does not " + "bog down on itself but that also projects well in the concert hall.", "Both Chiarugi and Chudnow staples and tubes provide the opposite affect: " + "a very lively sound that responds extremely well due to their thinner walls."]
}];
exports.tabData = tabData;
const pricingData = [{
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
exports.pricingData = pricingData;
},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadReedmakingPage = void 0;

var _loadMethods = require("./load-methods");

// Imports
const loadReedmakingPage = () => {
  // Load data introducing reeds to user
  (0, _loadMethods.loadIntroData)(); // Load tabs that hold Reed data

  (0, _loadMethods.loadTabs)(); // Load the reed pricings
  //loadPricings();
};

exports.loadReedmakingPage = loadReedmakingPage;
},{"./load-methods":19}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPricings = exports.loadTabs = exports.loadIntroData = void 0;

var _data = require("./data");

var _privateMethods = require("./private-methods");

var _methods = require("../../../../global/methods");

// This file is meant to abstract from the index.ts file
// File dependencies will be handled here
// Imports
const loadIntroData = () => {
  let introHeaderCont = (0, _methods.createElement)({
    className: 'reedmakingHeader'
  });
  let leftReed = (0, _methods.createImageElement)({
    src: '../../resources/reedmaking_imgs/reed.png',
    alt: 'Reed silhouette',
    className: 'reed_silhouette',
    idName: 'leftReed'
  });
  let introHeader = (0, _methods.createTextElement)({
    element: 'h3',
    text: 'Reedmaking'
  });
  let rightReed = (0, _methods.createImageElement)({
    src: '../../resources/reedmaking_imgs/reed.png',
    alt: 'Reed silhouette',
    className: 'reed_silhouette',
    idName: 'rightReed'
  });
  introHeaderCont.appendChild(leftReed);
  introHeaderCont.appendChild(introHeader);
  introHeaderCont.appendChild(rightReed);
  document.body.appendChild(introHeaderCont);
};

exports.loadIntroData = loadIntroData;

const loadTabs = () => {
  let aboutHeaderCont = (0, _methods.createElement)({
    className: 'reedmakingHeader'
  });
  let leftReed = (0, _methods.createImageElement)({
    src: '../../resources/reedmaking_imgs/reed.png',
    alt: 'Reed silhouette',
    className: 'reed_silhouette',
    idName: 'leftReed'
  });
  let aboutHeader = (0, _methods.createTextElement)({
    element: 'h3',
    text: 'About'
  });
  let rightReed = (0, _methods.createImageElement)({
    src: '../../resources/reedmaking_imgs/reed.png',
    alt: 'Reed silhouette',
    className: 'reed_silhouette',
    idName: 'rightReed'
  });
  aboutHeaderCont.appendChild(leftReed);
  aboutHeaderCont.appendChild(aboutHeader);
  aboutHeaderCont.appendChild(rightReed);
  document.body.appendChild(aboutHeaderCont);

  _data.tabData.forEach(tab => {
    let tabCont = (0, _methods.createElement)({
      className: 'tabCont'
    }); // Create container to hold header and button to activate dropdown 

    let tabHeaderCont = (0, _methods.createElement)({
      className: 'tabHeaderCont'
    }); // Header Content
    // Header

    let tabHeader = (0, _methods.createTextElement)({
      element: 'h3',
      text: tab.header,
      className: 'tabHeader'
    }); // Button -> Stylized with CSS

    let tabButton = (0, _methods.createElement)({
      className: 'tabButton'
    }); // Append header data to header container

    tabHeaderCont.appendChild(tabHeader);
    tabHeaderCont.appendChild(tabButton); // Create container to hold dropdown content

    let tabBody = (0, _methods.createElement)({
      className: 'tabBody'
    }); // Body Content

    tab.descriptions.forEach(description => {
      // createTextElement's default element is 'p'
      let p = (0, _methods.createTextElement)({
        text: description
      }); // Append paragraph description and break to dropdown

      tabBody.appendChild(p);
    });
    /*  Event Listeners  */

    tabButton.addEventListener('click', function () {
      // Tab Button animation
      tabButton.style.animationPlayState = "running";
      tabButton.style.animationName = tabButton.style.animationName === "plusMinus" ? "minusPlus" : "plusMinus"; // Tab Body animation

      tabBody.style.animationPlayState = "running";
      tabBody.style.animationName = tabBody.style.animationName === "dropdownOpen" ? "dropdownClose" : "dropdownOpen"; // Paragraph animation

      tabBody.childNodes.forEach(function (p) {
        p.style.animationPlayState = "running";
        p.style.animationName = p.style.animationName === "dropdownPOpen" ? "dropdownPClose" : "dropdownPOpen";
      });
    }); // Append header and body container to tab container 

    tabCont.appendChild(tabHeaderCont);
    tabCont.appendChild(tabBody); // Append tab container to document

    document.body.appendChild(tabCont);
  });
};

exports.loadTabs = loadTabs;

const loadPricings = () => {
  // Create reed pricing container for each Reed
  _data.pricingData.forEach(reed => {
    // Create container that will be used to help with sizing and positioning
    // createElement's default element is 'div'
    let reedCont = (0, _methods.createElement)({
      className: 'priceBox'
    });
    let reedPricingBox = (0, _privateMethods.createReedPriceBox)(reed); // Append reed pricing box to the reed container

    reedCont.appendChild(reedPricingBox);
    document.body.appendChild(reedCont);
  });
};

exports.loadPricings = loadPricings;
},{"../../../../global/methods":26,"./data":17,"./private-methods":20}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReedPriceBox = void 0;

var _methods = require("../../../../global/methods");

// These will hold a majority of the methods used to display
// 	content for the reedmaking page

/************************************/

/*		Reed Pricings Container 	*/

/************************************/
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
},{"../../../../global/methods":26}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadWritingPage = void 0;

const loadWritingPage = () => {
  console.log("Loading writing page");
};

exports.loadWritingPage = loadWritingPage;
},{}],22:[function(require,module,exports){
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
    path: imgPath + "",
    alt: ""
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
    path: imgPath + "english_horn_sheet_music.jpg",
    alt: "English Horn"
  },
  "contact": {
    path: imgPath + "",
    alt: "Some picture of carl maybe"
  }
};
exports.data = data;
},{}],23:[function(require,module,exports){
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
},{"../global/methods":26,"./data":22}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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
},{"../global/methods":26,"./data":24}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
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
},{"../global/methods":26}],28:[function(require,module,exports){
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
},{}],29:[function(require,module,exports){
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
},{"../global/methods":26,"./methods":30}],30:[function(require,module,exports){
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
},{"../global/methods":26,"./data":28}],31:[function(require,module,exports){
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
},{"./bg_content/index":1,"./bg_img/index":23,"./footer/index":25,"./gradient/index":27,"./header/index":29}]},{},[31])(31)
});
