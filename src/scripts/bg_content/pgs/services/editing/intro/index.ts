// Intro data to be displayed before pricing

// Imports
//	data
import { INTRO_DATA } from './data'
//	methods
import { createElement, createTextElement } from '@global/methods/elements';
		
const loadIntro = ():void => {
	let header:HTMLHeadingElement = createTextElement({
		element: "h1",
		text: "Editing",
		idName: "pageHeader"
	});
	// Append header to body
	document.body.appendChild(header);

	// Loop through intro data, appending it to the body
	INTRO_DATA.forEach((section:string) => document.body.appendChild(createTextElement({ text: section, className: "editingIntro" })));

	// Append hr to body
	let hr:HTMLHRElement = createElement({
		element: "hr",
		idName: "hrDivide"
	});
	document.body.appendChild(hr);
}

export { loadIntro }