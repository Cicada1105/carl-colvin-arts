// These will hold a majority of the methods used to display
// 	content for the reedmaking page

// Imports
import { IPricing, ReedPricingInterface } from './interfaces'

// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage
const createReedPriceBox = (reedData:ReedPricingInterface):any => {
	let nameCont:any = document.createElement('div');
	nameCont.setAttribute('class','nameCont');

	// Create span element to add styling to only the text element
	let nameSpan:any = document.createElement('span');
	// Add attribute to customize text
	nameSpan.setAttribute('class','reedName');
	let nameNode:any = document.createTextNode(reedData.name);
	// Append name node to the span element
	nameSpan.appendChild(nameNode);

	// Container to have the blend mode to allow the text to be different color
	let nameBlendCont:any = document.createElement('span');
	nameBlendCont.setAttribute('class','nameBlend');

	// Append Description container to blend container
	let descriptionCont:any = createDescriptionCont(reedData);
	nameBlendCont.appendChild(descriptionCont);

	// Append blend and text to container
	nameCont.appendChild(nameSpan);
	nameCont.appendChild(nameBlendCont);

	// Return name container that holds the description and pricing children
	return nameCont;
}

const createDescriptionCont = ({description, pricing}:any):any => {
	let cont:any = document.createElement('div');
	cont.setAttribute('class','descriptionCont');

	// Create span element to add styling to only the text element
	let span:any = document.createElement('span');
	// Add attribute to customize text
	span.setAttribute('class','descriptionName');
	let textNode:any = document.createTextNode(description);
	// Append description node to the span element
	span.appendChild(textNode);

	// Container to have the blend mode to allow text to be different color
	let blendCont:any = document.createElement('span');
	blendCont.setAttribute('class','descriptionBlend');

	// Add pricing data container to the description blend
	let pricingCont:any = createPriceCont(pricing);
	blendCont.appendChild(pricingCont);

	// Append blend and text to container
	cont.appendChild(span);
	cont.appendChild(blendCont);

	return cont;
}

// Method takes in IPricing Object Array and returns container organized
// 	with passed data
const createPriceCont = (priceData:IPricing[]):any => {
	let cont:any = document.createElement('div');
	cont.setAttribute('class','pricingCont');

	// Create span element to add styling to only the text element
	let span:any = document.createElement('span');
	// Add attribute to customize text
	span.setAttribute('class','pricingName');

	let priceFormat:string = "";
	priceData.forEach(price => {
		priceFormat += `${price.quantity} | $${price.cost}\n`;
	});
	let priceNode:any = document.createTextNode(priceFormat);
	// Append text to the span node
	span.appendChild(priceNode);

	// Container to have the blend mode to allow text to be different color
	let blendCont:any = document.createElement('div');
	blendCont.setAttribute('class','pricingBlend');

	// Append blend and text to price container
	cont.appendChild(span);
	cont.appendChild(blendCont);

	return cont;
}

export { createReedPriceBox }