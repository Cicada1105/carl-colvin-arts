// Event handlers to be added to input listeners

// Imports
//	Interfaces
//		Local
import { RateInterface as IRate } from '../../../interfaces'
//		Global
import { EmailError, EmailReport } from '@global/interfaces/errors'
//	Data
import { userSelectedData } from '../data/dynamic'
//	Methods
//		Local
import { getMinMaxDates } from './create'
import { Next, Previous } from '../../shared/methods/update_progress'
//		Global
import { isValidEmail } from '@global/methods/utilities'

function LiteratureTypeHandler(event:Event):void {
	//	event target holds HTMLCollection hierarchy of elements, starting at the element that fired the event,
	//	of each parent until the last parent, window, is reached
	//		-target holds the input element
	//		-nextElementSibling returns the possible child element
	// Clear child element to allow for child update if it exists
	let selectEl:HTMLSelectElement = event.target as HTMLSelectElement;
	let parentEl:HTMLDivElement = <HTMLDivElement>selectEl.parentElement;
	parentEl.nextElementSibling !== null && (<HTMLDivElement>parentEl.nextElementSibling).remove();
	// Submit row is not included with rest of rows; remove row if displayed
	let submitRowEl:HTMLDivElement = <HTMLDivElement>document.getElementById("submitRow");
	submitRowEl !== null && submitRowEl.remove();

	// Display next row if current selection is not default option
	if (selectEl.value !== "none") {
		// Get indexed location of selected value minus 1 (to remove default value) to get access to child data
		let selectedLitPos:number = selectEl.selectedIndex - 1;
		// Store value -> HTMLCollection of selectedOptions will only hold 
		//	one value as long as 'multiple' attribute is omitted
		userSelectedData.literatureType = selectEl.selectedOptions[0].text;

		// Move progress bar
		Next(1);

		// Pass child data of selected literature type to display corresponding genres
		const callbackFunc = this;
		callbackFunc(selectedLitPos);
		//that.callback(selectedLitPos);
	}
	else 
		Previous(0);
}
function GenreHandler(event:Event) {
	// Clear child element to allow for child update if it exists
	let selectEl:HTMLSelectElement = event.target as HTMLSelectElement;
	let parentEl:HTMLDivElement = <HTMLDivElement>selectEl.parentElement;
	parentEl.nextElementSibling !== null && (<HTMLDivElement>parentEl.nextElementSibling).remove();
	// Submit row is not included with rest of rows; remove row if displayed
	let submitRowEl:HTMLDivElement = <HTMLDivElement>document.getElementById("submitRow");
	submitRowEl !== null && submitRowEl.remove();

	// Display next row if current selection is not default option
	if (selectEl.value !== "none") {
		// Store value -> HTMLCollection of selectedOptions will only hold 
		//	one value as long as 'multiple' attribute is omitted
		userSelectedData.genre = selectEl.selectedOptions[0].text;

		// Move progress bar
		Next(2);

		// Create child element only when value is valid
		const callbackFunc = this;
		callbackFunc();
	}
	else 
		Previous(1);
}
function EditingHandler(event:Event) {
	// Clear child element to allow for child update if it exists
	let selectEl:HTMLSelectElement = event.target as HTMLSelectElement;
	let parentEl:HTMLDivElement = <HTMLDivElement>selectEl.parentElement;
	parentEl.nextElementSibling !== null && (<HTMLDivElement>parentEl.nextElementSibling).remove();
	// Submit row is not included with rest of rows; remove row if displayed
	let submitRowEl:HTMLDivElement = <HTMLDivElement>document.getElementById("submitRow");
	submitRowEl !== null && submitRowEl.remove();

	// Display next row if current selection is not default option
	if (selectEl.value !== "none") {
		// Get indexed location of selected value minus 1 (to remove default value) to get access to child data
		let selectedEditingTypePos:number = selectEl.selectedIndex - 1;
		// Store value -> HTMLCollection of selectedOptions will only hold 
		//	one value as long as 'multiple' attribute is omitted
		userSelectedData.editingType = selectEl.selectedOptions[0].text;

		// Move progress bar
		Next(3);

		const callbackFunc = this;
		callbackFunc(selectedEditingTypePos);
	}
	else 
		Previous(2);
}
function WordCountHandler(event:Event | KeyboardEvent) {
	// Clear child element to allow for child update if it exists
	let inputEl:HTMLInputElement = <HTMLInputElement>event.target;
	let parentEl:HTMLDivElement = <HTMLDivElement>inputEl.parentElement;
	parentEl.nextElementSibling !== null && (<HTMLDivElement>parentEl.nextElementSibling).remove();
	// Submit row is not included with rest of rows; remove row if displayed
	let submitRowEl:HTMLDivElement = <HTMLDivElement>document.getElementById("submitRow");
	submitRowEl !== null && submitRowEl.remove();

	// Handle entered value if "Enter"/"return" keypress event has been triggered or entered value is not empty
	if (
		(event.type === "keypress" && (event as KeyboardEvent)['charCode'] === 13) || 
		event.type === "change"
	) {
		let enteredValueStr:string = inputEl.value;
		let enteredValueNum:number = parseInt(enteredValueStr);
		let inputElMin:number = parseInt(inputEl.min);
		let inputElMax:number = inputEl.max === 'Infinity' ? Infinity : parseInt(inputEl.max);

		// Display next row if current selection is valid
		if ((enteredValueNum >= inputElMin) && (enteredValueNum <= inputElMax) && !(enteredValueStr === "")) {
			// 'this' is bound to an object containing callback function and rates
			let rates:IRate[] = this.data;
			let callbackFunc = this.callBack;
			
			// Store word count 
			userSelectedData.wordCount = enteredValueNum;
			// Find range that entered value falls in to return rates
			let wordCountPos:number = rates.findIndex((rate:IRate) => ((enteredValueNum >= rate.min) && (enteredValueNum <= rate.max)) );

			// Store current pricing
			let currentRate:IRate = rates[wordCountPos];
			// Store pricing to user data
			currentRate.flatRate && (userSelectedData.pricing.flatRate = currentRate.flatRate);
			userSelectedData.pricing.perWord = currentRate.perWord;
			userSelectedData.pricing.perHour = currentRate.perHour;

			// Move progress bar
			Next(4);

			callbackFunc();
		}
		else 
			Previous(3);
	}
}
function DeadlineHandler(event:InputEvent) {
	// Clear child element to allow for child update if it exists
	let dateInputEl:HTMLInputElement = <HTMLInputElement>event.target;
	let parentEl:HTMLDivElement = <HTMLDivElement>dateInputEl.parentElement;
	parentEl.nextElementSibling !== null && (<HTMLDivElement>parentEl.nextElementSibling).remove();
	// Submit row is not included with rest of rows; remove row if displayed
	let submitRowEl:HTMLDivElement = <HTMLDivElement>document.getElementById("submitRow");
	submitRowEl !== null && submitRowEl.remove();

	// Get value entered in by user through datetime-local input
	let enteredDateStr:string = dateInputEl.value;
	// Date.parse returns integer representing ms sine 
	let enteredDateMs:number = Date.parse(enteredDateStr);

	let [minDate, maxDate] = getMinMaxDates(new Date());
	// Check if date value is valid based on comparing ms
	if ((enteredDateMs >= minDate.getTime()) && (enteredDateMs <= maxDate.getTime())) {
		// Store value
		userSelectedData.deadline = enteredDateStr;

		// Blur deadline input to make smoother UX
		dateInputEl.blur();

		// Move progress bar
		Next(5);
		
		let callbackFunc = this;
		callbackFunc();
	}
	else 
		Previous(4);
}
async function EmailHandler(event:Event | KeyboardEvent) {
	// Clear child element to allow for child update if it exists
	let submitRowEl:HTMLDivElement = <HTMLDivElement>document.getElementById("submitRow");
	submitRowEl !== null && submitRowEl.remove();
	// Entered email
	let inputEl:HTMLInputElement = <HTMLInputElement>event.target;
	let emailStr:string = inputEl.value;
	// Error message span container
	let errorMsg:HTMLSpanElement = <HTMLSpanElement>inputEl.nextElementSibling;

	// Check if keyboard input and charCode is enter key: 13
	if (
		(event.type === "keypress" && (event as KeyboardEvent)['charCode'] === 13) || 
		event.type === "change"
	) {

		// Evaluate email field for validation
		if (emailStr === "") {
			errorMsg.innerHTML = "*Required Field";
		}
		else{
			let emailReport:EmailReport = await isValidEmail(emailStr);

			if (emailReport.validEmail) {
				// Clear any previous error message
				errorMsg.innerHTML = "*";
				// Store user email
				userSelectedData.email = emailStr;

				let callbackFunc = this;
				callbackFunc();	
			}
			else {
				let report:EmailError = <EmailError>emailReport.report;
				errorMsg.innerHTML = `*${report.type}`;
			}
		}
	}
}
function SubmitHandler(event:PointerEvent) {
	// Store button to be replaced by sending image
	let submitBtn:HTMLInputElement = <HTMLInputElement>event.target;
	// Store message container to be used to update user
	let msg:HTMLSpanElement = <HTMLSpanElement>submitBtn.nextElementSibling;
	// Store parent in order to replace child element 
	let parent:HTMLDivElement = <HTMLDivElement>submitBtn.parentElement;

	let currentPricing:string;
	// If there's a flat rate, $$/word and $$/hour are not included
	// 24 hour will be replaced by # of hours Carl logs 
	currentPricing = userSelectedData.pricing.flatRate !== 0 ? `$${userSelectedData.pricing.flatRate} flat rate` : ((userSelectedData.pricing.perWord !== 0 ? `$${userSelectedData.pricing.perWord * userSelectedData.wordCount} + ` : ``) + `$${userSelectedData.pricing.perHour}/hour`);

	let pricingStr:string = `Your pricing will be: ${currentPricing}\nDo you wish to continue?\n\n`;
	let formulaStr:string = "*Formula calculated by:\n" +
							"($$/word * # of words) + $$/hour\n" + 
							"-or-\n" + 
							"$$ flat rate";

	if (confirm(pricingStr.concat(formulaStr))) {
		// Create iamge node to replace button
		let sendingImg:HTMLImageElement = document.createElement("img");
		// Set attributes
		sendingImg.setAttribute("src","../../resources/pg_imgs/contact/sending_envelope.png");
		sendingImg.setAttribute("id","sending_img");

		// Replace button with sending image
		parent.replaceChild(sendingImg, submitBtn);
		// Update message 
		msg.innerHTML = "Sending...";

		//Imitate process of waiting
		setTimeout(() => {
			// Notify user that message has been sent
			msg.innerHTML = "Message Sent!";
			// Replace sending image with button
			parent.replaceChild(submitBtn, sendingImg);
		},2000);
		// After a few seconds, return message to original empty state
		setTimeout(() => {
			let callbackFunc = this;
			callbackFunc();
		},5000);
	}
}

export { 
	LiteratureTypeHandler,
	GenreHandler,
	EditingHandler,
	WordCountHandler,
	DeadlineHandler,
	EmailHandler,
	SubmitHandler
}