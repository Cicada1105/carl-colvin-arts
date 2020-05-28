/*
	Load methods for the home page
*/
// Imports
//	interfaces
import { ICollage } from './interfaces'
//	methods
import { createElement, createImageElement } from '../../../global/methods'
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

		// Append image to the collage container
		collageCont.appendChild(imgNode);
	});

	document.body.appendChild(collageCont);
}

const loadImage = (imgData:ICollage):HTMLImageElement => {
	let currImg:any = createImageElement({
		src: imgData.path,
		alt: imgData.alt,
		idName: imgData.idName
	});

	currImg.addEventListener("hover",() => console.log("Hover caption: " + imgData.caption));

	return currImg;
}



export { loadCollage }