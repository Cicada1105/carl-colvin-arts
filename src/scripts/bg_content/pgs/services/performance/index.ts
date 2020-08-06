// Imports
import { loadPerformanceIntro, loadPreviousPerformances, loadRates } from './methods/load_methods'
import { activateCurtains } from './methods/misc_methods'
import { loadBootstrap } from '../../../../global/methods/utilities'

const loadPerformancePage = ():void => {
	// Load bootstrap to allow Font Awesome to be used
	loadBootstrap();
	// Load intro to the Performance page
	loadPerformanceIntro();
	// Load section to display/discuss previous performances
	loadPreviousPerformances();
	// Load rates for user to view 
	loadRates();
	// Activate the curtains
	activateCurtains();
}

export { loadPerformancePage }