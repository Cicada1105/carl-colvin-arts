import { getCurrentFile } from '../global/methods/utilities';
// Use for development
let currFile = getCurrentFile();
let isHomePage = currFile.localeCompare("index") === 0; // compare === 0 -> MATCH
// if path contains services/ -> it is a specific page within services directory
let isServicePage = window.location.pathname.includes("services/");
const isPerformancesPage = window.location.pathname.includes("performances/");
const imgPath = (isPerformancesPage ? "../../../" : (isServicePage ? "../../" : (isHomePage ? "./" : "../"))) + "resources/global_imgs/background/";
// Each page will hold a different image fade
//	 Define associative array
const data = {
    "": {
        path: imgPath + "oboe_sheet_music.jpg",
        alt: "Oboe and Sheet Music",
    },
    "index": {
        path: imgPath + "oboe_sheet_music.jpg",
        alt: "Oboe and Sheet Music",
    },
    "about": {
        path: imgPath + "",
        alt: ""
    },
    "services": {
        path: imgPath + "",
        alt: "Services Landing Page Image"
    },
    "reedmaking": {
        path: imgPath + "reedmaking_bg.jpg",
        alt: "Reeds with sharpening tools and woodblock"
    },
    "writing": {
        path: imgPath + "flight_poem.jpg",
        alt: "Poem"
    },
    "performances": {
        path: imgPath + "carl_red_pew.jpg",
        alt: "Playing oboe in church pew"
    },
    "past": {
        path: imgPath + "",
        alt: "Past background image"
    },
    "present": {
        path: imgPath + "",
        alt: "Present background image"
    },
    "future": {
        path: imgPath + "",
        alt: "Future background image"
    },
    "editing": {
        path: imgPath + "book_edit.jpg",
        alt: "Editing excerpt from David Sula"
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
export { data };
