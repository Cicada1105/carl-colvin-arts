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
  _data.introData.forEach(header => {
    let headerContainer = (0, _privateMethods.createHeaderContent)(header);
    document.body.appendChild(headerContainer);
  });
};

exports.loadIntroData = loadIntroData;

const loadTabs = () => {
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