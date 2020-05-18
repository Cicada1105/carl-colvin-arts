/*
	Holds data for home collage
*/
// Interfaces
import { ICollage } from './interfaces'

// Path to home collage images
const imagePaths:string = "./resources/pg_imgs/home_collage_imgs/";

const collageImages:Array<ICollage> = [
	{
		path:`${imagePaths}dank_haus_ungovernables.png`,
		alt:'Dank Haus Ungovernables',
		caption:'',
		className:'bottomMiddle'
	}, 
	{
		path:`${imagePaths}dank_haus_kenya_spoken_word.png`,
		alt:'Dank Hause Kenya Spoken Word',
		caption:'',
		className:'bottomRight'
	},
	{
		path:`${imagePaths}happy_holy_dayz.png`,
		alt:'Happy Holy Dayz annual Chicago Hiphop Festival',
		caption:'',
		className:'topLeft'
	}, 
	{
		path:`${imagePaths}rand_reeds.png`,
		alt:'Random Reeds',
		caption:'',
		className:'topRight'
	},
	{
		path:`${imagePaths}reed_scraping_types.png`,
		alt:'Types of reed scraping types',
		caption:'',
		className:'bottomLeft'
	}, 
	{
		path:`${imagePaths}flight_poem.png`,
		alt:'Flight Poem published in Z Publishing\'s "America\'s Best Emerging Poets" anthology',
		caption:'',
		className:'topMiddle'
	}
];

export { collageImages }