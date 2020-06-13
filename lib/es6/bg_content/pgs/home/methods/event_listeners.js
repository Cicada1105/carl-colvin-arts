/*		This file contains event listeners for the home page		*/
// Imports
//	methods
//		local
import { displayImagePost } from './display';
//	data
import { imgPostArray } from './create';
function ArrowClickListener(event) {
    // Store current target
    let arrow = event.target;
    // Store current target's parent container
    let arrowParent = arrow.parentElement;
    // Store current post container
    let postCont = arrowParent.parentElement;
    // Mimic click event of exit button
    let clickEvent = new Event("click");
    // Store exit button
    let exitButton = postCont.nextElementSibling;
    exitButton.dispatchEvent(clickEvent);
    // Store current index
    let currentIndex = this;
    // Increment or Decrement to next post based on target pressed
    currentIndex += arrow.className.includes("left") ? -1 : 1;
    // Display current post data
    displayImagePost(imgPostArray[currentIndex].img, imgPostArray[currentIndex].postData);
}
export { ArrowClickListener };
