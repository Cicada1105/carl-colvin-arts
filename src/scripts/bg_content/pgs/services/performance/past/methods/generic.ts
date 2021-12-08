/*
	This file contains functions for elements specific to past performance page
*/

// Imports
import { createElement, createTextElement, createImageElement } from '../../../../../../global/methods/elements';
import { IGenericCard, CardOutlineInterface as ICard, IHeader } from '../interfaces';

const createPageSection:(cardTitle:string)=>HTMLDivElement = (title:string):HTMLDivElement => {
	// Create card container
	const cont:HTMLDivElement = createElement({
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
	// Create image element for generic card 
	let cardImg:HTMLImageElement = createImageElement({
		src:data.img["src"],
		alt:data.img["alt"]
	});

	// Append heading group and image to parent container 
	data["parent"].appendChild(cardImg);
	data["parent"].appendChild(cardHeadingGroup);
}
const createCardOutline:(userCardOutlineData:ICard)=>SVGSVGElement = (data:ICard):SVGSVGElement => {
	// Create svg for containing svg elements 
	let svg:SVGSVGElement = <SVGSVGElement>document.createElementNS("http://www.w3.org/2000/svg","svg");
	// Set viewbox of svg
	svg.setAttribute("viewBox",data["viewBox"]);

	// Create polyline for outline 
	let polyline:SVGPolylineElement = document.createElementNS("http://www.w3.org/2000/svg","polyline");
	// Add points attribute 
	polyline.setAttribute("points",data["points"]);
	// Add stroke-dasharray attribute 
	polyline.setAttribute("stroke-dasharray","0");

	// Append polyline and foreign object to svg 
	svg.appendChild(polyline);
	svg.appendChild(data["foreignObject"]);

	return svg;
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

export { createPageSection, createGenericCard, createCardOutline, createHeaderGroup }