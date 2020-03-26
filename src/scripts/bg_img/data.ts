// Imports
import { IImage } from '../global/interfaces'

// Use for development
const imgPath:string = 'file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/resources/bg_imgs/';
// Use for production
//const imgPath:string = '/resources/bg_imgs/'

// Local interface to define an associative array of IMage's
interface IBgImage {
	[index:string]:IImage;
}

// Each page will hold a different image fade
//	 Define associative array
const data:IBgImage = {
	"" : {
		path: imgPath + "oboe_sheet_music.jpg",
		alt: "Oboe and Sheet Music",	
	},
	"index" : {
		path: imgPath + "oboe_sheet_music.jpg",
		alt: "Oboe and Sheet Music",
	},
	"about" : {
		path: imgPath + "",
		alt: ""
	},
	"reedmaking" : {
		path: imgPath + "reedmaking_bg.jpg",
		alt: "Reeds with sharpening tools and woodblock"
	},
	"writing" : {
		path: imgPath + "flight_poem.jpg",
		alt: "Poem"
	}, 
	"performance" : {
		path: imgPath + "carl_red_pew.jpg",
		alt: "Playing oboe in church pew"
	}, 
	"editing" : {
		path: imgPath + "book_edit.jpg",
		alt: "Editing excerpt from David Sula"
	},
	"listen" : {
		path: imgPath + "english_horn_sheet_music.jpg",
		alt: "English Horn"
	}, 
	"contact" : {
		path: imgPath + "",
		alt: "Some picture of carl maybe"
	}
}

export { data }