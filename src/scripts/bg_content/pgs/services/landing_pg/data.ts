/*
	This file contains static data for the Services landing page
*/
import { IImage, IBoxLink } from '@global/interfaces/general'
//import { AnimationOutlineInterface as IAnimation } from './interfaces'

const INTRO_DATA:string = "In our digital world, art, more than ever, has become more and more " +
													"of a collaborative pursuit. One part of being an artist that gives " +
													"me so much life and joy is bringing out the best in others through " +
													"collaboration, no matter if they are right in the room with me or " +
													"across the country. Whether you are a publisher, music director, " +
													"writer, oboist in need of reeds, or someone who needs an oboist for " +
													"their musical projects, I would love to work with you to accomplish " +
													"whatever you envision within your creative pursuits. Check out the " +
													"different services I offer below and let me know via the " +
													"<a href='./contact.html'>Contact</a> page how I can best assist you!";

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
			caption:"Click below for your one-stop shop for processed cane and reeds!"
		},
		link:`${SERVICES_DIR}reedmaking.html`
	},
	{
		header:"Performance",
		content: {
			path:`${SERVICES_IMGS}carl_red_pew.jpeg`,
			alt:"Playing oboe in church pew",
			caption:"Learn here what is currently on my music stand, where I'm performing " +
							"next, and what I previously have worked on!"
		},
		link:`${SERVICES_DIR}performances.html`
	},
	{
		header:"Editing",
		content: {
			path:`${SERVICES_IMGS}book_edit.jpeg`,
			alt:"Editing Excerpt",
			caption:"Check out here how I can assist you with your poetry or prose!"
		},
		link:`${SERVICES_DIR}editing.html`
	}
]

export { INTRO_DATA, CARD_DATA }