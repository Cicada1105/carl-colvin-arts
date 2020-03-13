// Imports
import { tabData, pricingData } from './data';
import { createReedPriceBox } from './methods';
import { createElement, createTextElement } from '../../../../global/methods';
const loadReedmakingPage = () => {
    // Load data introducing reeds to user
    loadIntroData();
    // Load tabs that hold Reed data
    loadTabs();
    // Load the reed pricings
    //loadPricings();
};
const loadIntroData = () => {
};
const loadTabs = () => {
    tabData.forEach(tab => {
        let tabCont = createElement({ className: 'tabCont' });
        // Create container to hold header and button to activate dropdown 
        let tabHeaderCont = createElement({ className: 'tabHeaderCont' });
        // Header Content
        // Header
        let tabHeader = createTextElement({ element: 'h3', text: tab.header, className: 'tabHeader' });
        // Button -> Stylized with CSS
        let tabButton = createElement({ className: 'tabButton' });
        // Append header data to header container
        tabHeaderCont.appendChild(tabHeader);
        tabHeaderCont.appendChild(tabButton);
        // Create container to hold dropdown content
        let tabBody = createElement({ className: 'tabBody' });
        // Body Content
        //		tab.descriptions.forEach(description => {
        // createTextElement's default element is 'p'
        //			let p:any = createTextElement({text:description});
        // Append paragraph description to dropdown
        //			tabBody.appendChild(p);
        //		});
        // Append header and body container to tab container 
        tabCont.appendChild(tabHeaderCont);
        tabCont.appendChild(tabBody);
        // Append tab container to document
        document.body.appendChild(tabCont);
    });
};
const loadPricings = () => {
    // Create reed pricing container for each Reed
    pricingData.forEach(reed => {
        // Create container that will be used to help with sizing and positioning
        // createElement's default element is 'div'
        let reedCont = createElement({ className: 'priceBox' });
        let reedPricingBox = createReedPriceBox(reed);
        // Append reed pricing box to the reed container
        reedCont.appendChild(reedPricingBox);
        document.body.appendChild(reedCont);
    });
};
export { loadReedmakingPage };
