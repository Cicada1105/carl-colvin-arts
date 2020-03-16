// These will hold a majority of the methods used to display
// 	content for the reedmaking page
import { createElement, createTextElement } from '../../../../global/methods';
// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage
const createReedPriceBox = (reedData) => {
    let nameCont = createElement({ element: 'div', className: 'nameCont' });
    // Create span element to add styling to only the text element
    let nameSpan = createTextElement({ element: 'span', text: reedData.name, className: 'reedName' });
    // Container to have the blend mode to allow the text to be different color
    let nameBlendCont = createElement({ element: 'div', className: 'nameBlend' });
    // Append Description container to blend container
    let descriptionCont = createDescriptionCont(reedData);
    nameBlendCont.appendChild(descriptionCont);
    // Append blend and text to container
    nameCont.appendChild(nameSpan);
    nameCont.appendChild(nameBlendCont);
    // Return name container that holds the description and pricing children
    return nameCont;
};
const createDescriptionCont = ({ description, pricing }) => {
    // createElement's default element is div
    let cont = createElement({ className: 'descriptionCont' });
    // Create span element to add styling to only the text element
    let span = createTextElement({ element: 'span', text: description, className: 'descriptionName' });
    // Container to have the blend mode to allow text to be different color
    let blendCont = createElement({ className: 'descriptionBlend' });
    // Add pricing data container to the description blend
    let pricingCont = createPriceCont(pricing);
    blendCont.appendChild(pricingCont);
    // Append blend and text to container
    cont.appendChild(span);
    cont.appendChild(blendCont);
    return cont;
};
// Method takes in IPricing Object Array and returns container organized
// 	with passed data
const createPriceCont = (priceData) => {
    // createElement's default element is div
    let cont = createElement({ className: 'pricingCont' });
    let priceFormat = "";
    priceData.forEach(price => {
        priceFormat += `${price.quantity} | $${price.cost}\n`;
    });
    // Create span element to add styling to only the text element
    let span = createTextElement({ element: 'span', text: priceFormat, className: 'pricingName' });
    // Container to have the blend mode to allow text to be different color
    let blendCont = createElement({ className: 'pricingBlend' });
    // Append blend and text to price container
    cont.appendChild(span);
    cont.appendChild(blendCont);
    return cont;
};
export { createReedPriceBox };
