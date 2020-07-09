// Event handlers to be added to input listeners

import { RateInterface as IRate } from '../interfaces/row_data_interfaces'
import { userSelectedData } from '../data/dynamic'
import { getMinMaxDates } from './create'
import { Next, Previous } from '../../shared/methods/update_progress'

function LiteratureTypeHandler(event:any) {
	//	event path holds HTMLCollection hierarchy of elements, starting at the element that fired the event,
	//	of each parent until the last parent, window, is reached
	//		-path[1] holds the container of the input
	//		-nextElementSibling returns the possible child element
	// Clear child element to allow for child update if it exists
	((event.path[1].nextElementSibling) !== null) && (<HTMLDivElement>event.path[1].nextElementSibling).remove();

	// Display next row if current selection is not default option
	if (event.target.value !== "select") {
		// Get indexed location of selected value minus 1 (to remove default value) to get access to child data
		let selectedLitPos:number = event.target.selectedIndex - 1;
		// Store value -> HTMLCollection of selectedOptions will only hold 
		//	one value as long as 'multiple' attribute is omitted
		userSelectedData.literatureType = event.target.selectedOptions[0].text;

		// Move progress bar
		Next();

		// Pass child data of selected literature type to display corresponding genres
		const callbackFunc = this;
		callbackFunc(selectedLitPos);
	}
	else 
		Previous(0);
}
function GenreHandler(event:any) {
	// Clear child element to allow for child update if it exists
	((event.path[1].nextElementSibling) !== null) && (<HTMLDivElement>event.path[1].nextElementSibling).remove();

	// Display next row if current selection is not default option
	if (event.target.value !== "select") {
		// Store value -> HTMLCollection of selectedOptions will only hold 
		//	one value as long as 'multiple' attribute is omitted
		userSelectedData.genre = event.target.selectedOptions[0].text;

		// Move progress bar
		Next();

		// Create child element only when value is valid
		const callbackFunc = this;
		callbackFunc();
	}
	else 
		Previous(1);
}
function EditingHandler(event:any) {
	// Clear child element to allow for child update if it exists
	((event.path[1].nextElementSibling) !== null) && (<HTMLDivElement>event.path[1].nextElementSibling).remove();

	// Display next row if current selection is not default option
	if (event.target.value !== "select") {
		// Get indexed location of selected value minus 1 (to remove default value) to get access to child data
		let selectedEditingTypePos:number = event.target.selectedIndex - 1;
		// Store value -> HTMLCollection of selectedOptions will only hold 
		//	one value as long as 'multiple' attribute is omitted
		userSelectedData.editingType = event.target.selectedOptions[0].text;

		// Move progress bar
		Next();

		const callbackFunc = this;
		callbackFunc(selectedEditingTypePos);
	}
	else 
		Previous(2);
}
function WordCountHandler(event:any) {
	// Clear child element to allow for child update if it exists
	((event.path[1].nextElementSibling) !== null) && (<HTMLDivElement>event.path[1].nextElementSibling).remove();

	let enteredValueStr:string = event.target.value;
	let enteredValueNum:number = parseInt(enteredValueStr);

	// 'this' is bound to an object containing callback function and rates
	let rates:IRate[] = this.data;
	let callbackFunc = this.callBack;

	// Display next row if current selection is valid
	if ((enteredValueNum >= event.target.min) && (enteredValueNum <= event.target.max) && !(enteredValueStr === "")) {
		// Store word count 
		userSelectedData.wordCount = enteredValueNum;
		// Find range that entered value falls in to return rates
		let wordCountPos:number = rates.findIndex((rate:IRate) => ((enteredValueNum >= rate.min) && (enteredValueNum <= rate.max)) );

		// Store current pricing
		let currentRate:IRate = rates[wordCountPos];
		let currentPricing:number;
		// If there's a flat rate, $$/word and $$/hour are not included
		// 24 hour will be replaced by # of hours Carl logs 
		currentPricing = currentRate.flatRate ?? (currentRate.perWord * enteredValueNum) + (currentRate.perHour * 24);

		// Move progress bar
		Next();

		callbackFunc();
	}
	else 
		Previous(3);
}
function DeadlineHandler(event:any) {
	// Clear child element to allow for child update if it exists
	((event.path[1].nextElementSibling) !== null) && (<HTMLDivElement>event.path[1].nextElementSibling).remove();

	// Get value entered in by user through datetime-local input
	let enteredDateStr:string = event.target.value;
	// Date.parse returns integer representing ms sine 
	let enteredDateMs:number = Date.parse(enteredDateStr);

	let [minDate, maxDate] = getMinMaxDates(new Date());
	// Check if date value is valid based on comparing ms
	if ((enteredDateMs >= minDate.getTime()) && (enteredDateMs <= maxDate.getTime())) {
		// Store value
		userSelectedData.deadline = enteredDateStr;

		// Move progress bar
		Next();
		
		let callbackFunc = this;
		callbackFunc();
	}
	else 
		Previous(4);
}
function EmailHandler(event:any) {
	// Store user email
	userSelectedData.email = event.target.value;
}

export { 
	LiteratureTypeHandler,
	GenreHandler,
	EditingHandler,
	WordCountHandler,
	DeadlineHandler,
	EmailHandler
}