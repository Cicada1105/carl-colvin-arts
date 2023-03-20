/*
	This file is for handling the load methods 
	of the future performances page
*/

// Imports
//    methods
import requestData from '../../../request';
import { createPerformanceRow } from './create';
import { createElement, createTextElement, createContactLink } from '../../../../../../global/methods/elements';
//    interfaces
import { IPerformance } from '../interfaces';
import { IContactLink } from '../../../../../../global/interfaces/general';

const loadPerformances:()=>Promise<void> = async ():Promise<void> => {
	let performances:IPerformance[] = await requestData<IPerformance[]>("performance/future");

	if (performances.length !== 0) {
		performances.forEach((performance:IPerformance) => {
			// Create performance section with currentt data 
			let performanceRow:HTMLElement = createPerformanceRow(performance);
			// Append performance row to body
			document.body.appendChild(performanceRow);
		})
		/*catch((err:Error) => {
			document.body.appendChild(
				createTextElement({
					element: "h3",
					text: err.name,
					idName: "errName"
				})
			);
			document.body.appendChild(
				createTextElement({
					element: "h6",
					text: err.message,
					idName: "errMessage"
				})
			);
		})*/
	}
	else {
		document.body.appendChild(createTextElement({
			element:"h2",
			idName:"noPerformancesHeader",
			text:"Sorry, no future performances today!"
		}));
	}
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