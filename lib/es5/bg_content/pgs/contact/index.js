"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadContactPage = void 0;

var _methods = require("../../../global/methods");

var _data = require("./data");

var _load_methods = require("./load_methods");

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
    element: "h1",
    text: _data.formData.header
  }); // Append header to form container

  formCont.appendChild(headerCont); // Create element for each text input

  _data.formData.form.forEach(input => {
    let formInput = (0, _load_methods.loadTextInput)(input); // Append input to form container

    formCont.appendChild(formInput);
  }); // Create element for submit button


  let submitCont = (0, _load_methods.loadButtonInput)(_data.formData.submit); // Append submit container to form container

  formCont.appendChild(submitCont);
  document.body.appendChild(formCont);
};

exports.loadContactPage = loadContactPage;