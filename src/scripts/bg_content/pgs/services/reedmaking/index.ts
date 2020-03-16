// Imports
import { loadIntroData, loadTabs, loadPricings } from './load-methods'

const loadReedmakingPage = ():void => {
	// Load data introducing reeds to user
	loadIntroData();
	// Load tabs that hold Reed data
	loadTabs();
	// Load the reed pricings
	//loadPricings();
}


export { loadReedmakingPage }