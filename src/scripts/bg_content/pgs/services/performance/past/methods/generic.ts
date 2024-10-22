/*
	This file contains functions for elements specific to past performance page
*/

// Imports
import { createElement, createTextElement, createImageElement } from '../../../../../../global/methods/elements';
import { IGenericCard, IHeader } from '../interfaces';

const createPageSection:(cardTitle:string)=>HTMLElement = (title:string):HTMLElement => {
	// Create card container
	const cont:HTMLElement = createElement({
		element: 'section',
		className:"pageCardCont"
	});

	// Create title of card
	let cardTitle:HTMLHeadingElement = createTextElement({
		element:"h2",
		text: title,
		className:"pageCardTitle"
	});

	// Append card title to container
	cont.appendChild(cardTitle);

	return cont;
}
const createGenericCard:(genericUserData:IGenericCard)=>void = (data:IGenericCard):void => {
	// Create heading group for generic group 
	let cardHeadingGroup:HTMLElement = createHeaderGroup(data["headers"]);

	// Create image for generic card
	let cardImg:HTMLImageElement = createImageElement({
		src:data.img["src"],
		alt:data.img["alt"]
	});

	// Append heading group and image to parent container 
	data["parent"].appendChild(cardImg);
	data["parent"].appendChild(cardHeadingGroup);
}
const createHeaderGroup:(headers:IHeader[])=>HTMLElement = (headers:IHeader[]):HTMLElement => {
	// Create group heading to hold all headers 
	let headingGroup:HTMLElement = document.createElement("hgroup");

	// Loop through headers, creating specific header and appending it to header group 
	headers.forEach((header:IHeader) => {
		let h:HTMLHeadingElement = createTextElement({
			element: header["tagname"],
			text: header["text"]
		});
		headingGroup.appendChild(h);
	});

	return headingGroup;
}

export { createPageSection, createGenericCard, createHeaderGroup }