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
  // Load data introducing reeds to user
  loadIntroData(); // Load tabs that hold Reed data

  loadTabs(); // Load the reed pricings
  //loadPricings();
};

exports.loadReedmakingPage = loadReedmakingPage;

const loadIntroData = () => {};

const loadTabs = () => {
  _data.tabData.forEach(tab => {
    let tabCont = (0, _methods2.createElement)({
      className: 'tabCont'
    }); // Create container to hold header and button to activate dropdown 

    let tabHeaderCont = (0, _methods2.createElement)({
      className: 'tabHeaderCont'
    }); // Header Content
    // Header

    let tabHeader = (0, _methods2.createTextElement)({
      element: 'h3',
      text: tab.header,
      className: 'tabHeader'
    }); // Button -> Stylized with CSS

    let tabButton = (0, _methods2.createElement)({
      className: 'tabButton'
    });
    tabButton.addEventListener('click', function () {
      tabButton.style.animationPlayState = "running";
      tabButton.style.animationName = tabButton.style.animationName == "plusMinus" ? "minusPlus" : "plusMinus";
    }); // Append header data to header container

    tabHeaderCont.appendChild(tabHeader);
    tabHeaderCont.appendChild(tabButton); // Create container to hold dropdown content

    let tabBody = (0, _methods2.createElement)({
      className: 'tabBody'
    }); // Body Content
    //		tab.descriptions.forEach(description => {
    // createTextElement's default element is 'p'
    //			let p:any = createTextElement({text:description});
    // Append paragraph description to dropdown
    //			tabBody.appendChild(p);
    //		});
    // Append header and body container to tab container 

    tabCont.appendChild(tabHeaderCont);
    tabCont.appendChild(tabBody); // Append tab container to document

    document.body.appendChild(tabCont);
  });
};

const loadPricings = () => {
  // Create reed pricing container for each Reed
  _data.pricingData.forEach(reed => {
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