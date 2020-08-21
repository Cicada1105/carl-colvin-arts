/*
    This file holds the methods for the Services Landing Page
*/
//	methods
import { createTextElement } from '../../../../../global/methods/elements';
import { createServiceCard } from './create';
//	data
import { INTRO_DATA, CARD_DATA } from '../data';
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
    CARD_DATA.forEach((card) => {
        document.body.appendChild(createServiceCard(card));
    });
};
export { loadIntro, loadBody };
