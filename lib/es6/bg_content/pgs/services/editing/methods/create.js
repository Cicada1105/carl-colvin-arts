// Create methods for the editing page
// Imports
//	methods
import { createElement, createTextElement } from '../../../../../global/methods';
//	classes
import { Circle } from '../classes/Circle';
import { Rectangle } from '../classes/Rectangle';
//	data
import { HEADERS } from '../data';
let progressCircles = [];
let progressRectangles = [];
let currentProgress = 0;
const createProgressCont = () => {
    let progressCont = createElement({
        idName: "progressCont"
    });
    HEADERS.forEach((header, i) => {
        let circleCont = createCircleCont(header);
        // First circle will always be filled in
        if (i == 0)
            progressCircles[0].fill();
        // Remove last square container 
        if (i == (HEADERS.length - 1)) {
            let lastRectCont = circleCont.lastElementChild;
            lastRectCont.remove();
            // Pop rectangle off of stack
            progressRectangles.pop();
        }
        progressCont.appendChild(circleCont);
    });
    let minusBtn = createTextElement({
        element: "button",
        text: "Decrement",
        idName: "decrementBtn"
    });
    let plusBtn = createTextElement({
        element: "button",
        text: "Increment",
        idName: "incrementBtn"
    });
    minusBtn.addEventListener("click", () => {
        if (currentProgress > 0) {
            progressCircles[currentProgress].unfill();
            currentProgress--;
            progressRectangles[currentProgress].unfill();
        }
    });
    plusBtn.addEventListener("click", () => {
        if (currentProgress < (progressCircles.length - 1)) {
            progressRectangles[currentProgress].fill();
            currentProgress++;
            progressCircles[currentProgress].fill();
        }
    });
    document.body.appendChild(minusBtn);
    document.body.appendChild(plusBtn);
    return progressCont;
};
const createCircleCont = (header) => {
    let circleCont = createElement({
        className: "circleCont"
    });
    let label = createTextElement({
        element: "p",
        text: header,
        className: "circleHeader"
    });
    // Instantiate new circle 
    let circle = new Circle();
    // Push circle onto array stack to be dynamically accessed later
    progressCircles.push(circle);
    // Draw circle
    circle.draw();
    let rectangleProgressCont = createRectCont();
    // Append circle, rectangle container and label to circle container
    circleCont.appendChild(label);
    circleCont.appendChild(circle.canvas);
    circleCont.appendChild(rectangleProgressCont);
    // Return circle container
    return circleCont;
};
const createRectCont = () => {
    let rectCont = createElement({
        className: "rectCont"
    });
    // Create container to be white backdrop of progress bar
    let whiteRectangle = createElement({
        className: "whiteProgressRect"
    });
    // Instantiate Rectangle to be the dynamic progress 
    let redRectangle = new Rectangle();
    // Push redRectangle onto rectangle array stack to be dynamically updated later
    progressRectangles.push(redRectangle);
    // Append white rectangle and red rectangle canvas to container
    rectCont.appendChild(whiteRectangle);
    rectCont.appendChild(redRectangle.canvas);
    return rectCont;
};
export { createProgressCont };
