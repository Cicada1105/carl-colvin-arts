// Load methods for the editing page
// Imports
//	data
//	   static
import { HEADERS } from '../../shared/data/static';
//	   dynamic
import { progressCircles, progressRectangles } from '../../shared/data/dynamic';
//	methods
//	   global
import { createElement } from '../../../../../../../global/methods';
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
    return progressCont;
};
export { loadProgressBar };
