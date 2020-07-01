// Load methods for the editing page

// Imports
//	data
//	   static
import { HEADERS } from '../../shared/data/static'
//	   dynamic
import { 
	progressCircles, 
	progressRectangles, 
	currentProgress as currProgress 
} from '../data/dynamic'
//	methods
//	   global
import { createElement, createTextElement } from '../../../../../../../global/methods'
//	   local
import { createCircleCont } from './create'

const loadProgressBar = ():HTMLDivElement => {
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
	let currentProgress:number = currProgress;
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

export { loadProgressBar }