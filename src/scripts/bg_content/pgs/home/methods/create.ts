// This file contains methods aiding in the creation of the pop up window for clicking on collage images
/*
	Note: The CSS style needs to be finished loading in order to get
	proper dimensions of the images in the collage. Proper dimensions 
	gives accurate display popup window dimensions
*/
// Imports
//  interfaces
//		global
import { IBox } from '@global/interfaces/general'
//	methods
//		global
import { createElement, createTextElement } from '@global/methods/elements'
//	event listeners
import { ArrowClickListener } from './event_listeners'
//  data 
import CollageData from '../classes/CollageData'

function enterKeyPressed(event:KeyboardEvent):boolean {
	const ENTER_STRING:string = 'Enter';
	const LINE_FEED_CODE:number = 10;
	const CARRIAGE_RETURN_CODE:number = 13;

	let key:string = event.key;
	let keyCode:number = event.keyCode;

	return (
		key.localeCompare(ENTER_STRING) === 0 || 
		keyCode === LINE_FEED_CODE || 
		keyCode === CARRIAGE_RETURN_CODE
	);
}

const createPostDialog = ():void => {
	const dialog:HTMLDialogElement = createElement({
		element: 'dialog',
		idName: 'imgPostCont'
	});

	// Create container for image
	let imgCont:HTMLDivElement = createElement({
		idName:"imgCont"
	});

	// Creat container for post content
	const postCont:HTMLDivElement = createPostCont();

	// Create exit button
	let exitButton:HTMLElement = createElement({element:"i",className:"fas fa-times"});
	// Allow exit buttn to be the last keyboard focusable element
	exitButton.setAttribute('tabindex','0');
	// Add lazy loading attribute to exit button for faster processing
	exitButton.setAttribute("loading","lazy");
	exitButton.addEventListener('click',() => {
		dialog.close();
	})

	exitButton.addEventListener('keyup',(e) => {
		if ( enterKeyPressed(e) ) {
			dialog.close();
		}
	});

	// Append image and post containers to the dialog
	dialog.appendChild(imgCont);
	dialog.appendChild(postCont);
	dialog.appendChild(exitButton)

	document.body.appendChild(dialog);
}
/*
	@params
	postData:IBox
		-header and content to be displayed to the side of image

	This function creates elements for post and left and right arrows

	@return
	postCont:any
		-Container holding left and right arrows and post data
*/
const createPostCont = ():HTMLDivElement => {
	// Post container will hold the two "panels" one that holds image on left 
	//  and one that holds caption on right
	let postCont:HTMLDivElement = createElement({
		idName:"postCont"
	});

	// Create container for left arrow for positioning
	let leftArrowCont:HTMLDivElement = createElement({
		className:"arrowCont",
		idName:"leftArrowCont"
	});

	// Create left arrow div container to receive focus
	let leftArrowSpan:HTMLDivElement = document.createElement('div');
	// Make left arrow be the first keyboard focusable element
	leftArrowSpan.setAttribute('tabindex','1')
	// Add event listener for cycling through posts going to the left
	leftArrowSpan.addEventListener("click", ArrowClickListener);	// Note: Out of bounds checking handled by CollageData class
	// Add keyboard event for cycling through posts going left
	leftArrowSpan.addEventListener('keyup',(e) => {
		if ( enterKeyPressed(e) ) {
			ArrowClickListener(e);
		}
	});
	// Create left arrow
	let leftArrow:HTMLElement = createElement({element:"i",className:"fas fa-chevron-left"});
	// Append left arrow to the div element
	leftArrowSpan.appendChild(leftArrow);
	// Append left arrow div element to positioning container
	leftArrowCont.appendChild(leftArrowSpan);

	// Create container for post 
	let postCardCont:HTMLDivElement = createPostContent();

	// Create container for right arrow for positioning
	let rightArrowCont:HTMLDivElement = createElement({
		className:"arrowCont",
		idName:"rightArrowCont"
	});
	// Create right arrow div element to receive focus
	let rightArrowSpan:HTMLDivElement = document.createElement('div');
	// Make right arrow the second keybaord focusable element
	rightArrowSpan.setAttribute('tabindex','2');
	// Add event listener for cycling through posts going to the right
	rightArrowSpan.addEventListener("click", ArrowClickListener);	// Note: Out of bounds checking handled by CollageData class
	// Add keyboard event for cycling through posts going right
	rightArrowSpan.addEventListener('keyup',(e) => {
		if ( enterKeyPressed(e) ) {
			ArrowClickListener(e);
		}
	});
	// Create right arrow 
	let rightArrow:HTMLElement = createElement({element:"i",className:"fas fa-chevron-right"});
	// Append right arrow to the div element
	rightArrowSpan.appendChild(rightArrow);
	// Append right arrow to positioning container
	rightArrowCont.appendChild(rightArrowSpan);

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
const createPostContent = ():HTMLDivElement => {
	let cont:HTMLDivElement = createElement({
		idName:"postDataCont"
	});

	// Create header container
	let headerCont:HTMLHeadingElement = createElement({
		element:"h3",
		idName:"postCardHeader"
	});

	// Create hr to section header from content
	let hr:HTMLHRElement = createElement({
		element:"hr",
		idName:"postCardHr"
	});

	// Create flex wrapper for the content container to vertically align paragraph with links
	let contentContWrapper:HTMLDivElement = createElement({
		idName: 'postCardContentWrapper'
	});
	// Create content container
	let contentCont:HTMLParagraphElement = createElement({
		element: 'p',
		idName: 'postCardContent'
	});
	// Append post card content container to the wrapper
	contentContWrapper.appendChild(contentCont);

	// Append header, hr and content to postCard
	cont.appendChild(headerCont);
	cont.appendChild(hr);
	cont.appendChild(contentContWrapper);

	return cont;
}

export { createPostDialog, createPostCont }