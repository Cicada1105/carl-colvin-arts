"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.links = void 0;
// Use during development
const rootDir = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/"; // Use during production
<<<<<<< HEAD
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
    name: "Reedmaking",
    link: rootDir + "pgs/services/reedmaking.html",
    subdirectories: []
  }, {
    name: "Editing",
    link: rootDir + "pgs/services/editing.html",
    subdirectories: []
  }, {
    name: "Writing",
    link: rootDir + "pgs/services/writing.html",
    subdirectories: []
  }, {
    name: "Performance",
    link: rootDir + "pgs/services/performance.html",
=======
// const rootDir:string = "./";

const links = [{
  name: "Carl Colvin Arts",
  path: rootDir + "index.html",
  subdirectories: []
}, {
  name: "About",
  path: rootDir + "pgs/about.html",
  subdirectories: []
}, {
  name: "Services",
  path: rootDir + "pgs/services/services.html",
  subdirectories: [{
    name: "Reedmaking",
    path: rootDir + "pgs/services/reedmaking.html",
    subdirectories: []
  }, {
    name: "Editing",
    path: rootDir + "pgs/services/editing.html",
    subdirectories: []
  }, {
    name: "Writing",
    path: rootDir + "pgs/services/writing.html",
    subdirectories: []
  }, {
    name: "Performance",
    path: rootDir + "pgs/services/performance.html",
>>>>>>> d059214a6136458e41404eee42c501a56b10346c
    subdirectories: []
  }]
}, {
  name: "Listen",
<<<<<<< HEAD
  link: rootDir + "pgs/listen.html",
  subdirectories: []
}, {
  name: "Contact",
  link: rootDir + "pgs/contact.html",
=======
  path: rootDir + "pgs/listen.html",
  subdirectories: []
}, {
  name: "Contact",
  path: rootDir + "pgs/contact.html",
>>>>>>> d059214a6136458e41404eee42c501a56b10346c
  subdirectories: []
}];
exports.links = links;