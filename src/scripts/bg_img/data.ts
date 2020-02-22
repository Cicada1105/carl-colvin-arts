// Imports
import { IImage } from '../global/interfaces'

// Use for development
const imgPath:string = 'file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/resources/music_imgs/';
// Use for production
// const imgPath:string = '/resources/music_imgs/'

// Local interface to define an associative array of IMage's
interface IBgImage {
	[index:string]:IImage;
}

// Each page will hold a different image fade
//	 Define associative array
const data:IBgImage = {
	"oboe" : {
		path: imgPath + "oboe_sheet_music.png",
		alt: "Oboe and Sheet Music",
	},
	"english_horn" : {
		path: imgPath + "",
		alt: "English Horn"
	},
	"poem" : {
		path: imgPath + "",
		alt: "Poem"
	}
}

export { data }