// Imports
//  interfaces
//		global
import { IBox } from '@global/interfaces/general'
//	methods
//		global
import { createElement } from '@global/methods/elements'
//		local
import { createPostCont } from './create'
//	data
import CollageData from '../classes/CollageData'
//	classes
import { HomeComponentPositioning } from '../classes/ComponentPositioning'

/*
	@params
	void

	This function will create "pop up" window/post that will hold image on left
		and container holding the data describing the image, arrow keys and exit
		button on the right. Result will be automatically display to document

	@return
	void
*/
const displayImagePost = ():void => {
	// Retrieve dialog
	const dialog:HTMLDialogElement = document.getElementsByTagName('dialog')[0];

	// Update post content
	updateDisplayPost();

	// Show modal
	dialog.showModal();
}

const updateDisplayPost = () => {
	const img:HTMLImageElement = CollageData.getImage();
	const postData:IBox<string> = CollageData.getData();
	const header:string = postData.header;
	const content:string = postData.content;

	// Retrieve dialog
	const dialog:HTMLDialogElement = document.getElementsByTagName('dialog')[0];

	// Retrieve image container from dialog
	let imgCont:HTMLDivElement = dialog.querySelector('#imgCont') as HTMLDivElement;
	// Remove children from parent
	imgCont.childNodes && imgCont.childNodes.forEach(child => child.remove());
	// Append image to container
	imgCont.appendChild(img);

	// Retrieve and update header and paragraph content
	const dataCont:HTMLDivElement = dialog.querySelector('#postDataCont') as HTMLDivElement;
	const headerEl:HTMLHeadingElement = dataCont.querySelector('h3#postCardHeader') as HTMLHeadingElement;
	const contentEl:HTMLParagraphElement = dataCont.querySelector('p#postCardContent') as HTMLParagraphElement;
	headerEl.textContent = header;
	contentEl.innerHTML = content;

	// Create "instance" of singleton class, passing in necessary data
	HomeComponentPositioning.create(dialog);
	// Store dialog in Singleton Pattern class to handle position updates
	const homeCompPos:HomeComponentPositioning = HomeComponentPositioning.getInstance();
	// Update home component
	homeCompPos.update();
}

export { displayImagePost }