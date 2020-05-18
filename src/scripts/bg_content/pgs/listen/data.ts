// This files holds the data to used by the listen page

// Imports
import { RowInterface } from './interfaces'

interface IRow {
	[index:string]:RowInterface;
}

const IMG_PATH:string = "../resources/pg_imgs/listen_imgs/";
const MEDIA_PATH:string = "../resources/media/";

const audioData:IRow = {
	"sketches": {
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
		"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis " +
		"nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		media: {
			controls:false,
			image: {
				path:`${IMG_PATH}hungarian-sketches.png`,
				alt:"Hungarian Sketches"
			},
			source: {
				src:`${MEDIA_PATH}hungarian-sketches.mp3`,
				type:'audio/mp3'
			}
		}
	},
	"ka-ra-zen": {
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
		"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis " +
		"nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		media: {
			controls:false,
			image: {
				path: `${IMG_PATH}kao_ra_zen_album_cover.jpg`,
				alt: "Kao Ra Zen Lifestream"
			},
			source: {
				src:`${MEDIA_PATH}kenya-lifestream.wav`,
				type:'audio/wav'
			}
		}
	}
};

const videoData:IRow = {
	"poem-reading": {
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
		"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis " +
		"nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		media: {
			controls:false,
			poster:`${IMG_PATH}poem-reading.png`,
			source: {
				src:`${MEDIA_PATH}poem-reading.mp4`,
				type:'video/mp4'
			}
		}
	}
};

export { audioData, videoData }