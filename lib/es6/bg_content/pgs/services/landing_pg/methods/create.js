/*
    This file contains the "private" methods in loading the services landing page
*/
//	methods
import { createElement, createTextElement, createImageElement } from '../../../../../global/methods/elements';
const createServiceCard = (cardData) => {
    const cardCont = createElement({
        className: "serviceCard"
    });
    // Create Header
    let header = createTextElement({
        element: "h2",
        text: cardData.header
    });
    // Create SVG for border
    let svgBorder = createSVGBorder();
    // Create image
    let serviceImage = createImageFigure(cardData.content);
    // Create button
    let serviceLinkButton = createButton(cardData.link);
    // Append contents to service card
    cardCont.appendChild(header);
    cardCont.appendChild(svgBorder);
    cardCont.appendChild(serviceImage);
    cardCont.appendChild(serviceLinkButton);
    return cardCont;
};
const createSVGBorder = () => {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // Create polyline to define the border positions and style
    let polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    // Add points to polyline 
    polyline.setAttribute("points", "0,0 300,0 300,400 0,400 0,0");
    // Append polyline to svg
    svg.appendChild(polyline);
    return svg;
};
const createImageFigure = (imgData) => {
    let imgFigure = createElement({
        element: "figure",
        className: "imgFigure"
    });
    // Create image element
    let img = createImageElement({
        src: imgData.path,
        alt: imgData.alt
    });
    // Create caption element to go along with image
    let imgCaption = createTextElement({
        element: "figcaption",
        text: imgData.caption
    });
    // Append image and image caption to figure
    imgFigure.appendChild(img);
    imgFigure.appendChild(imgCaption);
    return imgFigure;
};
const createButton = (link) => {
    let btnCont = createTextElement({
        element: "div",
        className: "serviceBtn",
        text: "Go To"
    });
    btnCont.addEventListener("click", () => {
        window.open(link, "_self");
    });
    // Create container for button hover animation
    let circleAnimation = createElement({
        idName: "circle"
    });
    // Append circle animation to button container
    btnCont.appendChild(circleAnimation);
    return btnCont;
};
export { createServiceCard };
