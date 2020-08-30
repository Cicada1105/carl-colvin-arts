// This file is meant to abstract from the index.ts file
// File dependencies will be handled here
// Imports
import { REEDMAKING_DESCR, ABOUT_DESCR, tabData, pricingData } from './data';
import { createReedPriceBox } from './private-methods';
import { createElement, createTextElement, createImageElement } from '../../../../global/methods/elements';
const loadIntroData = () => {
    let cvs = createElement({
        element: "canvas",
        idName: "introCvs"
    });
    const CVS_WIDTH = window.innerWidth * 0.8;
    const CVS_HEIGHT = window.innerHeight * 0.65;
    cvs.setAttribute("width", CVS_WIDTH.toString());
    cvs.setAttribute("height", CVS_HEIGHT.toString());
    let ctx = cvs.getContext("2d");
    ctx.strokeStyle = "#003249";
    ctx.lineWidth = 2;
    ctx.fillStyle = "#f0edee";
    ctx.font = "2.15rem Oswald";
    // Line before reedmaking
    ctx.beginPath();
    ctx.moveTo(0, CVS_HEIGHT * 0.1);
    ctx.lineTo(CVS_WIDTH * 0.1, CVS_HEIGHT * 0.1);
    ctx.fillText("Reedmaking", CVS_WIDTH * 0.125, CVS_HEIGHT * 0.125);
    // '-v-' in between reedmaking and about
    ctx.moveTo(CVS_WIDTH * 0.3, CVS_HEIGHT * 0.1);
    ctx.lineTo(CVS_WIDTH * 0.4, CVS_HEIGHT * 0.1);
    ctx.lineTo(CVS_WIDTH * 0.5, CVS_HEIGHT * 0.3);
    ctx.lineTo(CVS_WIDTH * 0.6, CVS_HEIGHT * 0.1);
    ctx.lineTo(CVS_WIDTH * 0.7, CVS_HEIGHT * 0.1);
    ctx.fillText("About", CVS_WIDTH * 0.7625, CVS_HEIGHT * 0.125);
    // Line after about
    ctx.moveTo(CVS_WIDTH * 0.9, CVS_HEIGHT * 0.1);
    ctx.lineTo(CVS_WIDTH * 1, CVS_HEIGHT * 0.1);
    // Draw line 
    ctx.stroke();
    // Draw rectangle for "housing" Reedmaking and About text
    /*
        Positioning determined by:
        -width: start @ half of XPos of line before header -> half of XPos after header
        -height: start @ third of YPos of the "V" -> slightly shorter than height of canvas
    */
    ctx.strokeRect(CVS_WIDTH * 0.05, CVS_HEIGHT * 0.2, CVS_WIDTH * 0.3, CVS_HEIGHT * 0.79); // Reedmaking text container
    ctx.strokeRect(CVS_WIDTH * 0.65, CVS_HEIGHT * 0.2, CVS_WIDTH * 0.3, CVS_HEIGHT * 0.79); // About text container
    ctx.strokeRect(CVS_WIDTH * 0.4, CVS_HEIGHT * 0.3, CVS_WIDTH * 0.2, CVS_HEIGHT * 0.6); // Reedmaking image container
    ctx.font = "1.1rem Oswald";
    const REED_X_TEXT_POS = CVS_WIDTH * 0.07;
    const ABOUT_X_TEXT_POS = CVS_WIDTH * 0.67;
    const Y_TEXT_POS = CVS_HEIGHT * 0.265;
    const TEXT_ROW_LENGTH = CVS_WIDTH * 0.29;
    const LINE_HEIGHT = 22;
    let reedmakingDescrRows = REEDMAKING_DESCR.split("\n");
    let aboutDescrRows = ABOUT_DESCR.split("\n");
    // Loop through reedmaking rows and display them accordingly in the canvas
    reedmakingDescrRows.forEach((row, i) => {
        ctx.fillText(row, REED_X_TEXT_POS, Y_TEXT_POS + (i * LINE_HEIGHT), TEXT_ROW_LENGTH);
    });
    // Loop through about rows and display them accordingly in the canvas
    aboutDescrRows.forEach((row, i) => {
        ctx.fillText(row, ABOUT_X_TEXT_POS, Y_TEXT_POS + (i * LINE_HEIGHT), TEXT_ROW_LENGTH);
    });
    // Reed Image
    let reedImg = createImageElement({
        src: "../../resources/pg_imgs/reedmaking_imgs/finished_reed.jpg",
        alt: "Finished Reed",
        idName: "finished_reed"
    });
    reedImg.onload = () => {
        ctx.drawImage(reedImg, CVS_WIDTH * 0.402, CVS_HEIGHT * 0.302, CVS_WIDTH * 0.196, CVS_HEIGHT * 0.596);
    };
    document.body.appendChild(cvs);
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
        tab.descriptions.forEach(description => {
            // createTextElement's default element is 'p'
            let p = createTextElement({ text: description });
            // Append paragraph description and break to dropdown
            tabBody.appendChild(p);
        });
        /*  Event Listeners  */
        tabButton.addEventListener('click', function () {
            // Tab Button animation
            tabButton.style.animationPlayState = "running";
            tabButton.style.animationName = tabButton.style.animationName === "plusMinus" ? "minusPlus" : "plusMinus";
            // Tab Body animation
            tabBody.style.animationPlayState = "running";
            tabBody.style.animationName = tabBody.style.animationName === "dropdownOpen" ? "dropdownClose" : "dropdownOpen";
            // Paragraph animation
            tabBody.childNodes.forEach(function (p) {
                p.style.animationPlayState = "running";
                p.style.animationName = p.style.animationName === "dropdownPOpen" ? "dropdownPClose" : "dropdownPOpen";
            });
        });
        // Append header and body container to tab container 
        tabCont.appendChild(tabHeaderCont);
        tabCont.appendChild(tabBody);
        // Append tab container to document
        document.body.appendChild(tabCont);
    });
};
const loadPricings = () => {
    let pricingHeader = createTextElement({ element: "h2", text: "Pricings" });
    document.body.appendChild(pricingHeader);
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
export { loadIntroData, loadTabs, loadPricings };
