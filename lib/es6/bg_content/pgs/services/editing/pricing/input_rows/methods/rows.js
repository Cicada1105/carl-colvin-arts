// File to create specific rows
// Imports
//	data
//	   local
import { literatureRatesSelections as litSelections } from '../data/static';
//	   shared
import { LABELS } from '../../shared/data/static';
//	methods
//	   local
import { createInputRow, createSelectCont, createNumberCont, createDeadlineCont, createEmailCont, createSubmitCont, createSubmitDisclaimerCont } from './create';
//	   global
import { createElement } from '../../../../../../../global/methods';
//	Event handler
import { LiteratureTypeHandler, GenreHandler, EditingHandler, WordCountHandler, DeadlineHandler, EmailHandler, SubmitHandler } from './event_handlers';
const createLiteratureRow = () => {
    let litOptions = [];
    // Loop through editingRatesSelections, adding the literature type to rowData
    litSelections.forEach((litSelection) => {
        litOptions.push(litSelection.literatureType);
    });
    let childElement = null;
    // Define "callback" function for event handler once selected value position has been obtained
    const childRowCallback = (childPos) => {
        childElement = createGenreRow((litSelections[childPos].child));
        literatureRow.appendChild(childElement);
    };
    // Create event listener for when specific literature type option is selected
    //	bind callback function in order to pass data back to "parent" function: createLiteratureRow
    // Create select container
    let selectCont = createSelectCont({
        id: "literature",
        data: {
            options: litOptions
        }
    }, LiteratureTypeHandler.bind(childRowCallback));
    // Create literature row with row data
    let literatureRow = createInputRow({
        label: LABELS[0],
        content: selectCont
    });
    return literatureRow;
};
const createGenreRow = (genreData) => {
    let childElement = null;
    // Define "callback" function for event handler once selected value position has been obtained
    const childRowCallback = () => {
        // Pass child data of selected literature type to display corresponding editing types
        //	Store return value as child element
        childElement = createEditingRow((genreData.child));
        // Append childElement to parent element
        genreRow.appendChild(childElement);
    };
    // Create select container 
    let genreCont = createSelectCont({
        id: "genre",
        data: {
            options: genreData.genres
        }
    }, GenreHandler.bind(childRowCallback));
    // Create genre row with row data and event handler
    let genreRow = createInputRow({
        label: LABELS[1],
        content: genreCont
    });
    return genreRow;
};
const createEditingRow = (editingData) => {
    let editingOptions = [];
    // Loop through editing types, adding each one to the row data
    editingData.forEach((type) => {
        editingOptions.push(type.editingType);
    });
    let childElement = null;
    // Define "callback" function for event handler once selected value position has been obtained
    const childRowCallback = (childPos) => {
        // Pass child data of selected literature type to display corresponding genres 
        //	Store return value as child element
        childElement = createWordCountRow((editingData[childPos].child.rates));
        // Append childElement to parent element
        editingTypeRow.appendChild(childElement);
    };
    // Create event listener for when specific editing type option is selected
    // Create select container
    let editingCont = createSelectCont({
        id: "editing",
        data: {
            options: editingOptions
        }
    }, EditingHandler.bind(childRowCallback));
    // Create editing type row with row data and event handler
    let editingTypeRow = createInputRow({
        label: LABELS[2],
        content: editingCont
    });
    return editingTypeRow;
};
const createWordCountRow = (rates) => {
    // Loop through rates, finding lowest value and highest value to determine range
    let ranges = {
        min: 0,
        max: 0
    };
    rates.forEach((rate) => {
        (rate.min < ranges.min) && (ranges.min = rate.min);
        (rate.max > ranges.max) && (ranges.max = rate.max);
    });
    const childRowCallback = () => {
        // Create deadline row
        //	Store return value as child element
        let childElement = createDeadlineRow();
        // Append deadline row to parent
        wordCountRow.appendChild(childElement);
    };
    // Create word count container with ranges and handler
    let wordCountCont = createNumberCont({
        id: "count",
        data: {
            min: ranges.min,
            max: ranges.max
        }
    }, WordCountHandler.bind({
        callBack: childRowCallback,
        data: rates
    }));
    // Create word count row with row data row
    let wordCountRow = createInputRow({
        label: LABELS[3],
        content: wordCountCont
    });
    return wordCountRow;
};
const createDeadlineRow = () => {
    const childRowCallback = () => {
        // Create child element
        let childElement = createContactEmailRow();
        // Append child element to parent
        deadlineRow.appendChild(childElement);
        // Focus on email input
        let emailInputCont = childElement.lastElementChild;
        let emailInput = emailInputCont.firstElementChild;
        emailInput.focus();
    };
    // Create date container with listener
    let deadlineCont = createDeadlineCont({
        id: "deadline",
        data: null
    }, DeadlineHandler.bind(childRowCallback));
    let deadlineRow = createInputRow({
        label: LABELS[4],
        content: deadlineCont
    });
    return deadlineRow;
};
const createContactEmailRow = () => {
    const childRowCallback = () => {
        // Button child element 
        let childElement = createSubmitRow();
        // Append child element to parent
        emailRow.appendChild(childElement);
        // Focus on submit button
        let submitInputCont = childElement.lastElementChild;
        let submitBtn = submitInputCont.firstElementChild;
        submitBtn.focus();
    };
    let emailCont = createEmailCont({
        id: "email",
        data: null
    }, EmailHandler.bind(childRowCallback));
    // Load emailRow
    let emailRow = createInputRow({
        label: LABELS[5],
        content: emailCont
    });
    return emailRow;
};
const createSubmitRow = () => {
    const childRowCallback = () => {
        // Clear form and return to beginning
        let litInput = document.getElementById("literature");
        let changeEvent = new Event("change");
        litInput.value = "none";
        litInput.dispatchEvent(changeEvent);
    };
    // Create container row for submit container
    let submitRow = createElement({
        className: "submitRow"
    });
    let submitCont = createSubmitCont(SubmitHandler.bind(childRowCallback));
    let submitDisclaimer = createSubmitDisclaimerCont();
    submitRow.appendChild(submitCont);
    submitRow.appendChild(submitDisclaimer);
    return submitRow;
};
export { createLiteratureRow };
