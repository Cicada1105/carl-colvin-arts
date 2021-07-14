/*
	This file is for creating individual components for the future performances page
*/

// Imports
//    Methods
import { createElement, createTextElement } from '../../../../../../global/methods/elements';
//    Interfaces
import { IPerformance, IAboutPerformance, IDateTime } from '../interfaces';

const createPerformanceRow:(futurePerformanceData:IPerformance)=>HTMLDivElement = (performance:IPerformance):HTMLDivElement => {
	// Create section to contain all sub-semantic performance data
	let row:HTMLDivElement = createElement({
		className: "performanceSection"
	});

	// Create main section for performance row 
	let mainSection = createMainSection({
		name:performance["name"],
		location:performance["location"],
		instruments:performance["instruments"],
		description:performance["description"]
	});
	// Create date time container 
	let dateTimeCont:HTMLElement = createDateTimeCont({ date: performance["date"], time: performance["time"] });

	// Append main section and date time aside section to row 
	row.appendChild(mainSection);
	row.appendChild(dateTimeCont);

	return row;
}

const createMainSection = ({name="", location="", instruments=[""], description=""}):HTMLElement => {
	// Create section to hold the performance information excluding date & time 
	let section:HTMLElement = document.createElement("section");

	// Create container for holding info about performance 
	let aboutPerformanceCont:HTMLDivElement = createAboutPerformaceCont({
		name,
		location,
		description
	})
	// Create instruments container 
	let instrumentsCont:HTMLDivElement = createInstrumentsCont(instruments);

	// Append name, location, description and instruments container to section 
	section.appendChild(aboutPerformanceCont);
	section.appendChild(instrumentsCont);

	return section;
}
const createAboutPerformaceCont:(aboutPerformanceData:IAboutPerformance)=>HTMLDivElement = (performance:IAboutPerformance):HTMLDivElement => {
	// Create container for about performance data 
	let cont:HTMLDivElement = createElement({
		className:"aboutPerformanceCont"
	});

	// Create headers for main section 
	let nameHeader:HTMLHeadingElement = createTextElement({
		element:"h2",
		text: performance["name"]
	});
	let locationHeader:HTMLHeadingElement = createTextElement({
		element:"h3",
		text: performance["location"]
	});
	// Create description of performance 
	let descriptionEl:HTMLParagraphElement = createTextElement({
		text: performance["description"]
	});

	// Append performance name, location and description to container 
	cont.appendChild(nameHeader);
	cont.appendChild(locationHeader);
	cont.appendChild(descriptionEl);

	return cont;
}
const createInstrumentsCont:(instrumentsList:string[])=>HTMLDivElement = (instruments:string[]):HTMLDivElement => {
	// Create instruments container 
	let cont:HTMLDivElement = createElement({
		className: "instrumentsCont"
	});

	// Create instruments header 
	let instrumentsHeader:HTMLHeadingElement = createTextElement({
		element: "h3",
		text: "Instrument of Use"
	});

	// Create proper text format for instruments 
	let txt:string = "";
	instruments.forEach((instrument:string,i:number) => {
		// If more than one instrument, include ", "
		txt += i === 0 ? instrument : `, ${instrument}`;
	});
	let instrumentsList:HTMLParagraphElement = createTextElement({
		text: txt
	});

	// Append instruments header and formatted instruments string 
	cont.appendChild(instrumentsHeader);
	cont.appendChild(instrumentsList);

	return cont;
}
const createDateTimeCont:(dateTimeData:IDateTime)=>HTMLElement = (dateTime:IDateTime):HTMLElement => {
	// Create aside containing date and time 
	let aside:HTMLElement = document.createElement("aside");

	// Create text elements for date and time
	let dateEl:HTMLHeadingElement = createTextElement({
		element: "h3",
		text: dateTime["date"]
	});
	let timeEl:HTMLHeadingElement = createTextElement({
		element: "h3",
		text: `${dateTime.time['start']} - ${dateTime.time['end']}`
	});

	// Append date and time to aside 
	aside.appendChild(dateEl);
	aside.appendChild(timeEl);

	return aside;
}

export { createPerformanceRow }