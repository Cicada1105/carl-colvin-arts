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