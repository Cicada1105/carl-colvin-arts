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
	}
]
const ccImgsPath:string = "./resources/cc_imgs/";
const imgData:IImage[] = [
	{
		path:ccImgsPath + "carl_headshot.jpg",
		alt:"",
		caption:""
	}, 
	{
		path:ccImgsPath + "oboe_performance.jpg",
		alt:"",
		caption:""
	}
]

export { infoData, imgData }