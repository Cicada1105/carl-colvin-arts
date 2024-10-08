/*		This file contains event listeners for the home page		*/
// Imports
//	methods
//		local
import { displayImagePost } from './display'
//	data
import CollageData from '../classes/CollageData'
//	classes
import { HomeComponentPositioning } from '../classes/ComponentPositioning'

function ArrowClickListener(event:MouseEvent) {
	// Store current target
	let arrow:HTMLElement = event.target as HTMLElement;
	// Store current target's parent container
	let arrowParent:HTMLDivElement = <HTMLDivElement>arrow.parentElement;
	// Store current post container
	let postCont:HTMLDivElement = <HTMLDivElement>arrowParent.parentElement;

	// Mimic click event of exit button
	let clickEvent:Event = new Event("click");
	// Store exit button
	let exitButton:Element = <Element>postCont.nextElementSibling;
	exitButton.dispatchEvent(clickEvent);

	// Increment or Decrement to next post based on target pressed
	arrow.className.includes("left") ? CollageData.previousImage() : CollageData.nextImage();
	// Display current post data
	displayImagePost(CollageData.getImage(),CollageData.getData());
}

function MobileListener():void {
	if (window.innerWidth <= 900) {
		if (!(document.getElementById("postBackdrop"))) 
			displayImagePost(CollageData.getImage(), CollageData.getData());

		window.removeEventListener("resize",MobileListener);
		window.addEventListener("resize",DesktopListener);
	}
}
function DesktopListener():void {
	if (window.innerWidth > 900) {
		let click:Event = new Event("click");
		// Remove image post if displayed by dispatching exit event
		document.getElementsByClassName("fas fa-times")[0].dispatchEvent(click) || console.log("Not displayed");

		window.removeEventListener("resize", DesktopListener);
		window.addEventListener("resize",MobileListener);
	}
	else {
		const homeCompPos:HomeComponentPositioning = HomeComponentPositioning.getInstance();
		homeCompPos.update();
	}
}

export { ArrowClickListener, MobileListener, DesktopListener }