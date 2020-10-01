// Imports
//	methods
//	   local
import { loadPricingChart } from './pricing_chart/index'
import { loadPricing } from './pricing/index'
import { loadIntro } from './intro/index'
//	   global
import { loadBootstrap, isValidEmail } from '../../../../global/methods/utilities'

const loadEditingPage = async ():Promise<void> => {
	// Load intro paragraph
	loadIntro();
	// Load pricing chart info
	loadPricingChart();
	// Load pricing info
	loadPricing();

	//await isValidEmail("guitarlegen@gmail.com.uk") && alert("Valid Email");
}

export { loadEditingPage }