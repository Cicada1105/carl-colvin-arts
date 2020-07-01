// Methods specific to the pricing input section
//	methods
import { createElement } from '../../../../../../../global/methods';
import { createLiteratureRow } from './rows';
const loadInputRows = () => {
    let inputRows = createElement({
        idName: "inputRowsCont"
    });
    // Initiate creation of input rows
    let initialRow = createLiteratureRow();
    // Append rows to container
    inputRows.appendChild(initialRow);
    return inputRows;
};
export { loadInputRows };
