/*
	This file is for hosting methods for creating 
	inidividual cards/collaborators/anecdotes
*/

// Imports
import { createElement, createTextElement } from '../../../../../../global/methods/elements';
import { createGenericCard } from './generic';
import { IRepertoire, ICollaborator, IAnecdote } from '../interfaces';

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
				text:data['name']	
			},
			{
				tagname:"h3",
				text:data['location']
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

	// Append generic data to parent container
	createGenericCard({
		parent: collaboratorCard,
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

	// Create image back drop to simulate space between image and outline
	let collaboratorCardImgBackdrop:HTMLSpanElement = createElement({
		className:"imageBackDrop"
	});
	// Prepend card image backdrop to card
	collaboratorCard.prepend(collaboratorCardImgBackdrop);

	// Create article for collaborator's description
	let collaboratorDesc: HTMLElement = createTextElement({
		element: "article",
		text: data['description']
	});
	// Append article description to collaborator card
	collaboratorCard.appendChild(collaboratorDesc);

	return collaboratorCard;
}
const createAnecdoteCard:(anecdoteCardData:IAnecdote)=>HTMLElement = (data:IAnecdote):HTMLElement => {
	// Create container for holding user anecdote data 
	let userCard:HTMLElement = createElement({
		element:"section",
		className:"userCard"
	});

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
	
	// Create image back drop to simulate space between image and outline
	let userCardImgBackdrop:HTMLSpanElement = createElement({
		className:"imageBackDrop"
	});
	// Prepend card image backdrop to card
	userCard.prepend(userCardImgBackdrop);

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