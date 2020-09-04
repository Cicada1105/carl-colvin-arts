/*		This file contains event listeners for the home page		*/
// Imports
//	methods
//		local
import { displayImagePost } from './display'
//	data
import { imgPostArray } from './create'

function ArrowClickListener(event:any) {
	// Store current target
	let arrow:Element = event.target;
	// Store current target's parent container
	let arrowParent:HTMLDivElement = <HTMLDivElement>arrow.parentElement;
	// Store current post container
	let postCont:HTMLDivElement = <HTMLDivElement>arrowParent.parentElement;

	// Mimic click event of exit button
	let clickEvent:any = new Event("click");
	// Store exit button
	let exitButton:Element = <Element>postCont.nextElementSibling;
	exitButton.dispatchEvent(clickEvent);

	// Store current index
	let currentIndex:number = this;
	// Increment or Decrement to next post based on target pressed
	currentIndex += arrow.className.includes("left") ? -1 : 1;
	// Display current post data
	displayImagePost(imgPostArray[currentIndex].img,imgPostArray[currentIndex].postData);
}

function MobileListener():void {
	if (window.innerWidth < 900) {
		if (!(document.getElementById("postBackdrop"))) 
			displayImagePost(imgPostArray[0].img, imgPostArray[0].postData);
		
		window.removeEventListener("resize",MobileListener);
		window.addEventListener("resize",DesktopListener);
	}
}
function DesktopListener():void {
	if (window.innerWidth >= 900) {
		let click:any = new Event("click");
		// Remove image post if displayed by dispatching exit event
		document.getElementsByClassName("fas fa-times")[0].dispatchEvent(click) || console.log("Not displayed");

		window.removeEventListener("resize", DesktopListener);
		window.addEventListener("resize",MobileListener);
	}
}

export { ArrowClickListener, MobileListener, DesktopListener }