(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.begin = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNavigation = void 0;

const createNavigation = () => {
  const navigation = [{
    name: "About",
    subdirectories: []
  }, {
    name: "Services",
    subdirectories: [{
      name: "Reedmaking",
      subdirectories: {}
    }, {
      name: "Editing",
      subdirectories: {}
    }, {
      name: "Writing",
      subdirectories: {}
    }, {
      name: "Performance",
      subdirectories: {}
    }]
  }, {
    name: "Listen",
    subdirectories: []
  }, {
    name: "Contact",
    subdirectories: []
  }];
  let pathName = window.location.pathname;
  let pathArray = pathName.split("/");
};

exports.createNavigation = createNavigation;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;

var _gradient = require("./gradient");

var _navigation = require("./navigation");

// imports
const init = () => {
  (0, _gradient.createGradient)();
  (0, _navigation.createNavigation)();
  alert("It's working");
};

exports.init = init;
},{"./gradient":1,"./navigation":2}]},{},[3])(3)
});
