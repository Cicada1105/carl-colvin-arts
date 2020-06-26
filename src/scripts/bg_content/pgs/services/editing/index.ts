// Imports
//	methods
import { loadIntro, loadPricing } from './methods/load'

const loadEditingPage = ():void => {
	loadIntro();
	loadPricing();
}

export { loadEditingPage }