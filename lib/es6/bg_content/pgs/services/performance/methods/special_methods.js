/*
    This file contains methods that aid in the creation methods
    as specified by the create_methods.ts script
*/
// Imports
import { createElement } from '../../../../../global/methods';
const createArrows = (parentCont) => {
    // Create array to store both arrows to act as a double return statement for both arrows
    let arrows = [];
    const SPACING = 32.5; // rem
    const P_CENTER_POSITIONING = 7.5; // rem
    // Create left and right arrows and event listeners to rotate through "slideshow"
    // Keep track of current element/"slide"
    var currentSlide = 1;
    var slides = parentCont.querySelectorAll("p");
    let leftArrow = createElement({
        element: 'i',
        className: 'fas fa-chevron-left'
    });
    // Each slide starts at beginning so left arrows are initially hidden
    leftArrow.style.visibility = "hidden";
    leftArrow.addEventListener("click", () => {
        if (currentSlide !== 1) {
            for (let slide of slides) {
                slide.style.left = (parseFloat(slide.style.left) + SPACING) + "rem";
            }
            // Increment current slide
            currentSlide--;
        }
        leftArrow.style.visibility = currentSlide === 1 && "hidden";
        // Moving to the left from last slide displays right arrow
        // Only needed to be applied once
        rightArrow.style.visibility = currentSlide === (slides.length - 1) && "visible";
    });
    // Add left arrow to array
    arrows.push(leftArrow);
    let rightArrow = createElement({
        element: "i",
        className: "fas fa-chevron-right",
        idName: "rightArrow"
    });
    rightArrow.addEventListener("click", () => {
        if (currentSlide !== slides.length) {
            for (let slide of slides) {
                slide.style.left = (parseFloat(slide.style.left) - SPACING) + "rem";
            }
            // Increment current slide
            currentSlide++;
        }
        rightArrow.style.visibility = currentSlide === slides.length && "hidden";
        // Moving to the right from first slide displays left arrow
        // Only needed to be applied once
        leftArrow.style.visibility = currentSlide === 2 && "visible";
    });
    // Add right arrow to array
    arrows.push(rightArrow);
    return arrows;
};
export { createArrows };
