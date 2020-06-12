// This file contains methods aiding in the creation of the pop up window for clicking on collage images
/*
	Note: The CSS style needs to be finished loading in order to get
	proper dimensions of the images in the collage. Proper dimensions 
	gives accurate display popup window dimensions
*/
// Imports
//  interfaces
import { IBox } from '../../../global/interfaces'
import { IPostData } from './interfaces'
//	methods
import { createElement, createTextElement } from '../../../global/methods'
//  data 
import { collageImages } from './data'

let imgPostArray:Array<IPostData> = [];

/*const addImageListener = () => {
	// Add click event listener after loading images to body to get css computed dimensions for pop up window
	collageImages.forEach((img, i) => {
		let currImgElement:HTMLImageElement = document.querySelector("#collage").children.namedItem(img.imageData.idName);
		let postData:IBox = <IBox>img.postData;

		let imgClone:HTMLImageElement = <HTMLImageElement>currImgElement.cloneNode(true);

		currImgElement.addEventListener("click", () => {
			displayImagePost(imgClone, postData);
		});
	});
}*/

const storeCurrentImage = (image:HTMLImageElement, data:IBox):void => {
	imgPostArray.push({img:image, postData:data});
}
/*
	@params
	img:HTMLImageElement
		-Image to be appended to the pop up window that the user clicked on
	postData:IBox
		-Data associated with/describing img

	This function will create "pop up" window/post that will hold image on left
		and container holding the data describing the image, arrow keys and exit
		button on the right. Result will be automatically display to document

	@return
	void
*/
const displayImagePost = (img:any, postData:IBox):void => {

	let imgPostBackdrop:HTMLDivElement = createElement({
		idName:"postBackdrop"
	});

	// Create container for image and post details
	let imgPostCont:HTMLDivElement = createElement({
		className:"imgPostCont"
	});

	// Create container for image
	let imgCont:HTMLDivElement = createElement({
		className:"imgCont"
	});
	// Append image to container
	imgCont.appendChild(img);

	// Create container that holds post details, functionality and exit
	let postCont:HTMLDivElement = createPostCont(postData);

	// Create exit button
	let exitButton:HTMLElement = createElement({element:"i",className:"fas fa-times"});
	// Add event listener to exit button to remove backdrop and image post container
	exitButton.addEventListener("click",() => {
		imgPostBackdrop.remove();
		imgPostCont.remove();
	});


	// Append image container, post container, and exit button to "pop up" container
	imgPostCont.appendChild(imgCont);
	imgPostCont.appendChild(postCont);
	imgPostCont.appendChild(exitButton);

	// Depending on image size and its affect on imgPostCont, center accordingly
	// Image computed dimensions after style has been applied
	//let widthStr:string = window.getComputedStyle(img)["width"];	// Returns string with px
	//let heightStr:string = window.getComputedStyle(img)["height"];	// Returns string with px

	//let width:number = parseFloat(widthStr);
	//let height:number = parseFloat(heightStr);
	let width:number = img.width;
	let height:number = img.height;
	/*
		Default width and height of container 40rem x 20rem (640px x 320px)
			centering image by 50% results in left and top being at 50% and not the 
			center of the container. 
				-If height is greater than default height, "subtract"
				margin top by half height for vertical centering, else "subtract" half of 
				default: 160
				-If width is greater than half of default width (one side for image one
				side for post), "subtract" margin left by half for horizontal centering,
				else "subtract" half of default: 320
	*/
	imgPostCont.style.marginTop = -(height > 320 ? (height / 2) : 160) + "px";
	imgPostCont.style.marginLeft = -(width > 320 ? width : 320) + "px";
	// Size container according to image dimensions 
	// 		if height > default height => imgPostCont height = image height
	//		if width > half of default width => imgPostCont width = image width times two
	imgPostCont.style.height = (height > 320 ? height : 320) + "px";
	imgPostCont.style.width = (width > 320 ? (width * 2) : 640) + "px";
	
	// Append backdrop to the page to be displayed
	document.body.appendChild(imgPostBackdrop);
	// Append "pop up" container to the page to prevent inheriting properties from backdrop
	document.body.appendChild(imgPostCont);
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
		leftArrow.addEventListener("click", () => {
			// Mimic click event of exit button
			let clickEvent:any = new Event("click");
			let exitButton:Element = <Element>postCont.nextElementSibling;
			exitButton.dispatchEvent(clickEvent);

			// Deccrement to next post
			currentPostIndex--;
			// Display current post data
			displayImagePost(imgPostArray[currentPostIndex].img,imgPostArray[currentPostIndex].postData);
		});
	}
	// Append left arrow to positioning container
	leftArrowCont.appendChild(leftArrow);

	// Create container for post 
	let postCardCont:HTMLDivElement = postCard(postData);

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
		rightArrow.addEventListener("click", () => {
			// Remove current post by accessing exit button
			// Mimi click event of exit button
			let clickEvent:any = new Event("click");
			let exitButton:Element = <Element>postCont.nextElementSibling;
			// Remove current post by accessing exit button
			exitButton.dispatchEvent(clickEvent);
	
			// Increment to next post
			currentPostIndex++;
			// Display current post data
			displayImagePost(imgPostArray[currentPostIndex].img,imgPostArray[currentPostIndex].postData)
		});
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
const postCard = (postData:IBox):HTMLDivElement => {
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

export { displayImagePost, storeCurrentImage }