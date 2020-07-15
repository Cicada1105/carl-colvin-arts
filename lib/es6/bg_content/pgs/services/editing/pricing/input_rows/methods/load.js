// Methods specific to the pricing input section
// Imports
//	methods
import { createElement } from '../../../../../../../global/methods';
import { createLiteratureRow } from './rows';
const loadInputRows = () => {
    let inputRows = createElement({
        element: "form",
        idName: "inputRowsCont"
    });
    // Initiate creation of input rows
    let initialRow = createLiteratureRow();
    // Append rows to container
    inputRows.appendChild(initialRow);
    return inputRows;
};
export { loadInputRows };
