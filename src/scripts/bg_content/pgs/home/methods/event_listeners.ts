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

export { ArrowClickListener }