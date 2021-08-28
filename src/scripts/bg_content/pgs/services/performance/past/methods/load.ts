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
//	Global
import { createTextElement, createContactLink } from '../../../../../../global/methods/elements';
import { IContactLink } from '../../../../../../global/interfaces/general';
import requestData from '../../../request';

const loadRepertoire:()=>Promise<void> = async ():Promise<void> => {
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
	let performances:IRepertoire[] = await requestData<IRepertoire[]>("performances/past");
		// Remove loading text 
		repertoireCont.removeChild(loadingTxt);

		performances.forEach((performance:IRepertoire) => {
			// Create performance card with current performance data
			let performanceCard:HTMLElement = createPerformanceCard(performance);
			// Append performance card to parent container
			repertoireCont.appendChild(performanceCard);
		});	
	/*catch((err:Error) => {
		// Remove loading text 
		repertoireCont.removeChild(loadingTxt);

		repertoireCont.appendChild(
			createTextElement({
				element: "h3",
				text: err.name,
				idName: "errName"
			})
		);
		repertoireCont.appendChild(
			createTextElement({
				element: "h6",
				text: err.message,
				idName: "errMessage"
			})
		);
	})*/
}
const loadCollaborators:()=>Promise<void> = async ():Promise<void> => {
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
	let collaborators:ICollaborator[] = await requestData<ICollaborator[]>("performances/past/collaborators");
		// Remove loading text
		collaboratorsCont.removeChild(loadingTxt);

		// Append collaborators 
		collaborators.forEach((collaborator:ICollaborator) => {
			// Create collaborator card with current collaborator data
			let collaboratorCard:HTMLElement = createCollaboratorCard(collaborator);
			// Append collaborator card to parent container
			collaboratorsCont.appendChild(collaboratorCard);
		});	
	/*catch((err:Error) => {
		// Remove loading text
		collaboratorsCont.removeChild(loadingTxt);

		collaboratorsCont.appendChild(
			createTextElement({
				element: "h3",
				text: err.name,
				idName: "errName"
			})
		);
		collaboratorsCont.appendChild(
			createTextElement({
				element: "h6",
				text: err.message,
				idName: "errMessage"
			})
		);
	})*/
}
const loadAnecdotes:()=>Promise<void> = async ():Promise<void> => {
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
	let anecdotes:IAnecdote[] = await requestData<IAnecdote[]>("performances/past/anecdotes");
		// Remove loading text 
		anecdotesCont.removeChild(loadingTxt);
		
		// Append anecdotes 
		anecdotes.forEach((anecdote:IAnecdote) => {
			// Create anecdote card with currrent anecdote data 
			let anecdoteCard:HTMLElement = createAnecdoteCard(anecdote);
			// Append anecdote card to parent container
			anecdotesCont.appendChild(anecdoteCard);
		})
	/*catch((err) => {
		// Remove loading text 
		anecdotesCont.removeChild(loadingTxt);

		// Append error message
		anecdotesCont.appendChild(
			createTextElement({
				element: "h3",
				text: err.name,
				idName: "errName"
			})
		);
		anecdotesCont.appendChild(
			createTextElement({
				element: "h6",
				text: err.message,
				idName: "errMessage"
			})
		);
	})*/
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