// This files holds the data to used by the listen page

// Imports
import { RowInterface } from './interfaces'

interface IRow {
	[index:string]:RowInterface;
}

const audioData:IRow = {
	"sketches": {
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
		"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis " +
		"nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		media: {
			controls:false,
			image: {
				path:"../resources/listen_imgs/hungarian-sketches.png",
				alt:"Hungarian Sketches"
			},
			source: {
				src:'../resources/media/hungarian-sketches.mp3',
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
				path: "../resources/listen_imgs/kao_ra_zen_album_cover.jpg",
				alt: "Kao Ra Zen Lifestream"
			},
			source: {
				src:'../resources/media/kenya-lifestream.wav',
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
			poster:"../resources/listen_imgs/poem-reading.png", 
			source: {
				src:'../resources/media/poem-reading.mp4',
				type:'video/mp4'
			}
		}
	}
};

export { audioData, videoData }