// Load methods for the editing page

// Imports
//	data
//	   static
import { HEADERS } from '../../shared/data/static'
//	   dynamic
import { 
	progressCircles, 
	progressRectangles 
} from '../../shared/data/dynamic'
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

	return progressCont;
}

export { loadProgressBar }