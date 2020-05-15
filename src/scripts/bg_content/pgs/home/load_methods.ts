/*
	Load methods for the home page
*/
// Imports
//	interfaces
import { IImage } from '../../../global/interfaces'
//	methods
import { createElement, createImageElement } from '../../../global/methods'
//	data
import { collageImages } from './data'

const loadCollage = ():void => {
	let collageCont:any = createElement({
		idName:"collage"
	});

	collageImages.forEach((img) => {
		let imgGridCont:any = createElement({
			className:"collageGridItem"
		});

		imgGridCont.appendChild(loadImage(img));
		
		// Append image grid container to the collage container
		collageCont.appendChild(imgGridCont);
	});

	document.body.appendChild(collageCont);
}

const loadImage = (img:IImage):any => {
	let currImg:any = createImageElement({
		src: img.path,
		alt: img.alt
	});

	currImg.addEventListener("click", () => displayImagePost(currImg));
	currImg.addEventListener("hover", () => {
		console.log("Hovered over: " + currImg);
	});

	return currImg;
}

const displayImagePost = (img:any):void => {
	// Image post and caption will lay on a gray background to create fade effect
	let imgPostBackdrop:any = createElement({
		idName:"postBackdrop"
	});

	let imgPostCont:any = loadPost(img);

	// Append image post container to grayed out background
	imgPostBackdrop.appendChild(imgPostCont);

	// Append post to the page to be displayed
	document.body.appendChild(imgPostBackdrop);
}

const loadPost = (img:any):any => {
	// Post container will hold the two "panels" one that holds image on left 
	//  and one that holds caption on right
	let imgPostCont:any = createElement({
		idName:"postCont"
	});

	// Container to hold the image and allow a solid background for positioning image properly
	let imageCont:any = createElement({
		idName:"postImage"
	});
	// Caption container will hold the caption for the image on the right
	let captionCont:any = createElement({
		idName:"postCaption"
	});

	// Append image to the image container
	imageCont.appendChild(img);

	// Append image and caption "panels" to the image post container for proper formatting
	imgPostCont.appendChild(imageCont);
	imgPostCont.appendChild(captionCont);

	return imgPostCont;
}
export { loadCollage }