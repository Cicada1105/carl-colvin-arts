// Event handlers to be added to input listeners

// Imports
//	Interfaces
//		Local
import { RateInterface as IRate } from '../../../interfaces'
//		Global
import { EmailError, EmailReport } from '../../../../../../../global/interfaces/errors'
//	Data
import { userSelectedData } from '../data/dynamic'
//	Methods
//		Local
import { getMinMaxDates } from './create'
import { Next, Previous } from '../../shared/methods/update_progress'
//		Global
import { isValidEmail } from '../../../../../../../global/methods/utilities'

function LiteratureTypeHandler(event:any):void {
	//	event path holds HTMLCollection hierarchy of elements, starting at the element that fired the event,
	//	of each parent until the last parent, window, is reached
	//		-path[1] holds the container of the input
	//		-nextElementSibling returns the possible child element
	// Clear child element to allow for child update if it exists
	event.path[1].nextElementSibling !== null && <HTMLDivElement>event.path[1].nextElementSibling.remove();
	// Submit row is not included with rest of rows; remove row if displayed
	let submitRowEl:HTMLDivElement = <HTMLDivElement>document.getElementById("submitRow");
	submitRowEl !== null && submitRowEl.remove();

	// Display next row if current selection is not default option
	if (event.target.value !== "none") {
		// Get indexed location of selected value minus 1 (to remove default value) to get access to child data
		let selectedLitPos:number = event.target.selectedIndex - 1;
		// Store value -> HTMLCollection of selectedOptions will only hold 
		//	one value as long as 'multiple' attribute is omitted
		userSelectedData.literatureType = event.target.selectedOptions[0].text;

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
function GenreHandler(event:any) {
	// Clear child element to allow for child update if it exists
	event.path[1].nextElementSibling !== null && <HTMLDivElement>event.path[1].nextElementSibling.remove();
	// Submit row is not included with rest of rows; remove row if displayed
	let submitRowEl:HTMLDivElement = <HTMLDivElement>document.getElementById("submitRow");
	submitRowEl !== null && submitRowEl.remove();

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
function EditingHandler(event:any) {
	// Clear child element to allow for child update if it exists
	event.path[1].nextElementSibling !== null && <HTMLDivElement>event.path[1].nextElementSibling.remove();
	// Submit row is not included with rest of rows; remove row if displayed
	let submitRowEl:HTMLDivElement = <HTMLDivElement>document.getElementById("submitRow");
	submitRowEl !== null && submitRowEl.remove();

	// Display next row if current selection is not default option
	if (event.target.value !== "none") {
		// Get indexed location of selected value minus 1 (to remove default value) to get access to child data
		let selectedEditingTypePos:number = event.target.selectedIndex - 1;
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
function WordCountHandler(event:any) {
	// Clear child element to allow for child update if it exists
	event.path[1].nextElementSibling !== null && <HTMLDivElement>event.path[1].nextElementSibling.remove();
	// Submit row is not included with rest of rows; remove row if displayed
	let submitRowEl:HTMLDivElement = <HTMLDivElement>document.getElementById("submitRow");
	submitRowEl !== null && submitRowEl.remove();

	// Handle entered value if "Enter"/"return" keypress event has been triggered or entered value is not empty
	if (((event.type === "keypress") && (event.charCode === 13)) || event.type === "change") {
		let enteredValueStr:string = event.target.value;
		let enteredValueNum:number = parseInt(enteredValueStr);

		// Display next row if current selection is valid
		if ((enteredValueNum >= event.target.min) && (enteredValueNum <= event.target.max) && !(enteredValueStr === "")) {
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
function DeadlineHandler(event:any) {
	// Clear child element to allow for child update if it exists
	event.path[1].nextElementSibling !== null && <HTMLDivElement>event.path[1].nextElementSibling.remove();
	// Submit row is not included with rest of rows; remove row if displayed
	let submitRowEl:HTMLDivElement = <HTMLDivElement>document.getElementById("submitRow");
	submitRowEl !== null && submitRowEl.remove();

	// Get value entered in by user through datetime-local input
	let enteredDateStr:string = event.target.value;
	// Date.parse returns integer representing ms sine 
	let enteredDateMs:number = Date.parse(enteredDateStr);

	let [minDate, maxDate] = getMinMaxDates(new Date());
	// Check if date value is valid based on comparing ms
	if ((enteredDateMs >= minDate.getTime()) && (enteredDateMs <= maxDate.getTime())) {
		// Store value
		userSelectedData.deadline = enteredDateStr;

		// Blur deadline input to make smoother UX
		event.path[0].blur();

		// Move progress bar
		Next(5);
		
		let callbackFunc = this;
		callbackFunc();
	}
	else 
		Previous(4);
}
async function EmailHandler(event:any) {
	// Clear child element to allow for child update if it exists
	let submitRowEl:HTMLDivElement = <HTMLDivElement>document.getElementById("submitRow");
	submitRowEl !== null && submitRowEl.remove();
	// Entered email
	let emailStr:string = event.target.value;
	// Error message span container
	let errorMsg:HTMLSpanElement = <HTMLSpanElement>event.path[0].nextElementSibling;

	// Check if keyboard input and charCode is enter key: 13
	if (((event.type === "keyup") && (event.keyCode === 13)) || event.type === "change") {

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
function SubmitHandler(event:any) {
	// Store button to be replaced by sending image
	let submitBtn:HTMLInputElement = event.path[0];
	// Store message container to be used to update user
	let msg:HTMLSpanElement = <HTMLSpanElement>submitBtn.nextElementSibling;
	// Store parent in order to replace child element 
	let parent:HTMLDivElement = event.path[1];

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
		sendingImg.setAttribute("src","../../resources/pg_imgs/contact_imgs/sending_envelope.png");
		sendingImg.setAttribute("id","sending_img");

		// Replace button with sending image
		parent.replaceChild(sendingImg, submitBtn);
		// Update message 
		msg.innerHTML = "Sending...";

		// Imitate process of waiting
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