// Imports
//	interfaces
//		Local
import { IBox } from '@global/interfaces/general'
//	    Global
import { IPostData, ICollageBox } from '../interfaces'

class CollageData {
	private static curr_pos:number = -1;
	private static img_post_array:IPostData[] = [];

	static storeImage(image:HTMLImageElement, data:ICollageBox) {
		CollageData.img_post_array.push({
			img: image,
			postData: data
		});
		// If first element added to array, current position === 0
		//	else don't do anything to prevent from possible overwriting of curr_pos
		CollageData.isEmpty() && (CollageData.curr_pos = 0);
	}
	static getPost():IPostData {
		return CollageData.img_post_array[CollageData.curr_pos];
	}
	static getImage():HTMLImageElement {
		return CollageData.img_post_array[CollageData.curr_pos].img;
	}
	static getData():ICollageBox {
		return CollageData.img_post_array[CollageData.curr_pos].postData;
	}
	static findIndex(data:ICollageBox):number {
		return CollageData.img_post_array.findIndex((currPost:IPostData) => currPost.postData.header === data.header);
	}
	static isEmpty():boolean {
		return CollageData.curr_pos === -1;
	}
	
	static get current_index():number {
		return CollageData.curr_pos;
	}

	static previousImage() {
		CollageData.curr_pos > 0 ? CollageData.curr_pos-- : CollageData.curr_pos = CollageData.img_post_array.length - 1;
	}
	static goToIndex(index:number) {
		(index < CollageData.img_post_array.length) && (CollageData.curr_pos = index);	
	}
	static nextImage() {
		(CollageData.curr_pos < CollageData.img_post_array.length - 1) ? CollageData.curr_pos++ : CollageData.curr_pos = 0;

	}
}

export default CollageData;