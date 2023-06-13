/*
	Holds data for home collage
*/
// Interfaces
import { IPost } from './interfaces'

// Path to home collage images
const RESOURCES:string = "./resources";

const IMG_PATH:string = `${RESOURCES}/pg_imgs/home_collage`;
const SHARED_IMG_PATH:string = `${RESOURCES}/global_imgs/shared`;

// collageImages will hold data for each image and 
//	"post" data to be displayed when user clicks on image
const collageImages:Array<IPost> = [
	{
		imageData: {
			path:`${SHARED_IMG_PATH}/happy_holy_dayz.png`,
			alt:'Happy Holy Dayz annual Chicago Hiphop Festival',
			caption:'[Chicago Hiphop Festival partial description]',
			idName:'leftTop'
		},
		postData: {
			header: "Happy Holy Dayz annual Chicago Hiphop Festival",
			content:"Carl Colvin performing with hip hop group Kao Ra Zen and the Ungovernables " +
					"at Hippy Holy Dayz, an annual hip hop festival in Chicago."
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/dank_haus_spoken_word.png`,
			alt:'Dank Hause Kenya Spoken Word',
			caption:'[Spoken Word partial description]',
			idName:'middleLeftTop'
		},
		postData: {
			header: "Dank Hause Kenya Spoken Word",
			content:"Carl Colvin performing with spoken word artist and art curator Kenya Fulton " +
					"at the Dank Haus in Chicago."
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/rand_reeds.png`,
			alt:'Random Reeds',
			caption:'[Random reeds partial description]',
			idName:'middleRightTop'
		},
		postData: {
			header: "Random Reeds",
			content: "I create reeds tailored to your preferences!"
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/english_horn_sheet_music.jpeg`,
			alt:'English horn on sheet music',
			caption:'[English horn on sheet music partial description]',
			idName:'middleRightBottom'
		},
		postData: {
			header:'English Horn Sheet Music',
			content:'[English horn on sheet music full description]'
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/take_my_hand_poem.png`,
			alt:'Take My Hand poem',
			caption:'[Take my hand poem partial description]',
			idName:'rightTop'
		},
		postData: {
			header: "Take My Hand",
			content: "Poem written by Carl Colvin and published by Z Publishing's \"America's Emerging Poets\" anthology"
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/fathers_touch_poem.png`,
			alt:'A Father\'s Touch poem',
			caption:'[A Father\'s Touch partial description]',
			idName:'leftBottom'
		},
		postData: {
			header:'A Father\'s Touch',
			content:"Poem written by Carl Colvin and published by Z Publishing's \"America's Best Emerging Poets\" anthology"
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/reed_scraping_types.png`,
			alt:'Types of reed scraping',
			caption:'[Reed scraping partial description]',
			idName:'middleLeftBottom'
		},
		postData: {
			header: "Types of Reed Scraping",
			content: "I make and sell reeds at all different stages of the reedmaking process to aid whatever your reed needs are."
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/dank_haus_ungovernables.png`,
			alt:'Dank Haus Ungovernables',
			caption:'[Ungovernables partial description]',
			idName:'rightBottom'
		},
		postData: {
			header: "Dank Haus Ungovernables",
			content:"Carl Colvin performing with hip hop group Kao Ra Zen and the Ungovernables" +
					" at the Dank Haus in Chicago."
		}
	}
];

export { collageImages }