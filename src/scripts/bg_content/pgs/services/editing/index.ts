// Imports
//	methods
//	   local
import { loadPricingChart } from './pricing_chart/index'
import { loadPricing } from './pricing/index'
import { loadIntro } from './intro/index'
//	   global
import { loadBootstrap, isValidEmail } from '../../../../global/methods/utilities'
import { createContactLink } from '../../../../global/methods/elements'
import { IContactLink } from '../../../../global/interfaces/general'

const loadEditingPage = async ():Promise<void> => {
	// Load intro paragraph
	loadIntro();
	// Load pricing chart info
	loadPricingChart();
	// Load pricing info
	loadPricing();
	// Load contact link 
	loadContactLink();
	//await isValidEmail("guitarlegen@gmail.com.uk") && alert("Valid Email");
}

const loadContactLink = ():void => {
	let linkData:IContactLink = {
		text: "Request More Info",
		from: "editing",
		path: ".././contact.html"
	}
	let contactLinkCont:HTMLDivElement = createContactLink(linkData);
	document.body.appendChild(contactLinkCont);
}

export { loadEditingPage }