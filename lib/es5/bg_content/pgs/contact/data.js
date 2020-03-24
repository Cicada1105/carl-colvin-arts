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