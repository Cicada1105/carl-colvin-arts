// Imports
import { IRow } from './interfaces'

// Paths development
let isHomePage:boolean = window.location.pathname.includes('index');
const ROOT_PGS_DIR:string = (isHomePage ? "./" : "../") + "pgs/";
const IMG_PATH:string = (isHomePage ? "./" : "../") + "resources/pg_imgs/about_imgs/";
// Use during production
//const ROOT_PGS_DIR:string = "/pgs/";
//const IMG_PATH:string = "/resources/pg_imgs/about_imgs/";

const Rows:IRow[] = [
	{
		infoData: {
			header:"About",
			link:`${ROOT_PGS_DIR}about.html`,
			content:"Carl Colvin is a freelance musician, teacher, writer, and " +
			"editor originally from Chicago, Illinois and now recently residing " + 
			"in the Cincinnati, Ohio area. Carl holds a Bachelor of Arts with " +
			"majors in creative writing, music, and humanities from Valparaiso " +
			"University and a Master of Music in Oboe Performance from DePaul " +
			"University. At Valparaiso University he was awarded the Anna Zink " +
			"Springsteen award for his many contributions to the University’s " +
			"literary culture."
		},
		imgData: {
			path:IMG_PATH + "carl_headshot.png",
			alt:"Carl Headshot",
			caption:"Carl Headshot"
		}
	}, 
	{
		infoData: {
			header:"Listen",
			link:`${ROOT_PGS_DIR}listen.html`,
			content:"Music is a service for its current audience and for the " +
			"time it was written. Every audience and ensemble is different, " +
			"so every service performed must be different to accomplish a " +
			"successful performance. I have easily applied my versatility " +
			"not only to genre but also to the aesthetic of specific performances " +
			"by taking my two decades of oboe playing experience and fitting " +
			"them into whatever ensemble requires my services. Check out the " +
			"Listen page to hear for yourself. "
		},
		imgData: {
			path:IMG_PATH + "oboe_performance.png",
			alt:"Carl Performing Oboe",
			caption:"Performing with spoken word artist and art curator Kenya Fulton " +
			"at the Dank Haus in Chicago."
		}
	},
	{
		infoData: {
			header:"Services",
			link:`${ROOT_PGS_DIR}services.html`,
			content:"As a teacher and editor, Carl’s mission is to provide " +
			"new and emerging musicians and writers the opportunity to share " +
			"and express their work while also developing the best versions " +
			"of themselves as artists."
		},
		imgData: {
			path:IMG_PATH + "flight_poem.png",
			alt:"Flight Poem",
			caption:'Flight: Poem written by Carl Colvin and published in Z Publishing\'s "America\'s Best Emerging Poets" anthology'
		}
	}
]

export { Rows }