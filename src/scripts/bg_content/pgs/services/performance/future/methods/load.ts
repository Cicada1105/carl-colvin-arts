/*
	This file is for handling the load methods 
	of the future performances page
*/

// Imports
//    methods
import { requestFuturePerformances } from './requests';
import { createPerformanceRow } from './create';
import { createElement, createTextElement } from '../../../../../../global/methods/elements';
//    interfaces
import { IPerformance } from '../interfaces';

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
	// Create container for contact link text and button
	let cont:HTMLDivElement = createElement({
		idName:"contactLink"
	});

	// Create header for contact link 
	let linkText:HTMLHeadingElement = createTextElement({
		element:"h2",
		text:"Request Performance"
	});
	// Create arrow element to be used as "button" image
	let iBtn:HTMLElement = createElement({
		element:"i",
		className:"fas fa-chevron-right"
	});

	// Add event listener to iBtn to set session to send to contact page 
	iBtn.addEventListener("click",function() {
		// Set session storage to be "from" future performances 
		sessionStorage.setItem("from","future");
		// Navigate to contact page 
		window.location.assign("../../contact.html");
	},{once:true})

	// Append text and arrow to contact container 
	cont.appendChild(linkText);
	cont.appendChild(iBtn);

	document.body.appendChild(cont);
}

export { loadPerformances, loadContactLink }