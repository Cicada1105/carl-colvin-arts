/*
	Load methods for the home page
*/
// Imports
//	interfaces
import { IBox } from '../../../../global/interfaces/general'
import { ICollage } from '../interfaces'
//	methods
import { createElement, createImageElement } from '../../../../global/methods/elements'
import { displayImagePost } from './display'
//	data
import { collageImages } from '../data'
import CollageData from '../classes/CollageData'

const loadMobileDisplay = ():void => {
	// Only store images if they have not already been created by loadCollage
	if (CollageData.isEmpty()) {
		collageImages.forEach((img) => {
			let imgNode:HTMLImageElement = loadImage(<ICollage>img.imageData);
			let postData:IBox<string> = <IBox<string>>img.postData;

			CollageData.storeImage(imgNode, postData);
		});
	}
	
	CollageData.current_index === 0 && CollageData.getImage().addEventListener("load", () => {
		displayImagePost(CollageData.getImage(), CollageData.getData());	
	}, {once: true});
}
const loadCollage = ():void => {
	let collageCont:HTMLDivElement = createElement({
		idName:"collage"
	});

	// Only store data if D=CollageData is empty
	if (CollageData.isEmpty()) {
		collageImages.forEach((img) => {
			let imgNode:HTMLImageElement = loadImage(<ICollage>img.imageData);

			let postData:IBox<string> = <IBox<string>>img.postData;

			// Clone node to be displayed in pop up when user clicks on image
			let imgClone:HTMLImageElement = <HTMLImageElement>imgNode.cloneNode(true);

			// Store current image clone and post data to be used to cycle through posts
			//	-only want to store once and not each time image is clicked
			CollageData.storeImage(imgClone, postData);

			imgNode.addEventListener("click", () => {
				displayImagePost(imgClone, postData);
			});
			// Append image to the collage container
			collageCont.appendChild(imgNode);
		});
	}
	else {
		collageImages.forEach((img,index) => {
			let imgNode:HTMLImageElement = loadImage(<ICollage>img.imageData);

			CollageData.goToIndex(index);

			imgNode.addEventListener("click", () => {
				displayImagePost(CollageData.getImage(), CollageData.getData());
			});
			// Append image to the collage container
			collageCont.appendChild(imgNode);
		});
	}
	let rows:HTMLCollection = document.getElementsByClassName("row");
	let row:HTMLDivElement = <HTMLDivElement>rows[0];
	document.body.insertBefore(collageCont,row);
}

const loadImage = (imgData:ICollage):HTMLImageElement => {
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