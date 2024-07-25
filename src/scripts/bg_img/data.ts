// Imports
import { IImage } from '../global/interfaces/general'
import { getCurrentFile } from '../global/methods/utilities'

// Use for development
let currFile:string = getCurrentFile();
let isHomePage:boolean = currFile.localeCompare("index") === 0;	// compare === 0 -> MATCH
// if path contains services/ -> it is a specific page within services directory
let isServicePage:boolean = window.location.pathname.includes("services/");
const isPerformancesPage:boolean = window.location.pathname.includes("performances/");

const GLOBAL_RESOURCES:string = (isPerformancesPage ? "../../../" : (isServicePage ? "../../" : (isHomePage ? "./" : "../"))) + "resources/global_imgs";
const IMG_PATH:string = `${GLOBAL_RESOURCES}/background`;
const SHARED_IMG_PATH:string = `${GLOBAL_RESOURCES}/shared`;
// Use for production
//const IMG_PATH:string = '/resources/global_imgs/background/';

// Local interface to define an associative array of IMage's
interface IBgImage {
	[index:string]:IImage;
}

// Each page will hold a different image fade
//	 Define associative array
const data:IBgImage = {
	"" : {
		path: `${SHARED_IMG_PATH}/oboe_sheet_music.jpeg`,
		alt: "Oboe and Sheet Music",	
	},
	"index" : {
		path: `${SHARED_IMG_PATH}/oboe_sheet_music.jpeg`,
		alt: "Oboe and Sheet Music",
	},
	"about" : {
		path: `${IMG_PATH}/`,
		alt: ""
	},
	"services" : {
		path: `${IMG_PATH}/`,
		alt: "Services Landing Page Image"
	},
	"reedmaking" : {
		path: `${IMG_PATH}/reedmaking_bg.jpeg`,
		alt: "Reeds with sharpening tools and woodblock"
	},
	"performances" : {
		path: `${IMG_PATH}/carl_red_pew.jpeg`,
		alt: "Playing oboe in church pew"
	},
	"past" : {
		path: `${IMG_PATH}/`,
		alt: "Past background image"
	},
	"present" : {
		path: `${IMG_PATH}/`,
		alt: "Present background image"
	},
	"future" : {
		path: `${IMG_PATH}/`,
		alt: "Future background image"
	},
	"editing" : {
		path: `${IMG_PATH}/book_edit.jpeg`,
		alt: "Editing excerpt from David Sula"
	},
	"listen" : {
		path: `${IMG_PATH}/english_horn_sheet_music.jpeg`,
		alt: "English Horn"
	}, 
	"contact" : {
		path: `${IMG_PATH}/`,
		alt: "Some picture of carl maybe"
	},
	"cart" : {
		path: `${IMG_PATH}/`,
		alt: "Nothing"
	}
}

export { data }