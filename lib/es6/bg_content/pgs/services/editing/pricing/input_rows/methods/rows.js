// File to create specific rows
// Imports
//	data
//	   local
import { literatureRatesSelections as litSelections } from '../data/static';
//	   shared
import { HEADERS } from '../../shared/data/static';
//	methods
import { createSelectionRow } from './create';
const createLiteratureRow = () => {
    // Create an element of type IRow with default values to create a new row with
    let rowData = {
        header: HEADERS[0],
        options: [{
                "display": "-Select-",
                "value": "select"
            }]
    };
    // Loop through editingRatesSelections, adding the literature type to rowData
    litSelections.forEach((litSelection) => {
        rowData.options.push(litSelection.literatureType);
    });
    // Create event listener for when specific literature type option is selected
    let childElement;
    // Create literature row with row data and event handler
    let literatureRow = createSelectionRow(rowData, (event) => {
        // Clear child element to allow for child update if it exists
        if ((typeof childElement) !== "undefined")
            childElement.remove();
        // Display next row if current selection is not default option
        if (event.target.value !== "select") {
            // Clear child 
            // Find indexed location of selected value to get child data
            let selectedLitPos = litSelections.findIndex((litSelection) => {
                return litSelection.literatureType.value === event.target.value;
            });
            // Pass child data of selected literature type to display corresponding genres 
            childElement = createGenreRow((litSelections[selectedLitPos].child));
            // Append childElement to parent element
            literatureRow.appendChild(childElement);
        }
    });
    return literatureRow;
};
const createGenreRow = (genreData) => {
    // Create an element of type IRow with default values to create a new row with
    let rowData = {
        header: HEADERS[1],
        options: [{
                "display": "-Select-",
                "value": "select"
            }]
    };
    // Loop through genres, adding each one to the rowData
    genreData.genres.forEach((genre) => {
        rowData.options.push(genre);
    });
    // Create event listener for when specific literature genre option is selected
    let childElement;
    // Create genre row with row data and event handler
    let genreRow = createSelectionRow(rowData, (event) => {
        // Display next row if current selection is not default option
        if (event.target.value !== "select") {
            // Store value 
            let genre = event.target.value;
            // Pass child data of selected literature type to display corresponding editing types
            childElement = createEditingRow((genreData.child));
            // Append childElement to parent element
            genreRow.appendChild(childElement);
        }
        // Clear child element to allow for child update if it exists
        else if ((typeof childElement) !== "undefined")
            childElement.remove();
    });
    return genreRow;
};
const createEditingRow = (editingData) => {
    console.log("Loading Editing Type Row");
    // Create an element of type IRow with default values to create a new row with
    let rowData = {
        header: HEADERS[2],
        options: [{
                "display": "-Select-",
                "value": "select"
            }]
    };
    // Loop through editing types, adding each one to the row data
    editingData.forEach((type) => {
        rowData.options.push(type.editingType);
    });
    // Create event listener for when specific editing type option is selected
    let childElement;
    // Create editing type row with row data and event handler
    let editingTypeRow = createSelectionRow(rowData, (event) => {
        // Display next row if current selection is not default option
        if (event.target.value !== "select") {
            // Find indexed location of selected value to get child data
            let selectedEditingTypePos = editingData.findIndex((type) => {
                return type.editingType.value === event.target.value;
            });
            // Pass child data of selected literature type to display corresponding genres 
            //childElement = createWordCountRow();
            console.log(editingData[selectedEditingTypePos].child);
            createWordCountRow();
            // Append childElement to parent element
            //literatureRow.appendChild(childElement);
        }
        // Clear child element to allow for child update if it exists
        else if ((typeof childElement) !== "undefined")
            childElement.remove();
    });
    return editingTypeRow;
};
const createWordCountRow = () => {
    console.log("Loading Word Count Row");
};
const createDeadlineRow = () => {
    console.log("Loading Deadline Row");
};
const createContactEmailRow = () => {
    console.log("Loading Contact Email Row");
};
export { createLiteratureRow };
