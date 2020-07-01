// Load methods for the editing page
// Imports
//	data
//	   static
import { HEADERS } from '../../shared/data/static';
//	   dynamic
import { progressCircles, progressRectangles, currentProgress as currProgress } from '../data/dynamic';
//	methods
//	   global
import { createElement, createTextElement } from '../../../../../../../global/methods';
//	   local
import { createCircleCont } from './create';
const loadProgressBar = () => {
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
    let currentProgress = currProgress;
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
export { loadProgressBar };
