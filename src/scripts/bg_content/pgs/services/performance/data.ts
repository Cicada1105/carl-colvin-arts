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
			content:[
				"In 2015, Chicago-based hip hop artist Kao Ra Zen approached me in need of " +
				"a woodwind player for some of his projects. Once I accepted, I knew that my performance " +
				"career was to take a strange and wonderful turn.",
				"After many successful live hip hop shows and recordings as Chicago's sole hip hop oboist, " +
				"I saw the benefits of being versatile and realized that versatility is one of the most " +
				"important aspects of a performer's career. I took this to heart and applied it to every " +
				"performance opportunity, whether in the genres ranging from classical to hip hop.",
				"Music is a service for its current audience and for the time it was written. Every audience " +
				"and ensemble is different, so every service performed must be different to accomplish a " +
				"successful performance. ",
				"I have easily applied my versatility not only to genre but also to " +
				"the aesthetic of specific performances by taking my two decades of oboe playing experience " +
				"and fitting them into whatever ensemble requires my services. Check out the Listen page to " +
				"hear for yourself. "

			]
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
			content: [
				"I held many different roles during my time in Chicago. I served as a permanent substitute " +
				"oboist/English horn player for the Bel Sonore Chamber Ensemble until I moved to my current " +
				"place of residence: the Cincinnati area. However, I remain as an active member of Kao Ra " +
				"Zen and the Ungovernables and continue to add the '90s woodwind aesthetic to Chicago's " +
				"underground hip hop scene. ",
				"I also was a regular musical member of many church's organizations, including The Moody " +
				"Bible Church's orchestra and Riverside Presbyterian Church's Baroque orchestra. These are " +
				"to name a few organizations with which I have had the pleasure of performing."
			]
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
			content: [
				"I would love the opportunity to play with you! Head over to my contact page and send me " +
				"a message about whatever performance need you have. "
			]	
		}
	}
}

export { headerData }