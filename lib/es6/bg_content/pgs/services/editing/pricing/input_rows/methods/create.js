// Create methods for the input rows
//	methods
import { createElement, createTextElement } from '../../../../../../../global/methods';
const createInputRow = (rowData) => {
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
    // Append row marker, header and input container to row container
    selectionRow.appendChild(rowMarker);
    selectionRow.appendChild(rowHeader);
    selectionRow.appendChild((rowData.content));
    return selectionRow;
};
const createSelectCont = (options, listener) => {
    // Create container for select element
    let selectCont = createElement({
        className: "selectCont"
    });
    // Create select element
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
    // Append select element to its container
    selectCont.appendChild(select);
    return selectCont;
};
const createNumberCont = (ranges, listener) => {
    // Create container for number input
    const numberCont = createElement({
        className: "numberCont"
    });
    // Create number input element
    const number = createElement({
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
};
/*		Deadline helper methods		*/
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
    let date = currDate.getDate();
    let hours = currDate.getHours();
    let minutes = currDate.getMinutes();
    let seconds = currDate.getSeconds();
    return `${currDate.getFullYear()}-` +
        `${month < 10 ? "0" + month : month.toString()}-` +
        `${date < 10 ? "0" + date : date.toString()}` +
        `T${hours < 10 ? "0" + hours : hours.toString()}:` +
        `${minutes < 10 ? "0" + minutes : minutes.toString()}:` +
        `${seconds < 10 ? "0" + seconds : seconds.toString()}`;
}
function updateTime() {
    let currTime = new Date();
    let [minDateNum, maxDateNum] = getMinMaxDates(currTime);
    return {
        current: formatDate(currTime),
        min: formatDate(minDateNum),
        max: formatDate(maxDateNum)
    };
}
const createDeadlineCont = (listener) => {
    // Create deadline container
    const deadlineCont = createElement({
        className: "deadlineCont"
    });
    // Create date input element 
    const dateElement = createElement({
        element: "input",
        className: "deadlineElement"
    });
    // Set type attribute
    dateElement.setAttribute("type", "datetime-local");
    //		Update value, min and max attributes every second
    setInterval(() => {
        // Update current time, minimum and maximum date values
        let timeConstraints = updateTime();
        // Set value attribute as current time
        dateElement.setAttribute("value", timeConstraints.current);
        // Set min and max attributes
        dateElement.setAttribute("min", timeConstraints.min);
        dateElement.setAttribute("max", timeConstraints.max);
    }, 1000);
    // Add event listener 
    dateElement.addEventListener("change", listener);
    // Append input element to container
    deadlineCont.appendChild(dateElement);
    return deadlineCont;
};
const createEmailCont = (listener) => {
    // Create container for email input 
    const emailCont = createElement({
        className: "emailCont"
    });
    // Create email input element 
    const emailElement = createElement({
        element: "input",
        className: "emailElement"
    });
    // Set type attribute
    emailElement.setAttribute("type", "email");
    // Set required attribute
    emailElement.setAttribute("required", "");
    // Set placeholder attribute
    emailElement.setAttribute("placeholder", "-Enter Email-");
    // Add event listener
    emailElement.addEventListener("change", listener);
    // Append email element to email container
    emailCont.appendChild(emailElement);
    return emailCont;
};
export { createInputRow, createSelectCont, createNumberCont, createDeadlineCont, createEmailCont, getMinMaxDates };
