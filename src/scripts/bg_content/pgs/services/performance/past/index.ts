/*
	File for initializing past performance page
*/

// Imports
import { loadRepertoire, loadCollaborators, loadAnecdotes, loadContactLink } from './methods/load';
import { createTextElement } from '../../../../../global/methods/elements';

import { INTRO_DATA } from './data';

const loadPreviousPerformances:()=>void = ():void => {
	// Create page header and intro text
	let title:HTMLHeadingElement = createTextElement({
		element:"h1",
		text:"Concerto Repertoire",
		idName:"previousPerformancesTitle"
	});
	let intro:HTMLParagraphElement = createTextElement({
		text:INTRO_DATA
	})
	document.body.appendChild(title);
	document.body.appendChild(intro);
	// Load past performane content
	loadRepertoire();
	loadCollaborators();
	loadAnecdotes();
	// Load contact link
	loadContactLink();
}

export { loadPreviousPerformances }