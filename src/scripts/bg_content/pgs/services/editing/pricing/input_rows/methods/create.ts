// Create methods for the input rows

// Imports
//	interfaces
//	   local
import { 
	EditingPricingRowInterface as IPricing, 
	EventListener 
} from '../interfaces/misc_interfaces' 
//	   global
import { SelectOptionInterface as IOption } from '../interfaces/row_data_interfaces'
//	methods
import { createElement, createTextElement } from '../../../../../../../global/methods'

const createSelectionRow = (rowData:IPricing,listener:EventListener):HTMLDivElement => {
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
	// Create select container
	let rowSelectCont:HTMLDivElement = createSelectCont(rowData.options, listener);

	// Append row marker, header and select container to row container
	selectionRow.appendChild(rowMarker);
	selectionRow.appendChild(rowHeader);
	selectionRow.appendChild(rowSelectCont);

	return selectionRow;
}
const createSelectCont = (selectOptions:IOption[], listener:EventListener):HTMLDivElement => {
	let selectCont:HTMLDivElement = createElement({
		className: "selectCont"
	});

	// Create select element 
	let selectEl:HTMLSelectElement = createSelectElement(selectOptions, listener);
	// Append select element to select container
	selectCont.appendChild(selectEl);

	return selectCont;
}
const createSelectElement = (options:IOption[], listener:EventListener):HTMLSelectElement => {
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

	return select;
}

export { createSelectionRow }