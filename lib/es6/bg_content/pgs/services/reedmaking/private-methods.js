// These will hold a majority of the methods used to display
// 	content for the reedmaking page
import { createElement, createTextElement, createImageElement } from '../../../../global/methods';
const IMG_PATH = "../../resources/pg_imgs/reedmaking_imgs/";
/************************************/
/*		Header Text and Content 	*/
/************************************/
const createHeaderContent = (data) => {
    let cont = createElement({ className: "headerCont" });
    let headerCont = createElement({ className: 'headerText' });
    let leftReed = createImageElement({
        src: `${IMG_PATH}reed.png`,
        alt: 'Reed silhouette',
        className: 'reed_silhouette',
        idName: 'leftReed'
    });
    let introHeader = createTextElement({ element: 'h3', text: data.header });
    let rightReed = createImageElement({
        src: `${IMG_PATH}reed.png`,
        alt: 'Reed silhouette',
        className: 'reed_silhouette',
        idName: 'rightReed'
    });
    headerCont.appendChild(leftReed);
    headerCont.appendChild(introHeader);
    headerCont.appendChild(rightReed);
    let bodyCont = createTextElement({ text: data.content, className: "headerBody" });
    cont.appendChild(headerCont);
    cont.appendChild(bodyCont);
    return cont;
};
/************************************/
/*		Reed Pricings Container 	*/
/************************************/
// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage
const createReedPriceBox = (reedData) => {
    let nameCont = createElement({ className: 'nameCont' });
    // Create span element to add styling to only the text element
    let nameSpan = createTextElement({
        element: 'span',
        text: reedData.name,
        className: 'reedName'
    });
    // Container to have the blend mode to allow the text to be different color
    let nameBlendCont = createElement({ className: 'nameBlend' });
    // Append Description container to blend container
    let descriptionCont = createReedDescriptionCont(reedData);
    nameBlendCont.appendChild(descriptionCont);
    // Append blend and text to container
    nameCont.appendChild(nameSpan);
    nameCont.appendChild(nameBlendCont);
    // Return name container that holds the description and pricing children
    return nameCont;
};
const createReedDescriptionCont = ({ description, pricing }) => {
    // createElement's default element is div
    let cont = createElement({ className: 'descriptionCont' });
    // Create span element to add styling to only the text element
    let span = createTextElement({
        element: 'span',
        text: description,
        className: 'descriptionName'
    });
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
    let span = createTextElement({
        element: 'span',
        text: priceFormat,
        className: 'pricingName'
    });
    // Container to have the blend mode to allow text to be different color
    let blendCont = createElement({ className: 'pricingBlend' });
    // Append blend and text to price container
    cont.appendChild(span);
    cont.appendChild(blendCont);
    return cont;
};
export { createHeaderContent, createReedPriceBox };
