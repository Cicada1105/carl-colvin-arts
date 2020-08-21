/*
	This file contains the "private" methods in loading the services landing page
*/

// Imports
// interfaces
import { IImage, IBoxLink } from '../../../../../global/interfaces/general'
//	methods
import { createElement, createTextElement, createImageElement } from '../../../../../global/methods/elements'

const createServiceCard = (cardData:IBoxLink<IImage>):HTMLDivElement => {
	const cardCont:HTMLDivElement = createElement({
		className:"serviceCard"
	});

	// Create Header
	let header:HTMLHeadingElement = createTextElement({
		element: "h2",
		text: cardData.header
	});
	// Create SVG for border
	let svgBorder:SVGElement = createSVGBorder();
	// Create image
	let serviceImage:HTMLElement = createImageFigure(cardData.content);
	// Create button
	let serviceLinkButton:HTMLDivElement = createButton(cardData.link);

	// Append contents to service card
	cardCont.appendChild(header);
	cardCont.appendChild(svgBorder);
	cardCont.appendChild(serviceImage);
	cardCont.appendChild(serviceLinkButton);

	return cardCont;
}

const createSVGBorder = ():SVGElement => {
	let svg:SVGElement = <SVGElement>(document.createElement("svg") as unknown);

	// Create polyline to define the border positions and style
	let polyline:SVGPolylineElement = <SVGPolylineElement>(document.createElement("polyline") as unknown);

	// Add points to polyline 
	polyline.setAttribute("points","0,0 300,0 300,340 0,340 0,0");
	// Set styling for polyline
	polyline.setAttribute("fill","none");
	polyline.setAttribute("stroke-width","5");
	polyline.setAttribute("stroke","#de5757");

	// Append polyline to svg
	svg.appendChild(polyline);

	return svg;
}
const createImageFigure = (imgData:IImage):HTMLElement => {
	let imgFigure:HTMLElement = createElement({
		element:"figure",
		className:"imgFigure"
	});

	// Create image element
	let img:HTMLImageElement = createImageElement({
		src: imgData.path,
		alt: imgData.alt
	});
	// Create caption element to go along with image
	let imgCaption:HTMLElement = createTextElement({
		element:"figcaption",
		text:imgData.caption
	});

	// Append image and image caption to figure
	imgFigure.appendChild(img);
	imgFigure.appendChild(imgCaption);

	return imgFigure;
}
const createButton = (link:string):HTMLDivElement => {
	let btnCont:HTMLDivElement = createTextElement({
		element:"div",
		className: "serviceBtn",
		text:"Go To"
	});

	// Create container for button hover animation
	let circleAnimation:HTMLDivElement = createElement({
		idName: "circle"
	});

	// Append circle animation to button container
	btnCont.appendChild(circleAnimation);

	return btnCont;
}

export { createServiceCard }