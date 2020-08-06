// Intro data to be displayed before pricing

// Imports
//	data
import { INTRO } from './data'
//	methods
import { createElement, createTextElement } from '../../../../../global/methods/elements';

					
const loadIntro = ():void => {
	let header:HTMLHeadingElement = createTextElement({
		element: "h2",
		text: "Editing",
		idName: "pageHeader"
	});

	let introBody:HTMLParagraphElement = createTextElement({
		text: INTRO,
		idName: "intro"
	});

	let hr:HTMLHRElement = createElement({
		element: "hr",
		idName: "hrDivide"
	});

	// Append header, intro and hr to body
	document.body.appendChild(header);
	document.body.appendChild(introBody);
	document.body.appendChild(hr);
}

export { loadIntro }