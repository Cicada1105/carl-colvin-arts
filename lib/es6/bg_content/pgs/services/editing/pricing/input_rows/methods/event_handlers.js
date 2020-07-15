// Event handlers to be added to input listeners
import { userSelectedData } from '../data/dynamic';
import { getMinMaxDates } from './create';
import { Next, Previous } from '../../shared/methods/update_progress';
function LiteratureTypeHandler(event) {
    //	event path holds HTMLCollection hierarchy of elements, starting at the element that fired the event,
    //	of each parent until the last parent, window, is reached
    //		-path[1] holds the container of the input
    //		-nextElementSibling returns the possible child element
    // Clear child element to allow for child update if it exists
    ((event.path[1].nextElementSibling) !== null) && event.path[1].nextElementSibling.remove();
    // Display next row if current selection is not default option
    if (event.target.value !== "none") {
        // Get indexed location of selected value minus 1 (to remove default value) to get access to child data
        let selectedLitPos = event.target.selectedIndex - 1;
        // Store value -> HTMLCollection of selectedOptions will only hold 
        //	one value as long as 'multiple' attribute is omitted
        userSelectedData.literatureType = event.target.selectedOptions[0].text;
        // Move progress bar
        Next(1);
        // Pass child data of selected literature type to display corresponding genres
        const callbackFunc = this;
        callbackFunc(selectedLitPos);
    }
    else
        Previous(0);
}
function GenreHandler(event) {
    // Clear child element to allow for child update if it exists
    ((event.path[1].nextElementSibling) !== null) && event.path[1].nextElementSibling.remove();
    // Display next row if current selection is not default option
    if (event.target.value !== "none") {
        // Store value -> HTMLCollection of selectedOptions will only hold 
        //	one value as long as 'multiple' attribute is omitted
        userSelectedData.genre = event.target.selectedOptions[0].text;
        // Move progress bar
        Next(2);
        // Create child element only when value is valid
        const callbackFunc = this;
        callbackFunc();
    }
    else
        Previous(1);
}
function EditingHandler(event) {
    // Clear child element to allow for child update if it exists
    ((event.path[1].nextElementSibling) !== null) && event.path[1].nextElementSibling.remove();
    // Display next row if current selection is not default option
    if (event.target.value !== "none") {
        // Get indexed location of selected value minus 1 (to remove default value) to get access to child data
        let selectedEditingTypePos = event.target.selectedIndex - 1;
        // Store value -> HTMLCollection of selectedOptions will only hold 
        //	one value as long as 'multiple' attribute is omitted
        userSelectedData.editingType = event.target.selectedOptions[0].text;
        // Move progress bar
        Next(3);
        const callbackFunc = this;
        callbackFunc(selectedEditingTypePos);
    }
    else
        Previous(2);
}
function WordCountHandler(event) {
    var _a;
    // Clear child element to allow for child update if it exists
    ((event.path[1].nextElementSibling) !== null) && event.path[1].nextElementSibling.remove();
    let enteredValueStr = event.target.value;
    let enteredValueNum = parseInt(enteredValueStr);
    // 'this' is bound to an object containing callback function and rates
    let rates = this.data;
    let callbackFunc = this.callBack;
    // Display next row if current selection is valid
    if ((enteredValueNum >= event.target.min) && (enteredValueNum <= event.target.max) && !(enteredValueStr === "")) {
        // Store word count 
        userSelectedData.wordCount = enteredValueNum;
        // Find range that entered value falls in to return rates
        let wordCountPos = rates.findIndex((rate) => ((enteredValueNum >= rate.min) && (enteredValueNum <= rate.max)));
        // Store current pricing
        let currentRate = rates[wordCountPos];
        let currentPricing;
        // If there's a flat rate, $$/word and $$/hour are not included
        // 24 hour will be replaced by # of hours Carl logs 
        currentPricing = (_a = currentRate.flatRate) !== null && _a !== void 0 ? _a : (currentRate.perWord * enteredValueNum) + (currentRate.perHour * 24);
        // Move progress bar
        Next(4);
        callbackFunc();
    }
    else
        Previous(3);
}
function DeadlineHandler(event) {
    // Clear child element to allow for child update if it exists
    ((event.path[1].nextElementSibling) !== null) && event.path[1].nextElementSibling.remove();
    // Get value entered in by user through datetime-local input
    let enteredDateStr = event.target.value;
    // Date.parse returns integer representing ms sine 
    let enteredDateMs = Date.parse(enteredDateStr);
    let [minDate, maxDate] = getMinMaxDates(new Date());
    // Check if date value is valid based on comparing ms
    if ((enteredDateMs >= minDate.getTime()) && (enteredDateMs <= maxDate.getTime())) {
        // Store value
        userSelectedData.deadline = enteredDateStr;
        // Move progress bar
        Next(5);
        let callbackFunc = this;
        callbackFunc();
    }
    else
        Previous(4);
}
function EmailHandler(event) {
    // Store user email
    userSelectedData.email = event.target.value;
}
export { LiteratureTypeHandler, GenreHandler, EditingHandler, WordCountHandler, DeadlineHandler, EmailHandler };
