/*
	This file holds the load methods for creating 
	repertoire, collaborators and anecdotes sections
*/

// Imports
//	Local
//		methods
import { createPerformanceCard, createCollaboratorCard, createAnecdoteCard } from './create';
import { createPageSection } from './generic';
import { RequestResponseType, requestPastData } from './requests';
//		interfaces
import { IRepertoire, ICollaborator, IAnecdote } from '../interfaces';
//	Global
import { createTextElement, createContactLink } from '../../../../../../global/methods/elements';
import { IContactLink } from '../../../../../../global/interfaces/general';

const loadRepertoire:()=>void = ():void => {
	// Create container for holding past performances
	const repertoireCont:HTMLDivElement = createPageSection("Repertoire");

	// Create temporary loading text 
	const loadingTxt:HTMLHeadingElement = createTextElement({
		element:"h3",
		text:"Loading...",
		idName:"loadingText"
	});
	// Append loading text to repertoire container
	repertoireCont.appendChild(loadingTxt);
	// Append container to body
	document.body.appendChild(repertoireCont);

	// Make request to get past performances
	requestPastData("past").then((response:RequestResponseType) => {
		let performances:IRepertoire[] = <IRepertoire[]>response;
		// Remove loading text 
		repertoireCont.removeChild(loadingTxt);
		performances.forEach((performance:IRepertoire) => {
			// Create performance card with current performance data
			let performanceCard:HTMLElement = createPerformanceCard(performance);
			// Append performance card to parent container
			repertoireCont.appendChild(performanceCard);
		});
	}).catch((err:Error) => {
		console.error(err);
	});
}
const loadCollaborators:()=>void = ():void => {
	// Create container for holding collaborators
	const collaboratorsCont:HTMLDivElement = createPageSection("Collaborators");

	// Create temporary loading text 
	const loadingTxt:HTMLHeadingElement = createTextElement({
		element:"h3",
		text:"Loading...",
		idName:"loadingText"
	});
	// Append loading text to collaborators container
	collaboratorsCont.appendChild(loadingTxt);
	// Append container to body
	document.body.appendChild(collaboratorsCont);

	// Make request to get collaborators
	requestPastData("past/collaborators").then((response:RequestResponseType) => {
		let collaborators:ICollaborator[] = <ICollaborator[]>response;
		// Remove loading text
		collaboratorsCont.removeChild(loadingTxt);
		// Append collaborators 
		collaborators.forEach((collaborator:ICollaborator) => {
			// Create collaborator card with current collaborator data
			let collaboratorCard:HTMLElement = createCollaboratorCard(collaborator);
			// Append collaborator card to parent container
			collaboratorsCont.appendChild(collaboratorCard);
		});
	}).catch((err:Error) => {
		console.error(err);
	})
}
const loadAnecdotes:()=>void = ():void => {
	// Create container for holding anecdotes
	const anecdotesCont:HTMLDivElement = createPageSection("Anecdotes");

	// Create temporary loading text 
	const loadingTxt:HTMLHeadingElement = createTextElement({
		element:"h3",
		text:"Loading...",
		idName:"loadingText"
	});
	// Append loading text to anecdotes container
	anecdotesCont.appendChild(loadingTxt);
	// Append container to body
	document.body.appendChild(anecdotesCont);

	// Make request to get anecdotes
	requestPastData("past/anecdotes").then((response:RequestResponseType) => {
		let anecdotes:IAnecdote[] = <IAnecdote[]>response;
		// Remove loading text 
		anecdotesCont.removeChild(loadingTxt);
		// Append anecdotes 
		anecdotes.forEach((anecdote:IAnecdote) => {
			// Create anecdote card with currrent anecdote data 
			let anecdoteCard:HTMLElement = createAnecdoteCard(anecdote);
			// Append anecdote card to parent container
			anecdotesCont.appendChild(anecdoteCard);
		});
	}).catch((err:Error) => {
		console.error(err);
	})
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