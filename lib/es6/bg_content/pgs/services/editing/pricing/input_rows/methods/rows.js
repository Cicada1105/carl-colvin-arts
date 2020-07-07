// File to create specific rows
// Imports
//	data
//	   local
import { literatureRatesSelections as litSelections } from '../data/static';
import { userSelectedData } from '../data/dynamic';
//	   shared
import { HEADERS } from '../../shared/data/static';
//	methods
//	   local
import { createInputRow, createSelectCont, createNumberCont, createDeadlineCont, createEmailCont } from './create';
const createLiteratureRow = () => {
    // Create an element of type IRow with default values to create a new row with
    let rowData = {
        header: HEADERS[0],
        content: null
    };
    let options = [{
            "display": "-Select",
            "value": "select"
        }];
    // Loop through editingRatesSelections, adding the literature type to rowData
    litSelections.forEach((litSelection) => {
        options.push(litSelection.literatureType);
    });
    // Create event listener for when specific literature type option is selected
    let childElement;
    // Create select container
    rowData.content = createSelectCont(options, (event) => {
        // Clear child element to allow for child update if it exists
        ((typeof childElement) !== "undefined") && childElement.remove();
        // Display next row if current selection is not default option
        if (event.target.value !== "select") {
            // Find indexed location of selected value to get child data
            let selectedLitPos = litSelections.findIndex((litSelection) => {
                return litSelection.literatureType.value === event.target.value;
            });
            // Store selected value
            userSelectedData.literatureType = litSelections[selectedLitPos].literatureType.display;
            // Pass child data of selected literature type to display corresponding genres 
            childElement = createGenreRow((litSelections[selectedLitPos].child));
            // Append childElement to parent element
            literatureRow.appendChild(childElement);
        }
    });
    // Create literature row with row data
    let literatureRow = createInputRow(rowData);
    return literatureRow;
};
const createGenreRow = (genreData) => {
    // Create an element of type IRow with default values to create a new row with
    let rowData = {
        header: HEADERS[1],
        content: null
    };
    let options = [{
            "display": "-Select-",
            "value": "select"
        }];
    // Loop through genres, adding each one to the rowData
    genreData.genres.forEach((genre) => {
        options.push(genre);
    });
    // Create event listener for when specific literature genre option is selected
    let childElement;
    // Create select container 
    rowData.content = createSelectCont(options, (event) => {
        // Clear child element to allow for child update if it exists
        ((typeof childElement) !== "undefined") && childElement.remove();
        // Display next row if current selection is not default option
        if (event.target.value !== "select") {
            // Store value -> HTMLCollection of selectedOptions will only hold 
            //	one value as long as 'multiple' attribute is omitted
            userSelectedData.genre = event.target.selectedOptions[0].text;
            // Pass child data of selected literature type to display corresponding editing types
            childElement = createEditingRow((genreData.child));
            // Append childElement to parent element
            genreRow.appendChild(childElement);
        }
    });
    // Create genre row with row data and event handler
    let genreRow = createInputRow(rowData);
    return genreRow;
};
const createEditingRow = (editingData) => {
    // Create an element of type IRow with default values to create a new row with
    let rowData = {
        header: HEADERS[2],
        content: null
    };
    let options = [{
            "display": "-Select-",
            "value": "select"
        }];
    // Loop through editing types, adding each one to the row data
    editingData.forEach((type) => {
        options.push(type.editingType);
    });
    // Create event listener for when specific editing type option is selected
    let childElement;
    // Create select container
    rowData.content = createSelectCont(options, (event) => {
        // Clear child element to allow for child update if it exists
        ((typeof childElement) !== "undefined") && childElement.remove();
        // Display next row if current selection is not default option
        if (event.target.value !== "select") {
            // Find indexed location of selected value to get child data
            let selectedEditingTypePos = editingData.findIndex((type) => {
                return type.editingType.value === event.target.value;
            });
            // Store display value based on selected value
            userSelectedData.editingType = editingData[selectedEditingTypePos].editingType.display;
            // Pass child data of selected literature type to display corresponding genres 
            childElement = createWordCountRow((editingData[selectedEditingTypePos].child.rates));
            // Append childElement to parent element
            editingTypeRow.appendChild(childElement);
        }
    });
    // Create editing type row with row data and event handler
    let editingTypeRow = createInputRow(rowData);
    return editingTypeRow;
};
const createWordCountRow = (rates) => {
    // Create an element of type IRow with default values to create a new row with
    let rowData = {
        header: HEADERS[3],
        content: null
    };
    // Loop through rates, finding lowest value and highest value to determine range
    let ranges = {
        min: 0,
        max: 0
    };
    rates.forEach((rate) => {
        (rate.min < ranges.min) && (ranges.min = rate.min);
        (rate.max > ranges.max) && (ranges.max = rate.max);
    });
    // Create word container with ranges and handler
    let childElement;
    rowData.content = createNumberCont(ranges, (event) => {
        var _a;
        // Clear child element to allow for child update if it exists
        ((typeof childElement) !== "undefined") && childElement.remove();
        let enteredValueStr = event.target.value;
        let enteredValueNum = parseInt(enteredValueStr);
        // Display next row if current selection is valid
        if ((enteredValueNum >= ranges.min) && (enteredValueNum <= ranges.max) && !(enteredValueStr === "")) {
            // Store word count 
            userSelectedData.wordCount = enteredValueNum;
            // Find range that entered value falls in to return rates
            let wordCountPos = rates.findIndex((rate) => {
                return ((enteredValueNum >= rate.min) && (enteredValueNum <= rate.max));
            });
            // Store current pricing
            let currentRate = rates[wordCountPos];
            let currentPricing;
            // If there's a flat rate, $$/word and $$/hour are not included
            // 24 hour will be replaced by # of hours Carl logs 
            currentPricing = (_a = currentRate.flatRate) !== null && _a !== void 0 ? _a : (currentRate.perWord * enteredValueNum) + (currentRate.perHour * 24);
            // Create deadline row
            childElement = createDeadlineRow();
            // Append deadline row to parent
            wordCountRow.appendChild(childElement);
        }
    });
    // Create word count row with row data row
    let wordCountRow = createInputRow(rowData);
    return wordCountRow;
};
function getMinMaxDates(date) {
    // Create new Dates that reflect the current time
    let min = new Date();
    let max = new Date();
    // Add 1 day to current time for min value
    let futureMinDateInMs = date.getTime() + (1 * 24 * 60 * 60 * 1000);
    // Add 547.5 days(1.5 * 365) to current time for 1.5 years from current time as the max time
    let futureMaxDateInMs = date.getTime() + (1.5 * 365 * 24 * 60 * 60 * 1000);
    // Set times of min and max dates
    min.setTime(futureMinDateInMs);
    max.setTime(futureMaxDateInMs);
    // Return values as an object
    return [min, max];
}
function formatDate(currDate) {
    let month = currDate.getMonth() + 1;
    let monthStr = month < 10 ? "0" + month : month.toString();
    let date = currDate.getDate();
    let dateStr = date < 10 ? "0" + date : date.toString();
    return `${currDate.getFullYear()}-${monthStr}-${dateStr}T${currDate.getHours()}:${currDate.getMinutes()}:${currDate.getSeconds()}`;
}
const createDeadlineRow = () => {
    // Create an element of type IRow with default values to create a new row with
    let rowData = {
        header: HEADERS[4],
        content: null
    };
    // Get min and max dates from current time using object destructuring
    let currDate = new Date();
    let [minDate, maxDate] = getMinMaxDates(currDate);
    let ranges = {
        min: formatDate(minDate),
        max: formatDate(maxDate)
    };
    // Create date container with ranges and listener
    let childElement;
    rowData.content = createDeadlineCont(ranges, (event) => {
        // Clear child element to allow for child update if it exists
        ((typeof childElement) !== "undefined") && childElement.remove();
        // Get value entered in by user through datetime-local input
        let enteredDateStr = event.target.value;
        // Date.parse returns integer representing ms sine 
        let enteredDateMs = Date.parse(enteredDateStr);
        // Check if date value is valid based on comparing ms
        if ((enteredDateMs >= minDate.getTime()) && (enteredDateMs <= maxDate.getTime())) {
            // Store value
            userSelectedData.deadline = enteredDateStr;
            // Create child element
            childElement = createContactEmailRow();
            // Append child element to parent
            deadlineRow.appendChild(childElement);
        }
        // Store current date
        userSelectedData.deadline = event.target.value;
    });
    let deadlineRow = createInputRow(rowData);
    return deadlineRow;
};
const createContactEmailRow = () => {
    // Create an element of type IRow with default values to create a new row with
    let rowData = {
        header: HEADERS[5],
        content: null
    };
    rowData.content = createEmailCont();
    // Load emailRow
    let emailRow = createInputRow(rowData);
    return emailRow;
};
export { createLiteratureRow, formatDate };
