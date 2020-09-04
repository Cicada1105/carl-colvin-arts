/*		This file contains event listeners for the home page		*/
// Imports
//	methods
//		local
import { displayImagePost } from './display';
//	data
import CollageData from '../classes/CollageData';
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
    // Increment or Decrement to next post based on target pressed
    arrow.className.includes("left") ? CollageData.previousImage() : CollageData.nextImage();
    // Display current post data
    displayImagePost(CollageData.getImage(), CollageData.getData());
}
function MobileListener() {
    if (window.innerWidth < 900) {
        if (!(document.getElementById("postBackdrop")))
            displayImagePost(CollageData.getImage(), CollageData.getData());
        window.removeEventListener("resize", MobileListener);
        window.addEventListener("resize", DesktopListener);
    }
}
function DesktopListener() {
    if (window.innerWidth >= 900) {
        let click = new Event("click");
        // Remove image post if displayed by dispatching exit event
        document.getElementsByClassName("fas fa-times")[0].dispatchEvent(click) || console.log("Not displayed");
        window.removeEventListener("resize", DesktopListener);
        window.addEventListener("resize", MobileListener);
    }
}
export { ArrowClickListener, MobileListener, DesktopListener };
