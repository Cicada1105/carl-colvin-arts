// This file contains methods aiding in the creation of the pop up window for clicking on collage images
/*
	Note: The CSS style needs to be finished loading in order to get
	proper dimensions of the images in the collage. Proper dimensions 
	gives accurate display popup window dimensions
*/
// Imports
//  interfaces
//		global
import { IBox } from '../../../../global/interfaces'
//		local
import { IPostData } from '../interfaces'
//	methods
//		global
import { createElement, createTextElement } from '../../../../global/methods'
//	event listeners
import { ArrowClickListener } from './event_listeners'
//  data 
import { collageImages } from '../data'

let imgPostArray:Array<IPostData> = [];

/*
	@params
	postData:IBox
		-header and content to be displayed to the side of image

	This function creates elements for post and left and right arrows

	@return
	postCont:any
		-Container holding left and right arrows and post data
*/
const createPostCont = (postData:IBox):HTMLDivElement => {
	// Store current location of postData 
	// findIndex loops through array then returns first index of element that passes test
	let currentPostIndex:number = imgPostArray.findIndex((currPost) => currPost.postData.header === postData.header);

	// Post container will hold the two "panels" one that holds image on left 
	//  and one that holds caption on right
	let postCont:HTMLDivElement = createElement({
		className:"postCont"
	});

	// Create container for left arrow for positioning
	let leftArrowCont:HTMLDivElement = createElement({
		className:"arrowCont",
		idName:"leftArrowCont"
	});

	// Create left arrow
	let leftArrow:HTMLElement = createElement({element:"i",className:"fas fa-chevron-left"});
	// Only add event listener to left arrow if current post is not the first post
	if (currentPostIndex > 0) {
		// Add event listener for cycling through posts going to the left
		//	bind currentPostIndex to manipulate variable
		leftArrow.addEventListener("click", ArrowClickListener.bind(currentPostIndex));
	}

	// Append left arrow to positioning container
	leftArrowCont.appendChild(leftArrow);

	// Create container for post 
	let postCardCont:HTMLDivElement = createPostCard(postData);

	// Create container for right arrow for positioning
	let rightArrowCont:HTMLDivElement = createElement({
		className:"arrowCont",
		idName:"rightArrowCont"
	});

	// Create right arrow 
	let rightArrow:HTMLElement = createElement({element:"i",className:"fas fa-chevron-right"});
	// Only add event listener to right arrow if current post is not the last post
	if (currentPostIndex < (imgPostArray.length - 1)) {
		// Add event listener for cycling through posts going to the right
		//	bind currentPostIndex to manipulate variable
		rightArrow.addEventListener("click", ArrowClickListener.bind(currentPostIndex));
	}

	// Append right arrow to positioning container
	rightArrowCont.appendChild(rightArrow);

	// Append left arrow container, postCardCont and right arrow container to postCont
	postCont.appendChild(leftArrowCont);
	postCont.appendChild(postCardCont);
	postCont.appendChild(rightArrowCont);

	return postCont;
}

/*
	@params
	postData:IBox
		-Data to be displayed describing image

	This function creates the actual content for the post describing the current image

	@return
	cont:any
		-Container holding the header, hr divider and content of the image
*/
const createPostCard = (postData:IBox):HTMLDivElement => {
	let cont:HTMLDivElement = createElement({
		className:"postDataCont"
	});

	let header:string = postData.header;
	let content:string = postData.content;

	// Create header container
	let headerCont:HTMLHeadingElement = createTextElement({
		element:"h3",
		text:header,
		idName:"postCardHeader"
	});
	// Create hr to section header from content
	let hr:HTMLHRElement = createElement({
		element:"hr",
		idName:"postCardHr"
	});
	// Create content container
	let contentCont:HTMLParagraphElement = createTextElement({
		text:content,
		idName:"postCardContent"
	});

	// Append header, hr and content to postCard
	cont.appendChild(headerCont);
	cont.appendChild(hr);
	cont.appendChild(contentCont);

	return cont;
}

export { createPostCont, imgPostArray }