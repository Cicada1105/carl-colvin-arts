/*
	File for initializing future performance page
*/

// Imports
import { createTextElement } from '../../../../../global/methods/elements';
import { loadBootstrap } from '../../../../../global/methods/utilities';
import { loadPerformances, loadContactLink } from './methods/load';

const loadFuturePerformances = async () => {
	// Create header for future performancecs page
	let title:HTMLHeadingElement = createTextElement({
		element:"h1",
		text:"Future Performances",
		idName:"futurePerformancesTitle"
	});
	document.body.appendChild(title);
	// Load bootstrap to be used for contact link 
	loadBootstrap();
	// Load future performancces
	await loadPerformances();
	// Load link to contact page
	loadContactLink();
}

export { loadFuturePerformances }