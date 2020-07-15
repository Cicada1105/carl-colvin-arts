// Interfaces that only pertain to the home page

import { IImage, IBox } from '../../../global/interfaces/general'

interface ICollage extends IImage {
	idName:string;
}

// Each image will have imageData and postData
interface IPost {
	imageData: ICollage;
	postData: IBox;
}

// Interface that defines data to be stored in an array to allow user to 
//	click left and right arrows, going from one post to another
interface IPostData {
	img: HTMLImageElement;
	postData: IBox;
}

export { ICollage, IPost, IPostData }