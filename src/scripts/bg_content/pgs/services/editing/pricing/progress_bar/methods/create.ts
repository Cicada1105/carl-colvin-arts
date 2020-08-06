// Create methods for the editing page

// Imports
//	methods
import { createElement, createTextElement } from '../../../../../../../global/methods/elements'
//	classes
import { Circle } from '../classes/Circle'
import { Rectangle } from '../classes/Rectangle'
//	data
//	   dynamic
import { 
	progressCircles, 
	progressRectangles 
} from '../../shared/data/dynamic'

const createCircleCont = (label:string):HTMLDivElement => {
	let circleCont:HTMLDivElement = createElement({
		className: "circleCont"
	});

	let header:HTMLSpanElement = createTextElement({
		element: "p",
		text: label,
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
	circleCont.appendChild(header);
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

export { createCircleCont }