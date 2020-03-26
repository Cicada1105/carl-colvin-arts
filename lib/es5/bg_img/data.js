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
    path: imgPath + "book_edit.jpg",
    alt: "Editing excerpt from David Soula"
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