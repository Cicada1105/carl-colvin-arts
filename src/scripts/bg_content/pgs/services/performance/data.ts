// This file holds the data specific to the Performance page

// Imports
import { ImageHeaderInterface } from './interfaces'

interface ImageHeaderArrayInterface {
	[index:string]:ImageHeaderInterface;
}

const IMG_PATH:string = "../../resources/performance_imgs/";

const headerData:ImageHeaderArrayInterface = {
	"performance": {
		header: "Performance",
		image: {
			path:IMG_PATH + "treble_clef.png",
			alt:"Treble Clef Symbol"
		}
	},
	"previous_performances": {
		header: "Previous Performances",
		image: {
			path: IMG_PATH + "eighth_note.png",
			alt: "Eighth Note Symbol"
		}
	},
	"rates": {
		header: "Rates",
		image: {
			path: IMG_PATH + "bass_clef.png",
			alt: "Bass Clef Symbol"
		}
	}
}

export { headerData }