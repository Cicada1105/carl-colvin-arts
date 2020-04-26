// Interfaces specific to performance page

// Import from global interface
import { IImage } from '../../../../global/interfaces'

interface ImageHeaderInterface {
	data:string;
	image:IImage;
}
interface IBody {
	content:string;
}
interface ICustomContainer {
	header:ImageHeaderInterface;
	body:IBody;
}

export { ImageHeaderInterface, IBody, ICustomContainer }