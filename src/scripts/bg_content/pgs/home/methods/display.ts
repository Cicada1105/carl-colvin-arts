// Imports
//  interfaces
//		global
import { IBox } from '../../../../global/interfaces'
//	methods
//		global
import { createElement } from '../../../../global/methods'
//		local
import { createPostCont } from './create'
//	data
import { imgPostArray } from './create'

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
const displayImagePost = (img:HTMLImageElement, postData:IBox):void => {
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

export { displayImagePost, storeCurrentImage }