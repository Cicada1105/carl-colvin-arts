/*
	Load methods for the home page
*/
// Imports
//	interfaces
import { IBox } from '../../../global/interfaces'
import { ICollage } from './interfaces'
//	methods
import { createElement, createImageElement } from '../../../global/methods'
import { displayImagePost, storeCurrentImage } from './special_methods'
//	data
import { collageImages } from './data'

const loadCollage = ():void => {
	let collageCont:HTMLDivElement = createElement({
		idName:"collage"
	});

	// Keep array of images to loop through for post "slide show"
	//let imgPostArray:Array<Node> = [];

	collageImages.forEach((img) => {
		let imgNode:HTMLImageElement = loadImage(<ICollage>img.imageData);

		// Add click event listener after loading images to body to get css computed dimensions for pop up window
		let postData:IBox = <IBox>img.postData;

		let imgClone:HTMLImageElement = <HTMLImageElement>imgNode.cloneNode(true);

		// Store current image clone and post data to be used to cycle through posts
		storeCurrentImage(imgClone, postData);

		imgNode.addEventListener("click", () => {
			displayImagePost(imgClone, postData);
			//displayImagePost(imgNode.cloneNode(true), postData);
		});
		// Append image to the collage container
		collageCont.appendChild(imgNode);
	});

	document.body.appendChild(collageCont);
}

const loadImage = (imgData:ICollage):HTMLImageElement => {
	let currImg:HTMLImageElement = createImageElement({
		src: imgData.path,
		alt: imgData.alt,
		idName: imgData.idName
	});

	currImg.addEventListener("hover",() => console.log("Hover caption: " + imgData.caption));

	return currImg;
}



export { loadCollage }