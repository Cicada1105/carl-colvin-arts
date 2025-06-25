// Imports
//	Global
import { createLoadingText, createFallbackText } from '@global/methods/elements';
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
	loadPricings().catch(e => {
		const fallbackText:HTMLDivElement = createFallbackText('Pricing unavailable at this time','Try again later');
		document.body.appendChild(fallbackText);
	}).finally(() => {
		loadText.remove()
		// Load link to contact page, using current page as reference
		loadContactLink();
	});
}


export { loadReedmakingPage }