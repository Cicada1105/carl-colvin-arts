/*
	This file contains static data for the Services landing page
*/
import { IImage, IBoxLink } from '@global/interfaces/general'
//import { AnimationOutlineInterface as IAnimation } from './interfaces'

const INTRO_DATA:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus " +
						 "ut enim ligula. Vivamus purus risus, dictum sed congue eget, efficitur " +
						 "non nunc. Suspendisse interdum aliquam lorem sed finibus. Maecenas congue " +
						 "in elit vel condimentum. Nulla vulputate fringilla aliquet. Sed ut pulvinar " +
						 "mi, at luctus metus. Sed sodales erat vitae nulla consequat, non interdum " +
						 "lorem pharetra. In at convallis nisl, ut imperdiet ipsum. ";

// Services path
const SERVICES_DIR = "./services/";
// Services Images Path
const SERVICES_IMGS = "../resources/global_imgs/background/"

const CARD_DATA:Array<IBoxLink<IImage>> = [
	{
		header:"Reedmaking",
		content: {
			path:`${SERVICES_IMGS}reedmaking_bg.jpeg`,
			alt:"Reeds with sharpening tools and woodblock",
			caption:"Tools used to sharpen and craft reeds"
		},
		link:`${SERVICES_DIR}reedmaking.html`
	},
	{
		header:"Performance",
		content: {
			path:`${SERVICES_IMGS}carl_red_pew.jpeg`,
			alt:"Playing oboe in church pew",
			caption:"Carl Colvin practicing in [-Insert Church Name Here-]'s pew"
		},
		link:`${SERVICES_DIR}performances.html`
	},
	{
		header:"Editing",
		content: {
			path:`${SERVICES_IMGS}book_edit.jpeg`,
			alt:"Editing Excerpt",
			caption:"Editing excerpt from literary work written by David Sula"
		},
		link:`${SERVICES_DIR}editing.html`
	}
]

export { INTRO_DATA, CARD_DATA }