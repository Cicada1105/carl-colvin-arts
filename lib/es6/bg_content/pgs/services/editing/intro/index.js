// Intro data to be displayed before pricing
// Imports
//	data
import { INTRO } from './data';
//	methods
import { createElement, createTextElement } from '../../../../../global/methods/elements';
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
export { loadIntro };
