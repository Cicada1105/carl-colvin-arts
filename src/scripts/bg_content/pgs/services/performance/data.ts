// This file holds the data specific to the Performance page

// Imports
import { ICustomContainer } from './interfaces'

interface ImageHeaderArrayInterface {
	[index:string]:ICustomContainer;
}

const IMG_PATH:string = "../../resources/performance_imgs/";

const headerData:ImageHeaderArrayInterface = {
	"performance": {
		header: {
			data: "Performance",
			image: {
				path:IMG_PATH + "treble_clef.png",
				alt:"Treble Clef Symbol"
			}
		},
		body: {
			content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, " +
			"ipsum quis mollis sollicitudin, lacus urna aliquam risus, ut vehicula justo libero " +
			"at justo. Vivamus malesuada varius mauris sed scelerisque. Nulla facilisi. Quisque " +
			"a vulputate ex. Suspendisse at tristique arcu, ut sagittis ante"
		}
	},
	"previous_performances": {
		header: {
			data: "Previous Performances",
			image: {
				path: IMG_PATH + "eighth_note.png",
				alt: "Eighth Note Symbol"
			}
		},
		body: {
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, " +
			"ipsum quis mollis sollicitudin, lacus urna aliquam risus, ut vehicula justo libero " +
			"at justo. Vivamus malesuada varius mauris sed scelerisque. Nulla facilisi. Quisque " +
			"a vulputate ex. Suspendisse at tristique arcu, ut sagittis ante"
		}
	},
	"rates": {
		header: {
			data: "Rates",
			image: {
				path: IMG_PATH + "bass_clef.png",
				alt: "Bass Clef Symbol"
			}	
		},
		body: {
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, " +
			"ipsum quis mollis sollicitudin, lacus urna aliquam risus, ut vehicula justo libero " +
			"at justo. Vivamus malesuada varius mauris sed scelerisque. Nulla facilisi. Quisque " +
			"a vulputate ex. Suspendisse at tristique arcu, ut sagittis ante"
		}
	}
}

export { headerData }