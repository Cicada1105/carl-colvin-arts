// Imports
import { loadIntroData, loadTabs, loadPricings, loadContactLink } from './load-methods'

const loadReedmakingPage = ():void => {
	// Load data introducing reeds to user
	loadIntroData();
	// Load tabs that hold Reed data
	loadTabs();
	// Load the reed pricings
	loadPricings();
	// Load link to contact page, using current page as reference
	loadContactLink();
}


export { loadReedmakingPage }