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
  let fig = document.createElement('figure');
  let img = document.createElement('img');
  img.setAttribute('src', currImg.path);
  img.setAttribute('alt', currImg.alt);
  let figCaption = document.createElement('figcaption');
  let figCaptionStr = typeof currImg.caption === "undefined" ? "" : currImg.caption;
  let figCaptionTxt = document.createTextNode(figCaptionStr);
  figCaption.appendChild(figCaptionTxt);
  fig.appendChild(img);
  fig.appendChild(figCaption);
  return fig;
};