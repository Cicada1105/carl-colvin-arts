// Imports
import { IRow } from './interfaces'

// Paths development
let isHomePage:boolean = window.location.pathname.includes('index');
const ROOT_PGS_DIR:string = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/pgs/";
const IMG_PATH:string = isHomePage ? "./resources/about_imgs/" : "../resources/about_imgs/";
// Use during production
//const ROOT_PGS_DIR:string = "/pgs/";

const Rows:IRow[] = [
	{
		infoData: {
			header:"About",
			link:`${ROOT_PGS_DIR}about.html`,
			content:"Carl Colvin is a freelance musician, teacher, writer, and " +
			"editor originally from Chicago, Illinois and now recently residing " + 
			"in the Cincinnati, Ohio area."
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
			content:"Listen to carl's best moooosic"
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
			link:`${ROOT_PGS_DIR}services/performance.html`,
			content:"Take part in carl's top tier services. 6 stars out of 5"
		},
		imgData: {
			path:IMG_PATH + "flight_poem.png",
			alt:"Flight Poem",
			caption:'Flight: Poem written by Carl Colvin and published in Z Publishing\'s "America\'s Best Emerging Poets" anthology'
		}
	}
]

export { Rows }