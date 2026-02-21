// Interfaces that only pertain to the home page

import { IImage, IBox } from '@global/interfaces/general'

interface ICollageImage extends IImage {
	idName:string;
}
interface ICollageBox extends IBox<string> {
	path: string;
}
// Each image will have imageData and postData
interface IPost {
	imageData: ICollageImage;
	postData: ICollageBox;
}

// Interface that defines data to be stored in an array to allow user to 
//	click left and right arrows, going from one post to another
interface IPostData {
	img: HTMLImageElement;
	postData: ICollageBox;
}

export { ICollageImage, IPost, IPostData, ICollageBox }