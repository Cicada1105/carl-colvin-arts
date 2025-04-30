/*
	This file holds utility functions that can standalone and
	aid in the creation of other larger components/elements
*/

// Global elements imports
import { createElement, createTextElement, } from "@global/methods/elements";

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

const createReedTabButton = ():HTMLDivElement => {
	const cont:HTMLDivElement = createElement({className:"tabButton"});

	// Create vertical and horizontal bar of the plus sign
	const vertBar:HTMLDivElement = createElement({className:"vertBar"});
	const horBar:HTMLDivElement = createElement({className:"horBar"})

	let isOpen = false;
	// Add click listener to container to animate the plus/minus button
	cont.addEventListener("click",() => {
		if (isOpen) {
			console.log("Minus to plus");
			// Revert rotation back to normal
			vertBar.style.transform = "translateX(-50%) rotateZ(0deg)";
			horBar.style.transform = "translateY(-50%) rotateZ(0deg)";
		}
		else {
			console.log("Plus to minus");
			// Rotate the vertical bar 450deg
			vertBar.style.transform = "translateX(-50%) rotateZ(450deg)";
			// Rotate the horizontal bar 180deg	
			horBar.style.transform = "translateY(-50%) rotateZ(180deg)";
		}
		isOpen = !isOpen;
	});

	// Append vertical and horizontal bar to container
	cont.appendChild(vertBar);
	cont.appendChild(horBar);

	return cont;
}

export { createIntroHeader, createReedTabButton }