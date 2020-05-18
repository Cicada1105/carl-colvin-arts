// These will hold a majority of the methods used to display
// 	content for the reedmaking page

// Imports
import { IPricing, ReedPricingInterface } from './interfaces'
import { createElement, createTextElement, createImageElement } from '../../../../global/methods'
import { IBox } from '../../../../global/interfaces'

const IMG_PATH:string = "../../resources/pg_imgs/reedmaking_imgs/";

/************************************/
/*		Header Text and Contentd 	*/
/************************************/
const createHeaderContent = (data:IBox):any => {
	let cont:any = createElement({className:"headerCont"});

	let headerCont:any = createElement({className:'headerText'});

	let leftReed:any = createImageElement({src:`${IMG_PATH}reed.png`,alt:'Reed silhouette',className:'reed_silhouette',idName:'leftReed'});
	let introHeader:any = createTextElement({element:'h3',text:data.header});
	let rightReed:any = createImageElement({src:`${IMG_PATH}reed.png`,alt:'Reed silhouette',className:'reed_silhouette',idName:'rightReed'});

	headerCont.appendChild(leftReed);
	headerCont.appendChild(introHeader);
	headerCont.appendChild(rightReed);

	let bodyCont:any = createTextElement({text:data.content,className:"headerBody"});

	cont.appendChild(headerCont);
	cont.appendChild(bodyCont);

	return cont;
}


/************************************/
/*		Reed Pricings Container 	*/
/************************************/

// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage
const createReedPriceBox = (reedData:ReedPricingInterface):any => {
	let nameCont:any = createElement({element:'div',className:'nameCont'});

	// Create span element to add styling to only the text element
	let nameSpan:any = createTextElement({element:'span',text:reedData.name,className:'reedName'});

	// Container to have the blend mode to allow the text to be different color
	let nameBlendCont:any = createElement({element:'div',className:'nameBlend'});

	// Append Description container to blend container
	let descriptionCont:any = createReedDescriptionCont(reedData);
	nameBlendCont.appendChild(descriptionCont);

	// Append blend and text to container
	nameCont.appendChild(nameSpan);
	nameCont.appendChild(nameBlendCont);

	// Return name container that holds the description and pricing children
	return nameCont;
}

const createReedDescriptionCont = ({description, pricing}:any):any => {
	// createElement's default element is div
	let cont:any = createElement({className:'descriptionCont'});

	// Create span element to add styling to only the text element
	let span:any = createTextElement({element:'span',text:description,className:'descriptionName'});

	// Container to have the blend mode to allow text to be different color
	let blendCont:any = createElement({className:'descriptionBlend'});

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
	// createElement's default element is div
	let cont:any = createElement({className:'pricingCont'});

	let priceFormat:string = "";
	priceData.forEach(price => {
		priceFormat += `${price.quantity} | $${price.cost}\n`;
	});
	// Create span element to add styling to only the text element
	let span:any = createTextElement({element:'span',text:priceFormat,className:'pricingName'});

	// Container to have the blend mode to allow text to be different color
	let blendCont:any = createElement({className:'pricingBlend'});

	// Append blend and text to price container
	cont.appendChild(span);
	cont.appendChild(blendCont);

	return cont;
}

export { createHeaderContent, createReedPriceBox }