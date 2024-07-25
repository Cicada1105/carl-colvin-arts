// Imports
//	Local
//		methods
import { loadPricingChart } from './pricing_chart/index'
import { loadPricing } from './pricing/index'
import { loadIntro } from './intro/index'
import { litEditingServerData } from './data'
import { IServerData } from './interfaces'
//	Global
import { isValidEmail, loadingScreen } from '../../../../global/methods/utilities'
import { createContactLink } from '../../../../global/methods/elements'
import { IContactLink } from '../../../../global/interfaces/general'
import requestData from '../request';

const loadEditingPage = ():void => {
	// Load intro paragraph
	loadIntro();
	// Adding loading screen while retrieving server data
	let loadingText:HTMLElement = loadingScreen();
	document.body.appendChild(loadingText);
	// Retrieve editing server data to be shared across secctions
	requestData<IServerData[]>("editing").then((serverData:IServerData[]) => {
		// Remove laodint text
		loadingText.remove();

		serverData.forEach((data:IServerData) => litEditingServerData.push(data));
		// Load pricing chart info
		loadPricingChart();
		// Load pricing info
		loadPricing();
		// Load contact link 
		loadContactLink();
		//await isValidEmail("guitarlegen@gmail.com.uk") && alert("Valid Email");
	})
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