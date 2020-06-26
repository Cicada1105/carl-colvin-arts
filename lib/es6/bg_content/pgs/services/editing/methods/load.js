// Load methods for the editing page
import { INTRO } from '../data';
//	methods
import { createElement, createTextElement } from '../../../../../global/methods';
import { createProgressCont } from './create';
const loadIntro = () => {
    let header = createTextElement({
        element: "h2",
        text: "Editing",
        idName: "pageHeader"
    });
    let introBody = createTextElement({
        text: INTRO,
        idName: "intro"
    });
    let hr = createElement({
        element: "hr",
        idName: "hrDivide"
    });
    // Append header, intro and hr to body
    document.body.appendChild(header);
    document.body.appendChild(introBody);
    document.body.appendChild(hr);
};
const loadPricing = () => {
    let header = createTextElement({
        element: "h2",
        text: "Pricing",
        idName: "pricingHeader"
    });
    let progressCont = createProgressCont();
    // Append header and progress container to body
    document.body.appendChild(header);
    document.body.appendChild(progressCont);
};
export { loadIntro, loadPricing };
