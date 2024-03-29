// These will hold a majority of the methods used to display
// 	content for the reedmaking page

// Imports
//	interfaces
import { IPricing, ReedPricingInterface } from '../interfaces'
import { IBox } from '../../../../../global/interfaces/general'
//	methods
import { createElement, createTextElement } from '../../../../../global/methods/elements'
import { createIntroHeader } from './utilities';

const IMG_PATH:string = "../../../resources/pg_imgs/reedmaking_imgs/";

/************************************/
/*		Header Text and Content 	*/
/************************************/
const createHeaderContent = (data:IBox<string>):HTMLDivElement => {
	let cont:HTMLDivElement = document.createElement("div");

	// Create article to semantically define individual header section
	let article:HTMLElement = document.createElement("article");

	// Create title header
	let header:HTMLElement = createIntroHeader(data["header"]);
	// Create paragraph containing description
	let description:HTMLParagraphElement = createTextElement({
		text:data["content"]
	});

	// Append header and description to header article
	article.appendChild(header);
	article.appendChild(description);
	// Append article to header container
	cont.appendChild(article);

	// return container
	return cont;
}

/************************************/
/*		Reed Pricings Container 	*/
/************************************/

// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage
const createReedPriceBox = (reedData:ReedPricingInterface):HTMLDivElement => {
	let nameCont:HTMLDivElement = createElement({className:'nameCont'});

	// Create span element to add styling to only the text element
	let nameSpan:HTMLSpanElement = createTextElement({
		element:'span',
		text:reedData.name,
		className:'reedName'
	});

	// Container to have the blend mode to allow the text to be different color
	let nameBlendCont:HTMLDivElement = createElement({className:'nameBlend'});

	// Append Description container to blend container
	let descriptionCont:HTMLDivElement = createReedDescriptionCont(reedData);
	nameBlendCont.appendChild(descriptionCont);

	// Append blend and text to container
	nameCont.appendChild(nameSpan);
	nameCont.appendChild(nameBlendCont);

	// Return name container that holds the description and pricing children
	return nameCont;
}

const createReedDescriptionCont = ({description, pricing}:any):HTMLDivElement => {
	// createElement's default element is div
	let cont:HTMLDivElement = createElement({className:'descriptionCont'});

	// Create span element to add styling to only the text element
	let span:HTMLSpanElement = createTextElement({
		element:'span',
		text:description,
		className:'descriptionName'
	});

	// Container to have the blend mode to allow text to be different color
	let blendCont:HTMLDivElement = createElement({className:'descriptionBlend'});

	// Add pricing data container to the description blend
	let pricingCont:HTMLDivElement = createPriceCont(pricing);
	blendCont.appendChild(pricingCont);

	// Append blend and text to container
	cont.appendChild(span);
	cont.appendChild(blendCont);

	return cont;
}

// Method takes in IPricing Object Array and returns container organized
// 	with passed data
const createPriceCont = (priceData:IPricing[]):HTMLDivElement => {
	// createElement's default element is div
	let cont:HTMLDivElement = createElement({className:'pricingCont'});

	let priceFormat:string = "";
	priceData.forEach(price => {
		priceFormat = `${price.quantity}  |  $${price.cost}`;
		// Create span element to add styling to only the text element
		let span:HTMLSpanElement = createTextElement({
			element:'span',
			text:priceFormat,
			className:'pricingName'
		});
		cont.appendChild(span);
	});

	// Container to have the blend mode to allow text to be different color
	let blendCont:HTMLDivElement = createElement({className:'pricingBlend'});
	// Append blend to price container
	cont.appendChild(blendCont);

	return cont;
}

export { createHeaderContent, createReedPriceBox }