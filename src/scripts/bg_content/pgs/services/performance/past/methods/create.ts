/*
	This file is for hosting methods for creating 
	inidividual cards/collaborators/anecdotes
*/

// Imports
import { createElement, createTextElement } from '../../../../../../global/methods/elements';
import { createGenericCard, createCardOutline } from './generic';
import { IRepertoire, ICollaborator, IAnecdote, CardOutlineInterface as ICard } from '../interfaces';

const createPerformanceCard:(pastPerformanceData:IRepertoire)=>HTMLElement = (data:IRepertoire):HTMLElement => {
	let cardCont:HTMLElement = createElement({
		element:"section",
		className:"pastPerformanceCard"
	});

	// Append generic data to parent container
	createGenericCard({
		parent:cardCont,
		img: {
			src: data.img["src"],
			alt: data.img["alt"]
		},
		headers:[
			{
				tagname:"h2",
				text:data.name	
			},
			{
				tagname:"h4",
				text:`  -  ${data.location}`
			}
		]
	})

	// For past performances card, swap image and header group
	cardCont.children[0].insertAdjacentElement("beforebegin",cardCont.children[1]);

	// Create paragraphs for date and instruments
	let date:HTMLParagraphElement = createTextElement({
		text:data.date,
		className:"date"
	});

	let instrumentsStr:string = "";
	data.instruments.forEach((instrument:string,i:number) => {
		instrumentsStr += (i === 0 ? instrument : `, ${instrument}`);
	});
	let instrumentsEl:HTMLParagraphElement = createTextElement({
		text:instrumentsStr,
		className:"instruments"
	});

	// Create article section for past performance description
	let description:HTMLElement = createTextElement({
		element:"article",
		text:data.description
	});

	// Append non generic html elements, specific to performance card, to card container
	cardCont.appendChild(date);
	cardCont.appendChild(instrumentsEl);
	cardCont.appendChild(description);

	return cardCont;
}
const createCollaboratorCard:(collaboratorCardData:ICollaborator)=>HTMLElement = (data:ICollaborator):HTMLElement => {
	// Create cotainer for holding collaborator data=
	let collaboratorCard:HTMLElement = createElement({
		element:"section",
		className:"collaboratorCard"
	});

	// Create foreign object to hold html elements inside svg 
	let foreignObj:SVGForeignObjectElement = <SVGForeignObjectElement>document.createElementNS("http://www.w3.org/2000/svg","foreignObject");

	// Append generic data to parent container
	createGenericCard({
		parent: foreignObj,
		img: {
			src: data.img["src"],
			alt: data.img["alt"]
		},
		headers: [
			{
				tagname:"h2",
				text:data["name"]
			},
			{
				tagname:"h3",
				text:data["title"]
			}
		]
	});

	// Create collaborator outline, passing in html elements 
	let svgOutlineData:ICard = {
		foreignObject:foreignObj,
		points:"230,64 318.5,64 318.5,238.5 1.5,238.5 1.5,64 90,65",
		viewBox:"0 0 320 240"
	}
	let svgOutline:SVGSVGElement = createCardOutline(svgOutlineData);

	// Append collaborator outline, with html elements (added to svg with createCardOutline), to collaborator card
	collaboratorCard.appendChild(svgOutline);

	return collaboratorCard;
}
const createAnecdoteCard:(anecdoteCardData:IAnecdote)=>HTMLElement = (data:IAnecdote):HTMLElement => {
	// Create container for holding user anecdote data 
	let userCard:HTMLElement = createElement({
		element:"section",
		className:"userCard"
	});

	// Create outline for user card
	let userCardOutline:HTMLDivElement = createElement({
		className:"userCardOutline"
	})
	// Create image back drop to simulate space between image and outline
	let userCardImgBackdrop:HTMLSpanElement = createElement({
		element:"span",
		className:"imageBackDrop"
	});

	// Append user card outine and user card image backdrop to user card
	userCard.appendChild(userCardOutline);
	userCard.appendChild(userCardImgBackdrop);

	// Append generic data to parent container
	createGenericCard({
		parent: userCard,
		img: {
			src: data.img["src"],
			alt: data.img["alt"]
		},
		headers: [
			{
				tagname:"h3",
				text: data["name"]
			},
			{
				tagname:"h4",
				text: data["title"]
			}
		]
	});
	
	// Create article for holding user's anecdote 
	let anecdoteMsg:HTMLElement = createTextElement({
		element:"article",
		text:data["anecdote"]
	});

	// Append non generic html elements, specific to anecdote card, to foreign object 
	userCard.appendChild(anecdoteMsg);

	return userCard;
}

export { createPerformanceCard, createCollaboratorCard, createAnecdoteCard }