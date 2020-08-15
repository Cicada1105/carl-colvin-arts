/*
	Load methods for the home page
*/
// Imports
//	interfaces
import { IBox } from '../../../../global/interfaces/general'
import { ICollage } from '../interfaces'
//	methods
import { createElement, createImageElement } from '../../../../global/methods/elements'
import { displayImagePost, storeCurrentImage } from './display'
//	data
import { collageImages } from '../data'

const loadCollage = ():void => {
	let collageCont:HTMLDivElement = createElement({
		idName:"collage"
	});

	collageImages.forEach((img) => {
		let imgNode:HTMLImageElement = loadImage(<ICollage>img.imageData);

		let postData:IBox = <IBox>img.postData;

		// Clone node to be displayed in pop up when user clicks on image
		let imgClone:HTMLImageElement = <HTMLImageElement>imgNode.cloneNode(true);

		// Store current image clone and post data to be used to cycle through posts
		//	-only want to store once and not each time image is clicked
		storeCurrentImage(imgClone, postData);

		imgNode.addEventListener("click", () => {
			displayImagePost(imgClone, postData);
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

	currImg.addEventListener("mouseover",() => {
		console.log("Hover caption: " + imgData.caption);
	});

	return currImg;
}



export { loadCollage }