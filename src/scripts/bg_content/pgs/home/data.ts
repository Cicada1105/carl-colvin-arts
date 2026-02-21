/*
	Holds data for home collage
*/
// Interfaces
import { IPost } from './interfaces'

// Path to home collage images
const RESOURCES:string = "./resources";

const IMG_PATH:string = `${RESOURCES}/pg_imgs/home_collage`;
const SHARED_IMG_PATH:string = `${RESOURCES}/global_imgs/shared`;

const PAGES_PATH:string = './pgs';
const SERVICES_PATH:string = `${PAGES_PATH}/services`;

// collageImages will hold data for each image and 
//	"post" data to be displayed when user clicks on image
const collageImages:Array<IPost> = [
	{
		imageData: {
			path:`${SHARED_IMG_PATH}/happy_holy_dayz.png`,
			alt:'Happy Holy Dayz annual Chicago Hiphop Festival',
			idName:'leftTop'
		},
		postData: {
			header: "Performance",
			path:`${SERVICES_PATH}/performances.html`,
			content:"Carl Colvin performing with hip hop group Kao Ra Zen and the Ungovernables " +
					"at Hippy Holy Dayz, an annual hip hop festival."
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/dank_haus_spoken_word.png`,
			alt:'Dank Hause Kenya Spoken Word',
			idName:'middleLeftTop'
		},
		postData: {
			header: "Performance",
			path:`${SERVICES_PATH}/performances.html`,
			content:"Carl Colvin performing with spoken word artist and art curator Kenya Fulton."
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/rand_reeds.png`,
			alt:'Random Reeds',
			idName:'middleRightTop'
		},
		postData: {
			header: "Reedmaking",
			path:`${SERVICES_PATH}/reedmaking.html`,
			content: "I create reeds tailored to your preferences!"
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/english_horn_sheet_music.jpeg`,
			alt:'English horn on sheet music',
			idName:'middleRightBottom'
		},
		postData: {
			header:'Performance',
			path:`${SERVICES_PATH}/performances.html`,
			content:'Check out my <a href="./pgs/services/performances/past.html">past</a> and <a href="./pgs/services/performances/future.html">future</a> performances, and check out some of my <a href="./pgs/services/performances/present.html">playing</a>.'
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/take_my_hand_poem.png`,
			alt:'Take My Hand poem',
			idName:'rightTop'
		},
		postData: {
			header: "Take My Hand",
			path:`${SERVICES_PATH}/editing.html`,
			content: 'As a published author, I understand what a text needs to be published. Check out the information on my <a href="./pgs/services/editing.html">editing</a> services.'
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/fathers_touch_poem.png`,
			alt:'A Father\'s Touch poem',
			idName:'leftBottom'
		},
		postData: {
			header:'A Father\'s Touch',
			path:`${SERVICES_PATH}/editing.html`,
			content:'As a published editor, I am excited to work with you to bring your words and art wherever you desire them to be! Check out the information on my <a href="./pgs/services/editing.html">editing</a> services.'
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/reed_scraping_types.png`,
			alt:'Types of reed scraping',
			idName:'middleLeftBottom'
		},
		postData: {
			header: "Reedmaking",
			path:`${SERVICES_PATH}/reedmaking.html`,
			content: "I make and sell reeds at all different stages of the reedmaking process to aid whatever your reed needs are."
		}
	},
	{
		imageData: {
			path:`${IMG_PATH}/dank_haus_ungovernables.png`,
			alt:'Dank Haus Ungovernables',
			idName:'rightBottom'
		},
		postData: {
			header: "Performance",
			path:`${SERVICES_PATH}/performances.html`,
			content:"Carl Colvin performing with hip hop group Kao Ra Zen and the Ungovernables."
		}
	}
];

export { collageImages }