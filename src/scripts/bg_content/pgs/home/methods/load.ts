/*
	Load methods for the home page
*/
// Imports
//	interfaces
import { IBox } from '@global/interfaces/general'
import { ICollageImage, ICollageBox } from '../interfaces'
//	methods
import { createElement, createImageElement } from '@global/methods/elements'
import { displayImagePost } from './display'
import { createPostDialog } from './create'
//	data
import { collageImages } from '../data'
import CollageData from '../classes/CollageData'

const loadMobileDisplay = ():void => {
	// Only store images if they have not already been created by loadCollage
	if (CollageData.isEmpty()) {
		collageImages.forEach((img) => {
			let imgNode:HTMLImageElement = loadImage(<ICollageImage>img.imageData);
			let postData:ICollageBox = <ICollageBox>img.postData;

			CollageData.storeImage(imgNode, postData);
		});
	}
	
	CollageData.current_index === 0 && CollageData.getImage().addEventListener("load", () => {
		displayImagePost();	
	}, {once: true});
}
const loadCollage = ():void => {
	let collageCont:HTMLDivElement = createElement({
		idName:"collage"
	});

	const IS_EMPTY:boolean = CollageData.isEmpty();
	collageImages.forEach((img,index) => {
		let imgElement:HTMLImageElement = loadImage(<ICollageImage>img.imageData);

		let imgNode:HTMLImageElement;
		let postData:ICollageBox;
		// Only store data if Collage is empty
		if ( IS_EMPTY ) {
			// Clone node to be displayed in pop up when user clicks on image
			imgNode = <HTMLImageElement>imgElement.cloneNode(true);

			postData = <ICollageBox>img.postData;

			// Store current image clone and post data to be used to cycle through posts
			//	-only want to store once and not each time image is clicked
			CollageData.storeImage(imgNode, postData);
		}
		else {
			CollageData.goToIndex(index);
			imgNode = CollageData.getImage();
			postData = CollageData.getData();
		}

		imgElement.addEventListener("click", () => {
			CollageData.goToIndex(index);
			displayImagePost();
		});
		// Append image to the collage container
		collageCont.appendChild(imgElement);
	});
	let rows:HTMLCollection = document.getElementsByClassName("row");
	let row:HTMLDivElement = <HTMLDivElement>rows[0];
	document.body.insertBefore(collageCont,row);

	// Create dialog box for image card content
	createPostDialog();
}

const loadImage = (imgData:ICollageImage):HTMLImageElement => {
	let currImg:HTMLImageElement = createImageElement({
		src: imgData.path,
		alt: imgData.alt,
		idName: imgData.idName
	});

	currImg.addEventListener("mouseover",() => {
		console.log("Hover caption: " + imgData.caption);
	});

	return currImg;
}

export { loadMobileDisplay, loadCollage }