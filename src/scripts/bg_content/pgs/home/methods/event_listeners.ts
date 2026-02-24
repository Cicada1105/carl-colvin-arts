/*		This file contains event listeners for the home page		*/
// Imports
//	methods
//		local
import { displayImagePost, displayMobileImagePost } from './display'
//	data
import CollageData from '../classes/CollageData'
//	classes
import { HomeComponentPositioning } from '../classes/ComponentPositioning'

function ArrowClickListener(event:MouseEvent | KeyboardEvent) {
	// Store current target
	let arrowDiv:HTMLDivElement = event.currentTarget as HTMLDivElement;
	let arrow:HTMLElement = arrowDiv.firstChild as HTMLElement;

	// Increment or Decrement to next post based on target pressed
	arrow.className.includes("left") ? CollageData.previousImage() : CollageData.nextImage();
	// Display current post data
	window.innerWidth <= 900 ? displayMobileImagePost() : displayImagePost();
}

function MobileListener():void {
	if (window.innerWidth <= 900) {
		if (!(document.getElementById("postBackdrop"))) 
			displayMobileImagePost();

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