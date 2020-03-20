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
  }); // Create container to hold font awesome icon

  let volumeIcon = (0, _methods.createElement)({
    element: 'i',
    className: 'fas fa-volume-up'
  }); // Add event listener to icon to activate sound and switch icon

  volumeIcon.addEventListener('click', () => {
    volumeIcon.className = volumeIcon.className.indexOf("up") >= 0 ? 'fas fa-volume-mute' : 'fas fa-volume-up';
  }); // Append image and icon to Listen Image Container

  cont.appendChild(listenImg);
  cont.appendChild(volumeIcon); // locate listen section element

  let listenEl = document.getElementsByClassName('row')[1].firstChild;
  listenEl.appendChild(cont);
};

exports.loadListenPreview = loadListenPreview;