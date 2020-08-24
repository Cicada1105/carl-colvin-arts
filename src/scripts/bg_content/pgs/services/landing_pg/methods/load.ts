/*
	This file holds the methods for the Services Landing Page
*/

// Imports
//	interfaces
import { IImage, IBoxLink } from '../../../../../global/interfaces/general'
//	methods
import { createElement, createTextElement } from '../../../../../global/methods/elements'
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
	// Create container to be used as flex box
	let bodyCont:HTMLDivElement = createElement({
		idName:"flexCont"
	});

	CARD_DATA.forEach((card:IBoxLink<IImage>) => {
		bodyCont.appendChild(createServiceCard(card));
	});

	document.body.appendChild(bodyCont);
}

export { loadIntro, loadBody }