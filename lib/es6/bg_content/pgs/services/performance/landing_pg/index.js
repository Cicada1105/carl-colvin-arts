/*
    This file is responsible for loading the performances landing page
*/
// Imports
import { loadSVG } from './methods/load_methods';
import { createElement } from '../../../../../global/methods/elements';
const loadLandingPage = () => {
    // Create section element
    const section = document.createElement("section");
    // Create svg element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // Add viewbox attribute
    svg.setAttribute("viewBox", "0 0 300 300");
    // Add svg namespace
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    // Create 3 arrows
    let arrow1 = createElement({
        element: "i",
        className: "arrow fas fa-chevron-up"
    });
    let arrow2 = createElement({
        element: "i",
        className: "arrow fas fa-chevron-up"
    });
    let arrow3 = createElement({
        element: "i",
        className: "arrow fas fa-chevron-up"
    });
    // Append SVG and arrows to section
    section.appendChild(svg);
    section.appendChild(arrow1);
    section.appendChild(arrow2);
    section.appendChild(arrow3);
    // Load section element to DOM
    document.body.appendChild(section);
    // Only load svg children after it has been added to DOM
    loadSVG.bind(svg)();
};
export { loadLandingPage };
