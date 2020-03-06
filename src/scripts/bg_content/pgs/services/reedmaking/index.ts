// Imports
import { data } from './data' 
import { createReedPriceBox } from './methods'

const loadReedmakingPage = ():void => {
	// Create reed pricing container for each Reed
	data.forEach(reed => {
		// Create container that will be used to help with sizing and positioning
		let reedCont:any = document.createElement('div');
		// Class to add styling to each price box
		reedCont.setAttribute('class','priceBox');

		let reedPricingBox:any = createReedPriceBox(reed);

		// Append reed pricing box to the reed container
		reedCont.appendChild(reedPricingBox);

		document.body.appendChild(reedCont);
	});
}

export { loadReedmakingPage }