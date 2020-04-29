// Special methods used by the Performance page
// Can be used by methods specified in load_methods.ts
// methods
import { createElement, createTextElement, createImageElement } from '../../../../global/methods';
// classes
import CurtainRod from './curtain_class';
// Methods will take in an object of type ImageHeaderInterface
// Returns relative container with proper designed
const createSection = (headerData) => {
    // Container to hold every element of the header
    let cont = createElement({ className: "sectionCont" });
    // Create header and body of performance section
    let headerCont = createImageHeader(headerData.header);
    let dataCont = createContent(headerData.body);
    // Append elements to parent container
    cont.appendChild(headerCont);
    cont.appendChild(dataCont);
    // Apend Container to document
    document.body.appendChild(cont);
};
const createContent = (body) => {
    // Creating an additional container will allow for easy styling
    let cont = createElement({
        className: "bodyCont",
    });
    let stageCont = createElement({
        className: "stage"
    });
    let text = createTextElement({
        text: body.content,
        className: "bodyText"
    });
    let stageFrontCont = createElement({
        className: "stageFront"
    });
    let curtainCont = createCurtain();
    // Append text to stage container
    stageCont.appendChild(text);
    // Append stage front and stage to container
    cont.appendChild(stageCont);
    cont.appendChild(stageFrontCont);
    cont.appendChild(curtainCont);
    return cont;
};
const createCurtain = () => {
    let cont = createElement({
        element: "canvas",
        className: "curtains"
    });
    let ctx = cont.getContext("2d");
    let row_widths = [2, 10, 16, 2, 5, 13, 2, 5, 13, 2, 13,
        2, 10, 16, 2, 5, 13, 2, 5, 13, 2, 13,
        2, 10, 16, 2, 5, 13, 2, 5, 13, 2, 13,
        2, 10, 16, 2, 5, 13, 2, 5];
    // keep track of current position on x-axis
    let curr_pos = 0;
    row_widths.forEach(width => {
        let rod = new CurtainRod(ctx, width, curr_pos);
        // Increment curr_pos based on width of current width
        curr_pos += width;
        rod.draw();
    });
    cont.addEventListener("mouseover", () => {
        if ((cont.style.animationPlayState !== "running") && (cont.style.animationName === "curtainClose" || cont.style.animationName === "")) {
            console.log("Opening");
            cont.style.animationName = "curtainOpen";
            cont.style.animationPlayState = "running";
        }
    });
    cont.addEventListener("mouseout", () => {
        if ((cont.style.animationPlayState !== "running") && (cont.style.animationName === "curtainOpen")) {
            console.log("Closing");
            cont.style.animationName = "curtainClose";
            cont.style.animationPlayState = "running";
        }
    });
    cont.addEventListener("animationend", () => {
        cont.style.animationPlayState = "paused";
    });
    return cont;
};
const createImageHeader = (headerData) => {
    let cont = createElement({ className: "centerHeaderCont" });
    // Musical symbol to be display on left side of header
    let leftSymbol = createImageElement({
        src: headerData.image.path,
        alt: headerData.image.alt,
        className: "musicalSymbol",
    });
    // Header text to be at the center of the container
    let header = createTextElement({
        element: "h3",
        text: headerData.data
    });
    // Musical symbol to be display on right side of header
    let rightSymbol = createImageElement({
        src: headerData.image.path,
        alt: headerData.image.alt,
        className: "musicalSymbol"
    });
    // Append Header and Symbols to center container
    cont.appendChild(leftSymbol);
    cont.appendChild(header);
    cont.appendChild(rightSymbol);
    return cont;
};
export { createSection };
