// Imports
//  interfaces
//		global
import { IBox } from '@global/interfaces/general'
//	methods
//		global
import { createElement } from '@global/methods/elements'
//		local
import { createPostCont } from './create'
//	classes
import { HomeComponentPositioning } from '../classes/ComponentPositioning'

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
const displayImagePost = (img:HTMLImageElement, postData:IBox<string>):void => {
	let imgPostBackdrop:HTMLDivElement = createElement({
		idName:"postBackdrop"
	});

	// Get element to insert "post" cont before
	let rows:HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("row") as HTMLCollectionOf<HTMLElement>;

	// Create container for image and post details
	let imgPostCont:HTMLDivElement = createElement({
		idName:"imgPostCont"
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
	// Add lazy loading attribute to exit button for faster processing
	exitButton.setAttribute("loading","lazy");

	// Add event listener to exit button to remove backdrop and image post container
	exitButton.addEventListener("click",() => {
		imgPostBackdrop.remove();
		imgPostCont.remove();
	});


	// Append image container, post container, and exit button to "pop up" container
	imgPostCont.appendChild(imgCont);
	imgPostCont.appendChild(postCont);
	imgPostCont.appendChild(exitButton);

	// Create "instance" of singleton class, passing in necessary data
	HomeComponentPositioning.create(imgPostCont);
	// Store imgPostCont in Singleton Pattern class to handle position updates
	const homeCompPos:HomeComponentPositioning = HomeComponentPositioning.getInstance();
	// Update home component
	homeCompPos.update();

	
	// Insert backdrop to the page, before the individual rows, to be displayed
	document.body.insertBefore(imgPostBackdrop, rows[0]);
	// Insert "pop up" container to the page, before the individual rows, to prevent inheriting properties from backdrop
	document.body.insertBefore(imgPostCont, rows[0]);
}

export { displayImagePost }