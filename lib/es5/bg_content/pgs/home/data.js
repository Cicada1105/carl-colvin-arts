"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imgData = exports.infoData = void 0;
const infoData = [{
  header: "About",
  content: "Carl Colvin is a freelance musician, teacher, writer, and " + "editor originally from Chicago, Illinois and now recently residing " + "in the Cincinnati, Ohio area."
}, {
  header: "Listen",
  content: ""
}, {
  header: "Services",
  content: ""
}];
exports.infoData = infoData;
const homeImgsPath = "./resources/home_imgs/";
const imgData = [{
  path: homeImgsPath + "carl_headshot.png",
  alt: "Carl Headshot",
  caption: "Carl Headshot"
}, {
  path: homeImgsPath + "oboe_performance.png",
  alt: "Carl Performing Oboe",
  caption: "Performing with spoken word artist and art curator Kenya Fulton " + "at the Dank Haus in Chicago."
}, {
  path: homeImgsPath + "flight_poem.png",
  alt: "Flight Poem",
  caption: "Flight: Poem written by Carl Colvin and published in America's Best Emerging Poets"
}];
exports.imgData = imgData;