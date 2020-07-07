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
import { formatDate } from './rows'

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
const createDeadlineCont = (ranges:RangeInterface, listener:EventListener):HTMLDivElement => {
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
	// Set value attribute as current time
	let currDate = new Date();
	dateElement.setAttribute("value", formatDate(currDate));
	// Set min and max attributes
	dateElement.setAttribute("min", ranges.min.toString());
	dateElement.setAttribute("max", ranges.max.toString());

	// Add event listener 
	dateElement.addEventListener("change", listener);

	// Append input element to container
	deadlineCont.appendChild(dateElement);

	return deadlineCont;
}
const createEmailCont = () => {
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

	// Append email element to email container
	emailCont.appendChild(emailElement);

	return emailCont;
}

export { createInputRow, createSelectCont, createNumberCont, createDeadlineCont, createEmailCont }