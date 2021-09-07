// Imports
import { loadIntroData, loadTabs, loadPricings, loadContactLink } from './methods/load'

const loadReedmakingPage = async ():Promise<void> => {
	// Load data introducing reeds to user
	loadIntroData();
	// Load tabs that hold Reed data
	loadTabs();
	// Load the reed pricings
	await loadPricings();
	// Load link to contact page, using current page as reference
	loadContactLink();
}


export { loadReedmakingPage }