// Create methods for the input rows

// Imports
//	interfaces
//	   local
import { 
	EditingPricingRowInterface as IPricing, 
	EventListener,
	RangeInterface
} from '../interfaces/misc_interfaces' 
//	   global
import { SelectOptionInterface as IOption } from '../interfaces/row_data_interfaces'
//	methods
import { createElement, createTextElement } from '../../../../../../../global/methods'

const createInputRow = (rowData:IPricing):HTMLDivElement => {
	const selectionRow:HTMLDivElement = createElement({
		className: "selectionRow"
	});

	// Create arrow heading "marker"
	let rowMarker:HTMLElement = createElement({
		element: "i",
		className: "fas fa-chevron-right"
	});
	// Create header
	let rowHeader:HTMLHeadingElement = createTextElement({
		element: "h2",
		text: rowData.header
	});

	// Append row marker, header and input container to row container
	selectionRow.appendChild(rowMarker);
	selectionRow.appendChild(rowHeader);
	selectionRow.appendChild(<HTMLDivElement>(rowData.content));

	return selectionRow;
}
const createSelectCont = (options:IOption[], listener:EventListener):HTMLDivElement => {
	// Create container for select element
	let selectCont:HTMLDivElement = createElement({
		className: "selectCont"
	});

	// Create select element
	let select:HTMLSelectElement = createElement({
		element: "select",
		className: "selectElement"
	});

	options.forEach((option) => {
		// Create new option element 
		let optionEl:HTMLOptionElement = createTextElement({
			element: "option",
			text: option.display
		});
		// Add value attribute to option tag
		optionEl.setAttribute("value",option.value);
		// Append option element to select tag
		select.appendChild(optionEl);
	});

	// Add event listener to select element
	select.addEventListener("change", listener);

	// Append select element to its container
	selectCont.appendChild(select);

	return selectCont;
}
const createNumberCont = (ranges:RangeInterface, listener:EventListener):HTMLDivElement => {
	// Create container for number input
	const numberCont:HTMLDivElement = createElement({
		className: "numberCont"
	});

	// Create number input element
	const number:HTMLInputElement = createElement({
		element: "input",
		className: "numberElement"
	});
	// Set type attribute 
	number.setAttribute("type", "number");
	// Set min and max attributes 
	number.setAttribute("min", ranges.min.toString());
	number.setAttribute("max", ranges.max.toString());

	// Add event listener to number element
	number.addEventListener("change", listener);

	// Append number input element to container
	numberCont.appendChild(number);

	return numberCont;
}
/*		Deadline helper methods		*/
function getMinMaxDates(date:Date) {
	// Create new Dates that reflect the current time
	let min = new Date();
	let max = new Date();

	// Add 1 day to current time for min value
	let futureMinDateInMs:number = date.getTime() + (1 * 24 * 60 * 60 * 1000);
	// Add 547.5 days(1.5 * 365) to current time for 1.5 years from current time as the max time
	let futureMaxDateInMs:number = date.getTime() + (1.5 * 365 * 24 * 60 * 60 * 1000);

	// Set times of min and max dates
	min.setTime(futureMinDateInMs);
	max.setTime(futureMaxDateInMs);

	// Return values as an object
	return [min, max];
}
function formatDate(currDate:Date):string {
	let month:number = currDate.getMonth() + 1;
	let date:number = currDate.getDate() ;
	let hours:number = currDate.getHours();
	let minutes:number = currDate.getMinutes();
	let seconds:number = currDate.getSeconds();
	
	return `${currDate.getFullYear()}-` + 
	`${month < 10 ? "0" + month : month.toString()}-` + 
	`${date < 10 ? "0" + date : date.toString()}` + 
	`T${hours < 10 ? "0" + hours : hours.toString()}:` + 
	`${minutes < 10 ? "0" + minutes : minutes.toString()}:` + 
	`${seconds < 10 ? "0" + seconds : seconds.toString()}`;
}
function updateTime() {
	let currTime = new Date();
	let [minDateNum, maxDateNum] = getMinMaxDates(currTime);

	return {
		current: formatDate(currTime),
		min: formatDate(minDateNum),
		max: formatDate(maxDateNum)
	}
}
const createDeadlineCont = (listener:EventListener):HTMLDivElement => {
	// Create deadline container
	const deadlineCont:HTMLDivElement = createElement({
		className: "deadlineCont"
	});

	// Create date input element 
	const dateElement:HTMLInputElement = createElement({
		element: "input",
		className: "deadlineElement"
	});
	// Set type attribute
	dateElement.setAttribute("type","datetime-local");

	// Update current time, minimum and maximum date values
	let timeConstraints = updateTime();

	// Set value attribute as current time
	dateElement.setAttribute("value", timeConstraints.current);

	// Set min and max attributes
	dateElement.setAttribute("min", timeConstraints.min);
	dateElement.setAttribute("max", timeConstraints.max);


	// Add event listener 
	dateElement.addEventListener("change", listener);

	// Append input element to container
	deadlineCont.appendChild(dateElement);

	return deadlineCont;
}
const createEmailCont = (listener:EventListener) => {
	// Create container for email input 
	const emailCont:HTMLDivElement = createElement({
		className: "emailCont"
	});

	// Create email input element 
	const emailElement:HTMLInputElement = createElement({
		element: "input",
		className: "emailElement"
	});
	// Set type attribute
	emailElement.setAttribute("type","email");
	// Set required attribute
	emailElement.setAttribute("required","");
	// Set placeholder attribute
	emailElement.setAttribute("placeholder","-Enter Email-");

	// Add event listener
	emailElement.addEventListener("change", listener);

	// Append email element to email container
	emailCont.appendChild(emailElement);

	return emailCont;
}

export { createInputRow, createSelectCont, createNumberCont, createDeadlineCont, createEmailCont, getMinMaxDates }