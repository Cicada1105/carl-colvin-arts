// Create methods for the editing page

// Imports
//	methods
import { createElement, createTextElement } from '../../../../../global/methods'
//	classes
import { Circle } from '../classes/Circle'
import { Rectangle } from '../classes/Rectangle'
//	data
import { HEADERS } from '../data'

let progressCircles:Array<Circle> = [];
let progressRectangles:Array<Rectangle> = [];
let currentProgress:number = 0;

const createProgressCont = ():HTMLDivElement => {
	let progressCont:HTMLDivElement = createElement({
		idName: "progressCont"
	});

	HEADERS.forEach((header, i) => {
		let circleCont:HTMLDivElement = createCircleCont(header);

		// First circle will always be filled in
		if (i == 0) 
			progressCircles[0].fill();
		// Remove last square container 
		if (i == (HEADERS.length - 1)) {
			let lastRectCont:HTMLDivElement = <HTMLDivElement>circleCont.lastElementChild;
			lastRectCont.remove();
			// Pop rectangle off of stack
			progressRectangles.pop();
		}

		progressCont.appendChild(circleCont);
	});

	let minusBtn:HTMLButtonElement = createTextElement({
		element: "button",
		text: "Decrement",
		idName:"decrementBtn"
	});
	let plusBtn:HTMLButtonElement = createTextElement({
		element: "button",
		text: "Increment",
		idName:"incrementBtn"
	});

	minusBtn.addEventListener("click",() => {
		if (currentProgress > 0) {
			progressCircles[currentProgress].unfill();
			currentProgress--;
			progressRectangles[currentProgress].unfill();
		}
	});
	plusBtn.addEventListener("click",() => {
		if (currentProgress < (progressCircles.length - 1)) {
			progressRectangles[currentProgress].fill();
			currentProgress++;
			progressCircles[currentProgress].fill();

		}
	});

	document.body.appendChild(minusBtn);
	document.body.appendChild(plusBtn);

	return progressCont;
}
const createCircleCont = (header:string):HTMLDivElement => {
	let circleCont:HTMLDivElement = createElement({
		className: "circleCont"
	});

	let label:HTMLSpanElement = createTextElement({
		element: "p",
		text: header,
		className: "circleHeader"
	});

	// Instantiate new circle 
	let circle:Circle = new Circle();
	// Push circle onto array stack to be dynamically accessed later
	progressCircles.push(circle);
	// Draw circle
	circle.draw();

	let rectangleProgressCont:HTMLDivElement = createRectCont();

	// Append circle, rectangle container and label to circle container
	circleCont.appendChild(label);
	circleCont.appendChild(circle.canvas);
	circleCont.appendChild(rectangleProgressCont);

	// Return circle container
	return circleCont;
}
const createRectCont = ():HTMLDivElement => {
	let rectCont:HTMLDivElement = createElement({
		className:"rectCont"
	});

	// Create container to be white backdrop of progress bar
	let whiteRectangle:HTMLDivElement = createElement({
		className:"whiteProgressRect"
	});

	// Instantiate Rectangle to be the dynamic progress 
	let redRectangle:Rectangle = new Rectangle();
	// Push redRectangle onto rectangle array stack to be dynamically updated later
	progressRectangles.push(redRectangle);

	// Append white rectangle and red rectangle canvas to container
	rectCont.appendChild(whiteRectangle);
	rectCont.appendChild(redRectangle.canvas);

	return rectCont;
}

export { createProgressCont }