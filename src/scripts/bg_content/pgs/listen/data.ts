// This files holds the data to used by the listen page

// Imports
import { RowInterface } from './interfaces'

interface IRow {
	[index:string]:RowInterface;
}

const IMG_PATH:string = "../resources/pg_imgs/listen";
const MEDIA_PATH:string = "../resources/media";

const audioData:IRow = {
	"sketches": {
		description:"Excerpt from Hungarian Sketches by Béla Bartók with the DePaul " +
					"University Chamber Orchestra",
		media: {
			controls:false,
			image: {
				path:`${IMG_PATH}/hungarian-sketches.jpg`,
				alt:"Hungarian Sketches"
			},
			source: {
				src:`${MEDIA_PATH}/hungarian-sketches.mp3`,
				type:'audio/mp3'
			}
		}
	},
	"ka-ra-zen": {
		description:"Instrumental background of Kao Ra Zen and The Ungovernables's " + 
					"Live Forever / The Lifestream including my contributions on oboe",
		media: {
			controls:false,
			image: {
				path: `${IMG_PATH}/kao_ra_zen_album_cover.jpg`,
				alt: "Kao Ra Zen Lifestream"
			},
			source: {
				src:`${MEDIA_PATH}/kenya-lifestream.mp3`,
				type:'audio/mp3'
			}
		}
	}
};

const videoData:IRow = {
	"poem-reading": {
		description:"Excerpt from my hybrid poetry and oboe performance at the " +
					"Gallery Cabaret in Chicago, IL",
		media: {
			controls:false,
			poster:`${IMG_PATH}/poem-reading.png`,
			source: {
				src:`${MEDIA_PATH}/poem-reading.mp4`,
				type:'video/mp4'
			}
		}
	},
	"divertimento": {
		description:"Wind Trio performing 4th Movement of Malcolm Arnold's Divertimento " +
		"at The Loon Wine Bar & Shop for Classical Revolution Cincinnati",
		media: {
			controls:false,
			poster:`${IMG_PATH}/divertimento.jpg`,
			source: {
				src:`${MEDIA_PATH}/divertimento.mp4`,
				type:'video/mp4'
			}
		}
	},
	"arts-in-the-airport": {
		description:"An excerpt from Satoshi Yagisawa's Seasons Floral Scented, " +
		"performed live at the Cincinnati/Northern Kentucky International Airport " +
		"for ArtsWave's \"Arts in the Airport\" Series",
		media: {
			controls:false,
			poster: `${IMG_PATH}/satoshi_yagisawa-seasons-floral-scented-[live].jpg`,
			source: {
				src:`${MEDIA_PATH}/satoshi_yagisawa-seasons-floral-scented-[live].mp4`,
				type:'video/mp4'
			}
		}
	}
};

export { audioData, videoData }