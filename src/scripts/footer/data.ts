// Import image interface
import { IImageLink } from '../global/interfaces'
interface ImageInterface {
	name:string;
	path:string;
	link:string;
}

// Use during development
//const imagePath = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/resources/media_imgs";
// Use during production
const imagePath = "/resources/media_imgs";

// Data holding info about social media links
const data:IImageLink[] = [
	{
		path: imagePath + "/ig_logo.png",
		alt:"instagram",
		link:"https://www.instagram.com/carl_colvin_arts"
	},
	{
		path: imagePath + "/in_logo.png",
		alt:"linkedin",
		link: "https://www.linkedin.com/in/carl-colvin-68122379"
	},
	{
		path: imagePath + "/twitter_logo.png",
		alt:"twitter",
		link:"https://twitter.com/CarlColvinArts"
	}, 
	{
		path:imagePath + "/fb_logo.png",
		alt:"facebook",
		link:"tbd"
	}
]

export { data }