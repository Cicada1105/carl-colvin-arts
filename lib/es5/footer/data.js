"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
// Use during development
const imagePath = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/resources/media_imgs"; // Use during production
// const imagePath = "./resources/media_imgs";
// Data holding info about social media links

const data = [{
  name: "instagram",
  path: imagePath + "/ig_logo.png",
  link: "https://www.instagram.com/carl_colvin_arts"
}, {
  name: "linkedin",
  path: imagePath + "/in_logo.png",
  link: "https://www.linkedin.com/in/carl-colvin-68122379"
}, {
  name: "twitter",
  path: imagePath + "/twitter_logo.png",
  link: "https://twitter.com/CarlColvinArts"
}, {
  name: "facebook",
  path: imagePath + "/fb_logo.png",
  link: "tbd"
}];
exports.data = data;