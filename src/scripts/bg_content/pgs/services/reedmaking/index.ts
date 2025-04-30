// Imports
//	Global
import { createLoadingText } from '@global/methods/elements';
//	Local
import { loadIntroData, loadTabs, loadPricings, loadContactLink } from './methods/load'

const loadReedmakingPage = ():void => {
	// Load data introducing reeds to user
	loadIntroData();
	// Load tabs that hold Reed data
	loadTabs();
	// Add loading screen until pricings are done laoding;
	const loadText:HTMLParagraphElement = createLoadingText();
	document.body.appendChild(loadText);
	// Load the reed pricings
	loadPricings().then(() => {
		loadText.remove()
		// Load link to contact page, using current page as reference
		loadContactLink();
	});
}


export { loadReedmakingPage }