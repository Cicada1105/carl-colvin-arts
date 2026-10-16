/*
	This file is responsible for loading the performances landing page
*/

// Imports
import { loadSVG } from './methods/load_methods';
import { createElement } from '@global/methods/elements';

const loadLandingPage = ():void => {
	// Create section element
	const section:HTMLElement = document.createElement("section");

	// Create svg element
	const svg:SVGSVGElement = document.createElementNS("http://www.w3.org/2000/svg","svg");
	// Add viewbox attribute
	svg.setAttribute("viewBox","0 0 300 300");
	// Add svg namespace
	svg.setAttribute("xmlns","http://www.w3.org/2000/svg");

	// Append SVG and arrows to section
	section.appendChild(svg);

	// Load section element to DOM
	document.body.appendChild(section);
	// Only load svg children after it has been added to DOM
	loadSVG.bind(svg)();
}

export { loadLandingPage }