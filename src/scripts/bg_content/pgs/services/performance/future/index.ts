/*
	File for initializing future performance page
*/

// Imports
import { createTextElement, createLoadingText, createFallbackText } from '@global/methods/elements';
import { loadPerformances, loadContactLink } from './methods/load';

const loadFuturePerformances = ():void => {
	// Create header for future performancecs page
	let title:HTMLHeadingElement = createTextElement({
		element:"h1",
		text:"Future Performances",
		idName:"futurePerformancesTitle"
	});
	document.body.appendChild(title);
	// Add loading text while retrieving server data
	const loadingText:HTMLParagraphElement = createLoadingText();
	document.body.appendChild(loadingText);
	// Load future performancces
	loadPerformances().catch(() => {
		let fallbackText:HTMLDivElement = createFallbackText('No future performances at this time','Try again later')
		document.body.appendChild(fallbackText);
	}).finally(() => {
		// Remove loading text
		loadingText.remove();
		// Load link to contact page regardless of success retrieving data
		loadContactLink();
	});
}

export { loadFuturePerformances }