// Methods specific to the pricing input section

// Imports
//	methods
import { createElement } from '@global/methods/elements'
import { createLiteratureRow } from './rows'

const loadInputRows = ():HTMLDivElement => {
	let inputRows:HTMLDivElement = createElement({
		element:"form",
		idName: "inputRowsCont"
	});

	// Form attributes
	inputRows.setAttribute("method","POST");

	// Initiate creation of input rows
	let initialRow:HTMLDivElement = createLiteratureRow();
	// Append rows to container
	inputRows.appendChild(initialRow);

	return inputRows;
}

export { loadInputRows }