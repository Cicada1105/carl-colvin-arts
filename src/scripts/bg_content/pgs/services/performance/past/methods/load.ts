/*
	This file holds the load methods for creating 
	repertoire, collaborators and anecdotes sections
*/

// Imports
//	Local
//		methods
import { createPerformanceCard, createCollaboratorCard, createAnecdoteCard } from './create';
import { createPageSection } from './generic';
//		interfaces
import { IRepertoire, ICollaborator, IAnecdote } from '../interfaces';
import { PerformanceDataInterface } from '../../interfaces';
//	Global
import { 
	createElement, createTextElement, 
	createLoadingText, createContactLink 
} from '../../../../../../global/methods/elements';
import { IContactLink } from '../../../../../../global/interfaces/general';
import requestData from '../../../request';

const loadRepertoire:()=>Promise<void> = async ():Promise<void> => {
	// Create container for holding past performances
	const repertoireCont:HTMLElement = createPageSection("Repertoire");

	// Create temporary loading text 
	const loadingTxt:HTMLParagraphElement = createLoadingText();
	// Append loading text to repertoire container
	repertoireCont.appendChild(loadingTxt);
	// Append container to body
	document.body.appendChild(repertoireCont);

	let performanceData:PerformanceDataInterface<IRepertoire> | {} = {};
	try {
		// Make request to get past performances
		performanceData = await requestData<PerformanceDataInterface<IRepertoire>>("performances/past");	
	} catch(e) {
		console.error(e);
	}

	// Remove loading text 
	loadingTxt.remove();

	// Check if there are any performances
	if ( ('performances' in performanceData) && (performanceData['performances'].length !== 0) ) {
		performanceData['performances'].forEach((performance:IRepertoire) => {
			// Create performance card with current performance data
			let performanceCard:HTMLElement = createPerformanceCard(performance);
			// Append performance card to parent container
			repertoireCont.appendChild(performanceCard);
		});
	}
	else {
		repertoireCont.appendChild(
			createTextElement({
				element: "h3",
				text: "No Performances At This Time",
				className: "errName"
			})
		);
		repertoireCont.appendChild(
			createTextElement({
				element: "h4",
				text: "Check back at another time",
				className: "errMessage"
			})
		);
	}
}
const loadCollaborators:()=>Promise<void> = async ():Promise<void> => {
	// Create container for holding collaborators
	const collaboratorsCont:HTMLElement = createPageSection("Collaborators");

	// Create temporary loading text 
	const loadingTxt:HTMLHeadingElement = createLoadingText();
	// Append loading text to collaborators container
	collaboratorsCont.appendChild(loadingTxt);
	// Append container to body
	document.body.appendChild(collaboratorsCont);

	let collaborators:ICollaborator[] = [];
	try {
		// Make request to get collaborators
		 collaborators = await requestData<ICollaborator[]>("performances/past/collaborators");
	} catch(e) {
		console.error(e);
	}
	// Remove loading text
	loadingTxt.remove();

	// Check if there are any collaborators
	if (collaborators.length === 0) {
		collaboratorsCont.appendChild(
			createTextElement({
				element: "h3",
				text: "No Collaborators At This Time",
				className: "errName"
			})
		);
		collaboratorsCont.appendChild(
			createTextElement({
				element: "h4",
				text: "Check back at another time",
				className: "errMessage"
			})
		);
	}
	else {
		let flexCont:HTMLDivElement = createElement({
			className: 'collaboratorsFlexCont'
		});
		// Append collaborators 
		collaborators.forEach((collaborator:ICollaborator) => {
			// Create collaborator card with current collaborator data
			let collaboratorCard:HTMLElement = createCollaboratorCard(collaborator);
			// Append collaborator card to parent container
			flexCont.appendChild(collaboratorCard);
		});
		collaboratorsCont.appendChild(flexCont);
	}
}
const loadAnecdotes:()=>Promise<void> = async ():Promise<void> => {
	// Create container for holding anecdotes
	const anecdotesCont:HTMLElement = createPageSection("Anecdotes");

	// Create temporary loading text 
	const loadingTxt:HTMLHeadingElement = createLoadingText();
	// Append loading text to anecdotes container
	anecdotesCont.appendChild(loadingTxt);
	// Append container to body
	document.body.appendChild(anecdotesCont);

	let anecdotes:IAnecdote[] = [];
	try {
		// Make request to get anecdotes
		 anecdotes = await requestData<IAnecdote[]>("performances/past/anecdotes");
	} catch(e) {
		console.error(e);
	}
	// Remove loading text 
	loadingTxt.remove();
	
	// Check if there are any anecdotes
	if (anecdotes.length === 0) {
		anecdotesCont.appendChild(
			createTextElement({
				element: "h3",
				text: "No Anecdotes At This Time",
				className: "errName"
			})
		);
		anecdotesCont.appendChild(
			createTextElement({
				element: "h4",
				text: "Check back at another time",
				className: "errMessage"
			})
		);
	}
	else {
		let flexCont:HTMLDivElement = createElement({
			className: 'anecdotesFlexCont'
		});
		// Append anecdotes 
		anecdotes.forEach((anecdote:IAnecdote) => {
			// Create anecdote card with currrent anecdote data 
			let anecdoteCard:HTMLElement = createAnecdoteCard(anecdote);
			// Append anecdote card to parent container
			flexCont.appendChild(anecdoteCard);
		});
		anecdotesCont.appendChild(flexCont);
	}
}

const loadContactLink:()=>void = ():void => {
	let linkData:IContactLink = {
		text: "Request Performance Info",
		from: "past",
		path: "../../contact.html"
	}
	let contactLinkCont:HTMLDivElement = createContactLink(linkData);
	document.body.appendChild(contactLinkCont);
}

export {
	loadRepertoire, loadCollaborators, 
	loadAnecdotes, loadContactLink
}