// Special methods used by the Performance page
// Can be used by methods specified in load_methods.ts

// Imports
// interfaces
import { ImageHeaderInterface } from './interfaces'
// methods
import { createElement, createTextElement, createImageElement } from '../../../../global/methods'

// Methods will take in an object of type ImageHeaderInterface
// Returns relative container with proper designed
const createImageHeader = (headerData:ImageHeaderInterface):void => {
	// Container to hold every element of the header
	let cont:any = createElement({className:"imageHeaderCont"});
	let centerCont:any = createCenterImageHeader(headerData);

	// "hr" element to be display on left of header and images
	//let leftHrCont:any = createElement({className:"hrCont",idName:"leftHrCont"});
	//let leftHr:any = createElement({element:"hr",className:"",idName:"hrLeft"});
	// Append hr to it's container to be later used to calculate sizing
	//leftHrCont.appendChild(leftHr);
	
	// "hr" element to be display on right of header and images
	//let rightHrCont:any = createElement({className:"hrCont",idName:"rightHrCont"});
	//let rightHr:any = createElement({element:"hr",idName:"hrRight"});
	// Append hr to it's container to be later used to calculate sizing
	//rightHrCont.appendChild(rightHr);

	// Append elements to parent container
	//cont.appendChild(leftHrCont);
	cont.appendChild(centerCont);
	//cont.appendChild(rightHrCont);

	// Apend Container to document
	document.body.appendChild(cont);
}

const createCenterImageHeader = (headerData:ImageHeaderInterface):any => {
	let cont:any = createElement({className:"centerHeaderCont"});

	// Musical symbol to be display on left side of header
	let leftSymbol:any = createImageElement({
		src:headerData.image.path,
		alt:headerData.image.alt,
		className:"musicalSymbol",
	});
	// Header text to be at the center of the container
	let header:any = createTextElement({
		element:"h3",
		text:headerData.header
	});
	// Musical symbol to be display on right side of header
	let rightSymbol:any = createImageElement({
		src:headerData.image.path,
		alt:headerData.image.alt,
		className:"musicalSymbol"
	});
	
	// Append Header and Symbols to center container
	cont.appendChild(leftSymbol);
	cont.appendChild(header);
	cont.appendChild(rightSymbol);

	return cont;
}
export { createImageHeader }