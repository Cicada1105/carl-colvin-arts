// Load methods for the editing page

// Imports
//	data
import { editingRatesSelection as ratesData } from '../data'
import { INTRO } from '../data'
//	methods
import { createElement, createTextElement } from '../../../../../global/methods';
import { createProgressCont } from './create'

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

const loadPricing = ():void => {
	let header:HTMLHeadingElement = createTextElement({
		element: "h2",
		text: "Pricing",
		idName: "pricingHeader"
	});

	let progressCont:HTMLDivElement = createProgressCont();

	// Append header and progress container to body
	document.body.appendChild(header);
	document.body.appendChild(progressCont);
}

export { loadIntro, loadPricing }