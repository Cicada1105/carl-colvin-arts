// Imports
import { data } from './data' 
import { createReedPriceBox } from './methods'
import { createElement } from '../../../../global/methods'

const loadReedmakingPage = ():void => {
	// Load reed images and descriptions
	loadReedImages();
	// Load the reed pricings
	loadPricings();
}

const loadReedImages = ():void => {
	console.log("loading images");
}
const loadPricings = ():void => {
	// Create reed pricing container for each Reed
	data.forEach(reed => {
		// Create container that will be used to help with sizing and positioning
		// createElement's default element is 'div'
		let reedCont:any = createElement({className:'priceBox'});

		let reedPricingBox:any = createReedPriceBox(reed);

		// Append reed pricing box to the reed container
		reedCont.appendChild(reedPricingBox);

		document.body.appendChild(reedCont);
	});
}
export { loadReedmakingPage }