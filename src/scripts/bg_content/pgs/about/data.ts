// Imports
import { IRow } from './interfaces'

// Paths development
let isHomePage:boolean = window.location.pathname.includes('index');

const ROOT_DIR:string = isHomePage ? "./" : "../";
const RESOURCES:string = ROOT_DIR + "resources";

const ABOUT_IMG_PATH:string = `${RESOURCES}/pg_imgs/about`;
const SHARED_IMG_PATH:string = `${RESOURCES}/global_imgs/shared`;
// Use during production
//const PAGE_LINKS_DIR:string = "/pgs/";
//const ABOUT_IMG_PATH:string = "/resources/pg_imgs/about/";

const Rows:IRow[] = [
	{
		infoData: {
			header:"About",
			link:`${ROOT_DIR}pgs/about.html`,
			content:"Carl Colvin is a freelance musician, teacher, writer, and " +
			"editor originally from Chicago, Illinois and now recently residing " + 
			"in the Cincinnati, Ohio area. Carl holds a Bachelor of Arts with " +
			"majors in creative writing, music, and humanities from Valparaiso " +
			"University and a Master of Music in Oboe Performance and Performance " +
			" certificate from DePaul University."
		},
		imgData: {
			path:`${SHARED_IMG_PATH}/carl_headshot.png`,
			alt:"Carl Headshot",
			caption:"Welcome to my page!"
		}
	}, 
	{
		infoData: {
			header:"Listen",
			link:`${ROOT_DIR}pgs/listen.html`,
			content:"Music is a service for its current audience and for the " +
			"time it was written. Every audience and ensemble is different, " +
			"so every service performed must be different to accomplish a " +
			"successful performance. I have easily applied my versatility " +
			"not only to genre but also to the aesthetic of specific performances " +
			"by taking my decades of oboe playing experience and fitting " +
			"them into whatever ensemble requires my services. Check out the " +
			"Listen page to hear for yourself. "
		},
		imgData: {
			path:`${ABOUT_IMG_PATH}/oboe_performance.png`,
			alt:"Carl Performing Oboe",
			caption:"Performing with spoken word artist and art curator Kenya Fulton " +
			"at the Dank Haus."
		}
	},
	{
		infoData: {
			header:"Services",
			link:`${ROOT_DIR}pgs/services.html`,
			content:"As a teacher and editor, my mission is to provide " +
			"new and emerging musicians and writers the opportunity to share " +
			"and express their work while also developing the best versions " +
			"of themselves as artists."
		},
		imgData: {
			path:`${ABOUT_IMG_PATH}/flight_poem.png`,
			alt:"Flight Poem",
			caption:'Flight: Poem written by Carl Colvin and published in Z Publishing\'s "America\'s Best Emerging Poets" anthology'
		}
	}
]

export { Rows }