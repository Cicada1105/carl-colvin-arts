/*
	This file is for handling the load methods 
	of the future performances page
*/

// Imports
//    methods
import { requestFuturePerformances } from './requests';
import { createPerformanceRow } from './create';
import { createElement, createTextElement, createContactLink } from '../../../../../../global/methods/elements';
//    interfaces
import { IPerformance } from '../interfaces';
import { IContactLink } from '../../../../../../global/interfaces/general';

const loadPerformances:()=>Promise<void> = async ():Promise<void> => {
	// Create temporary loading text 
	const loadingTxt:HTMLHeadingElement = createTextElement({
		element:"h3",
		text:"Loading...",
		idName:"loadingText"
	});
	// Append loading text to body 
	document.body.appendChild(loadingTxt);

	await requestFuturePerformances().then((performances:IPerformance[]) => {
		// Request is done: remove loading text
		document.body.removeChild(loadingTxt)
		performances.forEach((performance:IPerformance) => {
			// Create performance section with currentt data 
			let performanceRow:HTMLElement = createPerformanceRow(performance);
			// Append performance row to body
			document.body.appendChild(performanceRow);
		})
	})
}
const loadContactLink:()=>void = ():void => {
	let linkData:IContactLink = {
		text: "Request Performance",
		from: "future",
		path: "../../contact.html"
	}
	let contactLinkCont:HTMLDivElement = createContactLink(linkData);
	document.body.appendChild(contactLinkCont);
}

export { loadPerformances, loadContactLink }