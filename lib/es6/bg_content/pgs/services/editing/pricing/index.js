// File to initialize pricing progress bar and inputs
// Imports
//	methods
//	   global
import { createTextElement } from '../../../../../global/methods';
//	   local
import { loadProgressBar } from './progress_bar/methods/load';
import { loadInputRows } from './input_rows/methods/load';
const loadPricing = () => {
    let header = createTextElement({
        element: "h2",
        text: "Pricing",
        idName: "pricingHeader"
    });
    let progressCont = loadProgressBar();
    let inputsCont = loadInputRows();
    // Append header and progress container to body
    document.body.appendChild(header);
    document.body.appendChild(progressCont);
    document.body.appendChild(inputsCont);
};
export { loadPricing };
