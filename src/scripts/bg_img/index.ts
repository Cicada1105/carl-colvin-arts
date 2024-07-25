// Imports
// 	 Global
import { createImageElement } from '../global/methods/elements'
import { getCurrentFile } from '../global/methods/utilities'
//	 Local
import { data as bgImgs } from './data'

const createBgFade = ():void => {
	// Get current path to determine bg image
	const currFile:string = getCurrentFile();

	// Image location
	let imgLocation:string;
	// Image alt
	let imgAlternative:string;
	// Based on current location, display different image
	// Data is associative with currFile being name of key
	imgLocation = bgImgs[currFile].path;
	imgAlternative = bgImgs[currFile].alt;
	// Fade image 
	//let imageFade:any = createImageFade(imgLocation,imgAlternative);
	let imageFade:HTMLImageElement = createImageElement({
		src:imgLocation,
		alt:imgAlternative,
		idName:'bgImage'
	});

	// Add async decoding attribute to background image for faster processing
	imageFade.setAttribute("decoding","async");
	// Remove background image from the accessibility tree
	//	Image is for decoration purposes
	imageFade.setAttribute('aria-hidden','true');
	
	// Append image to document
	document.body.appendChild(imageFade);
}

export { createBgFade }