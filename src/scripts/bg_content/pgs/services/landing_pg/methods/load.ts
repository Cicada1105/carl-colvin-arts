/*
	This file holds the methods for the Services Landing Page
*/

// Imports
//	interfaces
import { IImage, IBoxLink } from '../../../../../global/interfaces/general'
//	methods
import { createTextElement } from '../../../../../global/methods/elements'
import { createServiceCard } from './create'
//	data
import { INTRO_DATA, CARD_DATA } from '../data'

const loadIntro = () => {
	let header:HTMLHeadingElement = createTextElement({
		element:"h3",
		text: "Services"
	});

	let intro:HTMLParagraphElement = createTextElement({
		text: INTRO_DATA
	});

	document.body.appendChild(header);
	document.body.appendChild(intro);
}
const loadBody = () => {
	CARD_DATA.forEach((card:IBoxLink<IImage>) => {
		document.body.appendChild(createServiceCard(card));
	});
}

export { loadIntro, loadBody }