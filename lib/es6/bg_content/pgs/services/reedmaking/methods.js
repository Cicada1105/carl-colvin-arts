// These will hold a majority of the methods used to display
// 	content for the reedmaking page
// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage
const createReedPriceBox = (reedData) => {
    let nameCont = document.createElement('div');
    let nameNode = document.createTextNode(reedData.name);
    // Append name to container
    nameCont.appendChild(nameNode);
    nameCont.setAttribute('class', 'reedNameCont');
    let descriptionCont = document.createElement('div');
    let descriptionNode = document.createTextNode(reedData.description);
    // Append description to container
    descriptionCont.appendChild(descriptionNode);
    descriptionCont.setAttribute('class', 'reedDescriptionCont');
    let pricingCont = createPriceCont(reedData.pricing);
    // Append pricing container to description container
    descriptionCont.appendChild(pricingCont);
    // Append description container to name container
    nameCont.appendChild(descriptionCont);
    // Return name container that holds the description and pricing children
    return nameCont;
};
// Method takes in IPricing Object Array and returns container organized
// 	with passed data
const createPriceCont = (priceData) => {
    let priceCont = document.createElement('div');
    priceCont.setAttribute('class', 'reedPricingCont');
    priceData.forEach(price => {
        let priceFormat = `${price.quantity} | $${price.cost}`;
        let priceNode = document.createTextNode(priceFormat);
        priceCont.appendChild(priceNode);
    });
    return priceCont;
};
export { createReedPriceBox };
