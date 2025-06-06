// Import image interface
import { IImageLink } from '@global/interfaces/general'
interface ImageInterface {
	name:string;
	path:string;
	link:string;
}

// Use during development
const isHomePage:boolean = window.location.pathname.includes("index");
const isServicePage:boolean = window.location.pathname.includes("services/");
const isPerformancesPage:boolean = window.location.pathname.includes("performances/");
const imagePath:string = (isPerformancesPage ? "../../../" : (isServicePage ? "../../" : (isHomePage ? "./" : "../"))) + "resources/global_imgs/media/";
// Use during production
//const imagePath = "/resources/global_imgs/media/";

// Data holding info about social media links
const data:IImageLink[] = [
	{
		path: `${imagePath}ig_logo.png`,
		alt:"instagram",
		link:"https://www.instagram.com/carl_colvin_arts"
	},
	{
		path: `${imagePath}in_logo.png`,
		alt:"linkedin",
		link: "https://www.linkedin.com/in/carl-colvin-68122379"
	},
	{
		path: `${imagePath}twitter_logo.png`,
		alt:"twitter",
		link:"https://twitter.com/CarlColvinArts"
	}, 
	{
		path:`${imagePath}fb_logo.png`,
		alt:"facebook",
		link:" https://www.facebook.com/CarlColvinArts/"
	}
]

export { data }