// This file contains the interfaces to be used solely by the listen page

// Imports 
import { IImage } from '../../../global/interfaces/general'

interface MediaInterface {
	controls: boolean;
	source: {
		src:string;
		type:string;
	}
}
interface AudioInterface extends MediaInterface{
	image:IImage;
}
interface VideoInterface extends MediaInterface {
	poster:string;
}
interface RowInterface {
	description:string;
	media:AudioInterface | VideoInterface;
}

export { MediaInterface, AudioInterface, VideoInterface, RowInterface }