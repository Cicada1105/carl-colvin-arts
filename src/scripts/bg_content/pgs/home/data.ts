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
const homeImgsPath:string = "./resources/home_imgs/";
const imgData:IImage[] = [
	{
		path:homeImgsPath + "carl_headshot.png",
		alt:"Carl Headshot",
		caption:"Carl Headshot"
	}, 
	{
		path:homeImgsPath + "oboe_performance.png",
		alt:"Carl Performing Oboe",
		caption:"Carl Playing Oboe"
	},
	{
		path:homeImgsPath + "flight_poem.png",
		alt:"Flight Poem",
		caption:"Carl's published poem: Flight"
	}
]

export { infoData, imgData }