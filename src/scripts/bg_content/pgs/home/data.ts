// Imports
import { IImage, IBox } from '../../../global/interfaces'

const infoData:IBox[] = [
	{
		header:"About",
		content:"Carl Colvin is a freelance musician, teacher, writer, and "
		+ "editor originally from Chicago, Illinois and now recently residing " + 
		"in the Cincinnati, Ohio area"
	}, 
	{
		header:"Listen",
		content:""
	},
	{
		header:"Services",
		content:""
	}
]
const ccImgsPath:string = "./resources/cc_imgs/";
const imgData:IImage[] = [
	{
		path:ccImgsPath + "carl_headshot.png",
		alt:"Carl Headshot",
		caption:"Carl Headshot"
	}, 
	{
		path:ccImgsPath + "oboe_performance.png",
		alt:"Carl Performing Oboe",
		caption:"Carl Playing Oboe"
	},
	{
		path:ccImgsPath + "",
		alt:"Carl doing stuff",
		caption:"Carl"
	}
]

export { infoData, imgData }