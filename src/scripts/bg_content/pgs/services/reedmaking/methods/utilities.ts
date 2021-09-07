/*
	This file holds utility functions that can standalone and
	aid in the creation of other larger components/elements
*/

// Global elements imports
import { createElement, createTextElement, } from "../../../../../global/methods/elements";

function createIntroHeader(title:string):HTMLElement {
	let headerTag:HTMLElement = document.createElement("header");

	// Create container to be used as the lines for either side of the header
	let headerLeftEnding:HTMLDivElement = createElement({
		className:"headerEnding"
	});
	// Create the text element to house the title
	let headerTitle:HTMLHeadingElement = createTextElement({
		element:"h2",
		text:title
	});
	let headerRightEnding:HTMLDivElement = createElement({
		className:"headerEnding"
	});

	// Append header endings and title to header tag
	headerTag.appendChild(headerLeftEnding);
	headerTag.appendChild(headerTitle);
	headerTag.appendChild(headerRightEnding);

	return headerTag;
}

export { createIntroHeader }