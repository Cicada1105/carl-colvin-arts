// Create methods for the input rows
//	methods
import { createElement, createTextElement } from '../../../../../../../global/methods';
const createSelectionRow = (rowData, listener) => {
    const selectionRow = createElement({
        className: "selectionRow"
    });
    // Create arrow heading "marker"
    let rowMarker = createElement({
        element: "i",
        className: "fas fa-chevron-right"
    });
    // Create header
    let rowHeader = createTextElement({
        element: "h2",
        text: rowData.header
    });
    // Create select container
    let rowSelectCont = createSelectCont(rowData.options, listener);
    // Append row marker, header and select container to row container
    selectionRow.appendChild(rowMarker);
    selectionRow.appendChild(rowHeader);
    selectionRow.appendChild(rowSelectCont);
    return selectionRow;
};
const createSelectCont = (selectOptions, listener) => {
    let selectCont = createElement({
        className: "selectCont"
    });
    // Create select element 
    let selectEl = createSelectElement(selectOptions, listener);
    // Append select element to select container
    selectCont.appendChild(selectEl);
    return selectCont;
};
const createSelectElement = (options, listener) => {
    let select = createElement({
        element: "select",
        className: "selectElement"
    });
    options.forEach((option) => {
        // Create new option element 
        let optionEl = createTextElement({
            element: "option",
            text: option.display
        });
        // Add value attribute to option tag
        optionEl.setAttribute("value", option.value);
        // Append option element to select tag
        select.appendChild(optionEl);
    });
    // Add event listener to select element
    select.addEventListener("change", listener);
    return select;
};
export { createSelectionRow };
