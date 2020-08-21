/*
    This file holds the methods for the Services Landing Page
*/
// Imports
//	methods
import { createTextElement } from '../../../../global/methods/elements';
const INTRO_DATA = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus " +
    "ut enim ligula. Vivamus purus risus, dictum sed congue eget, efficitur " +
    "non nunc. Suspendisse interdum aliquam lorem sed finibus. Maecenas congue " +
    "in elit vel condimentum. Nulla vulputate fringilla aliquet. Sed ut pulvinar " +
    "mi, at luctus metus. Sed sodales erat vitae nulla consequat, non interdum " +
    "lorem pharetra. In at convallis nisl, ut imperdiet ipsum. ";
const loadIntro = () => {
    let header = createTextElement({
        element: "h2",
        text: "Services"
    });
    let intro = createTextElement({
        text: INTRO_DATA
    });
    document.body.appendChild(header);
    document.body.appendChild(intro);
};
const loadBody = () => {
    console.log("Loading Body");
};
export { loadIntro, loadBody };
