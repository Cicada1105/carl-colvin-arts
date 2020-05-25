// Interfaces that only pertain to the home page

import { IImage, IBox } from '../../../global/interfaces'

interface ICollage extends IImage {
	idName:string;
}

// Each image will have imageData and postData
interface IPost {
	imageData: ICollage;
	postData: IBox;
}

export { IPost, ICollage }