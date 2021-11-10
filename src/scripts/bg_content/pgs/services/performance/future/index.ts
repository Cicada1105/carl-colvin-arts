/*
	File for initializing future performance page
*/

// Imports
import { createTextElement } from '../../../../../global/methods/elements';
import { loadBootstrap, loadingScreen } from '../../../../../global/methods/utilities';
import { loadPerformances/*, loadContactLink*/ } from './methods/load';

const loadFuturePerformances = ():void => {
	// Create header for future performancecs page
	let title:HTMLHeadingElement = createTextElement({
		element:"h1",
		text:"Future Performances",
		idName:"futurePerformancesTitle"
	});
	document.body.appendChild(title);
	// Load bootstrap to be used for contact link 
	loadBootstrap();
	// Add loading text while retrieving server data
	const loadingText:HTMLElement = loadingScreen();
	document.body.appendChild(loadingText);
	// Load future performancces
	loadPerformances().then(() => {
		// Remove loading text
		loadingText.remove();

		// Load link to contact page
		//loadContactLink();
	});
}

export { loadFuturePerformances }