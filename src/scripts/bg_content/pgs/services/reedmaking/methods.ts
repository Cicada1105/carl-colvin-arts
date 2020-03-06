// These will hold a majority of the methods used to display
// 	content for the reedmaking page

// Imports
import { IPricing, ReedPricingInterface } from './interfaces'

// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage
const createReedPriceBox = (reedData:ReedPricingInterface):any => {
	let nameCont:any = document.createElement('div');
	let nameNode:any = document.createTextNode(reedData.name);
	// Append name to container
	nameCont.appendChild(nameNode);
	nameCont.setAttribute('class','reedNameCont');

	let descriptionCont:any = document.createElement('div');
	let descriptionNode:any = document.createTextNode(reedData.description);
	// Append description to container
	descriptionCont.appendChild(descriptionNode);
	descriptionCont.setAttribute('class','reedDescriptionCont');

	let pricingCont:any = createPriceCont(reedData.pricing);

	// Append pricing container to description container
	descriptionCont.appendChild(pricingCont);
	// Append description container to name container
	nameCont.appendChild(descriptionCont);

	// Return name container that holds the description and pricing children
	return nameCont;
}

// Method takes in IPricing Object Array and returns container organized
// 	with passed data
const createPriceCont = (priceData:IPricing[]):any => {
	let priceCont:any = document.createElement('div');
	priceCont.setAttribute('class','reedPricingCont');

	priceData.forEach(price => {
		let priceFormat:string = `${price.quantity} | $${price.cost}`;
		let priceNode:any = document.createTextNode(priceFormat);

		priceCont.appendChild(priceNode);
	})

	return priceCont;
}

export { createReedPriceBox }