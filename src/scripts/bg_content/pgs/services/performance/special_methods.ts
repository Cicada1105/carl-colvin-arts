// Special methods used by the Performance page
// Can be used by methods specified in load_methods.ts

// Imports
// interfaces
import { ICustomContainer, ImageHeaderInterface as IHeader, IBody } from './interfaces'
// methods
import { createElement, createTextElement, createImageElement } from '../../../../global/methods'

// Methods will take in an object of type ImageHeaderInterface
// Returns relative container with proper designed
const createSection = (headerData:ICustomContainer):void => {
	// Container to hold every element of the header
	let cont:any = createElement({className:"sectionCont"});

	// Create header and body of performance section
	let headerCont:any = createImageHeader(<IHeader>headerData.header);
	let dataCont:any = createContent(<IBody>headerData.body);

	// Append elements to parent container
	cont.appendChild(headerCont);
	cont.appendChild(dataCont);

	// Apend Container to document
	document.body.appendChild(cont);
}

const createContent = (body:IBody):any => {
	// Creating an additional container will allow for easy styling
	let cont:any = createElement({
		className:"bodyCont",
	});
	let stageCont:any = createElement({
		className:"stage"
	});
	let text:any = createTextElement({
		text:body.content,
		className:"bodyText"
	});
	let stageFrontCont:any = createElement({
		className:"stageFront"
	});

	// Append text to stage container
	stageCont.appendChild(text);

	// Append stage front and stage to container
	cont.appendChild(stageCont);
	cont.appendChild(stageFrontCont);

	return cont;
}
const createImageHeader = (headerData:IHeader):any => {
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
		text:headerData.data
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
export { createSection }