/*
    This file contains functions for elements specific to past performance page
*/
// Imports
import { createElement, createTextElement, createImageElement } from '../../../../../../global/methods/elements';
const createPageSection = (title) => {
    // Create card container
    const cont = createElement({
        className: "pageCardCont"
    });
    // Create title of card
    let cardTitle = createTextElement({
        element: "h2",
        text: title,
        className: "pageCardTitle"
    });
    // Append card title to container
    cont.appendChild(cardTitle);
    return cont;
};
const createGenericCard = (data) => {
    // Create heading group for generic group 
    let cardHeadingGroup = createHeaderGroup(data["headers"]);
    // Create image element for generic card 
    let cardImg = createImageElement({
        src: data.img["src"],
        alt: data.img["alt"]
    });
    // Append heading group and image to parent container 
    data["parent"].appendChild(cardImg);
    data["parent"].appendChild(cardHeadingGroup);
};
const createCardOutline = (data) => {
    // Create svg for containing svg elements 
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // Create polyline for outline 
    let polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    // Add points attribute 
    polyline.setAttribute("points", data["points"]);
    // Add stroke-dasharray attribute 
    polyline.setAttribute("stroke-dasharray", "0");
    // Append polyline and foreign object to svg 
    svg.appendChild(polyline);
    svg.appendChild(data["foreignObject"]);
    return svg;
};
const createHeaderGroup = (headers) => {
    // Create group heading to hold all headers 
    let headingGroup = document.createElement("hgroup");
    // Loop through headers, creating specific header and appending it to header group 
    headers.forEach((header) => {
        let h = createTextElement({
            element: header["tagname"],
            text: header["text"]
        });
        headingGroup.appendChild(h);
    });
    return headingGroup;
};
export { createPageSection, createGenericCard, createCardOutline, createHeaderGroup };
