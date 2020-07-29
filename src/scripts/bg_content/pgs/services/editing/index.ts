// Imports
//	methods
//	   local
import { loadPricingChart } from './pricing_chart/index'
import { loadPricing } from './pricing/index'
import { loadIntro } from './intro/index'
//	   global
import { loadBootstrap } from '../../../../global/methods'

const loadEditingPage = ():void => {
	// Load boostrap to be used by methods later on
	loadBootstrap();
	// Load intro paragraph
	loadIntro();
	// Load pricing chart info
	loadPricingChart();
	// Load pricing info
	loadPricing();
}

export { loadEditingPage }