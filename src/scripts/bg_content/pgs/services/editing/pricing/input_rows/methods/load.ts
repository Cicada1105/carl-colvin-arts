// Methods specific to the pricing input section

// Imports
//	interfaces
import { EditingPricingRowInterface as IPricingRow } from '../interfaces/misc_interfaces'
//	methods
import { createElement } from '../../../../../../../global/methods'
import { createLiteratureRow } from './rows'

const loadInputRows = ():HTMLDivElement => {
	let inputRows:HTMLDivElement = createElement({
		idName: "inputRowsCont"
	});

	// Initiate creation of input rows
	let initialRow:HTMLDivElement = createLiteratureRow();
	// Append rows to container
	inputRows.appendChild(initialRow);

	return inputRows;
}

export { loadInputRows }