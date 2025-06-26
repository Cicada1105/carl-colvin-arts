/*
	This file is for handling the load methods 
	of the future performances page
*/

// Imports
//    methods
import requestData from '../../../request';
import { createPerformanceRow } from './create';
import { 
	createElement, createTextElement,
	createContactLink, createFallbackText
} from '@global/methods/elements';
//    interfaces
import { IPerformance } from '../interfaces';
import { PerformanceDataInterface } from '../../interfaces';
import { IContactLink } from '@global/interfaces/general';

const loadPerformances:()=>Promise<void> = async ():Promise<void> => {
	let performanceData:PerformanceDataInterface<IPerformance> = await requestData<PerformanceDataInterface<IPerformance>>("performance/future");

	if (performanceData['performances'].length !== 0) {
		performanceData['performances'].forEach((performance:IPerformance) => {
			// Create performance section with currentt data 
			let performanceRow:HTMLElement = createPerformanceRow(performance);
			// Append performance row to body
			document.body.appendChild(performanceRow);
		})
	}
	else {
		let fallbackText:HTMLDivElement = createFallbackText('No future performances at the time','Try again later');
		document.body.appendChild(fallbackText);
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