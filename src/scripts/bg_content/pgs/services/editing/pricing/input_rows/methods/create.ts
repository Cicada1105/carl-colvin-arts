// Create methods for the input rows

// Imports
//	interfaces
//	   local
import { 
	EventListener
} from '../../../../../../../global/interfaces/general' 
import { 
	IInputRow, ISelect, IRange,
	GenericInputInterface as IGenericInput
} from '../../../../../../../global/interfaces/inputs'
//	methods
import { 
	createElement, createTextElement, 
	createLabelElement, createSelectElement 
} from '../../../../../../../global/methods'

const createInputRow = (rowData:IInputRow):HTMLDivElement => {
	const selectionRow:HTMLDivElement = createElement({
		className: "selectionRow"
	});

	// Create arrow heading "marker"
	let rowMarker:HTMLElement = createElement({
		element: "i",
		className: "fas fa-chevron-right"
	});

	// Create label 
	let rowLabel:HTMLLabelElement = createLabelElement({
		text: rowData.label.text,
		forIn: rowData.label.for
	});

	// Append row marker, label and input container to row container
	selectionRow.appendChild(rowMarker);
	selectionRow.appendChild(rowLabel);
	selectionRow.appendChild(<HTMLDivElement>(rowData.content));

	return selectionRow;
}
const createSelectCont = (optionsIn:IGenericInput<ISelect>, listener:EventListener):HTMLDivElement => {
	// Create container for select element
	let selectCont:HTMLDivElement = createElement({
		className: "userInputCont",
		idName: "selectCont"
	});

	// Create select element
	let select:HTMLSelectElement = createSelectElement({
		options:optionsIn.data.options,
		className: "selectElement",
		idName: optionsIn.id
	});

	// Add event listener to select element
	select.addEventListener("change", listener);

	// Append select element to its container
	selectCont.appendChild(select);

	return selectCont;
}
const createNumberCont = (ranges:IGenericInput<IRange>, listener:EventListener):HTMLDivElement => {
	// Create container for number input
	const numberCont:HTMLDivElement = createElement({
		className: "userInputCont",
		idName: "numberCont"
	});

	// Create number input element
	const number:HTMLInputElement = createElement({
		element: "input",
		className: "numberElement",
		idName: ranges.id
	});
	// Set type attribute 
	number.setAttribute("type", "number");
	// Set min and max attributes 
	number.setAttribute("min", ranges.data.min.toString());
	number.setAttribute("max", ranges.data.max.toString());

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
const createDeadlineCont = (data:IGenericInput<null>,listener:EventListener):HTMLDivElement => {
	// Create deadline container
	const deadlineCont:HTMLDivElement = createElement({
		className: "userInputCont",
		idName: "deadlineCont"
	});

	// Create date input element 
	const dateElement:HTMLInputElement = createElement({
		element: "input",
		className: "deadlineElement",
		idName: data.id
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
	dateElement.addEventListener("input", listener);

	// Append input element to container
	deadlineCont.appendChild(dateElement);

	return deadlineCont;
}
const createEmailCont = (data:IGenericInput<null>, listener:EventListener):HTMLDivElement => {
	// Create container for email input 
	const emailCont:HTMLDivElement = createElement({
		className: "userInputCont",
		idName: "emailCont"
	});

	// Create email input element 
	const emailElement:HTMLInputElement = createElement({
		element: "input",
		className: "emailElement",
		idName: data.id
	});
	// Set type attribute
	emailElement.setAttribute("type","email");
	// Set required attribute
	emailElement.setAttribute("required","");
	// Set placeholder attribute
	emailElement.setAttribute("placeholder","-Enter Email-");
	
	// Add event listeners
	//	only add event listeners to email input after it has been focus and remove after single use
	//	note: user can either select outside of input field or press enter to attempt to move to submit
	emailElement.addEventListener("focus", () => {
		console.log("Email input focused");
		emailElement.addEventListener("change", listener, { once: true });
		emailElement.addEventListener("keypress", listener, { once: true });	
	});

	// Append email element to email container
	emailCont.appendChild(emailElement);

	return emailCont;
}
const createSubmitRow = (listener:EventListener):HTMLDivElement => {
	// Create container row for submit container
	const submitRow:HTMLDivElement = createElement({
		className: "submitRow"
	});

	// Create container for submit button
	let submitCont:HTMLDivElement = createElement({
		className: "userInputCont",
		idName: "submitCont"
	});

	// Create button element for submit button
	let submitBtn:HTMLInputElement = createElement({
		element:"input",
		idName:"submitBtn"
	});
	// Set type attribute
	submitBtn.setAttribute("type","button");
	submitBtn.setAttribute("value", "Submit");

	// Add event listener to handle submitting form 
	submitBtn.addEventListener("click",listener);
	/*submitBtn.addEventListener("click",(event:any) => {
		submitForm(event);
	});*/
	
	// Create container to be used to display messages about the form status
	let msgCont:HTMLSpanElement = createElement({
		element:"span",
		idName:"formMessage"
	});

	// Append submit button and message container to container
	submitCont.appendChild(submitBtn);
	submitCont.appendChild(msgCont);

	// Append submit container to submit row
	submitRow.appendChild(submitCont);

	return submitRow;
}

export { 
	createInputRow, createSelectCont, 
	createNumberCont, createDeadlineCont, 
	createEmailCont, getMinMaxDates, 
	createSubmitRow
}