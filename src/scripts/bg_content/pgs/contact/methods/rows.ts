// Local loading methods to be used by contact page

// Imports
// 	Local
// 	interfaces 
import { 
	ITextRow, IButton
} from '../../../../global/interfaces/inputs'
//  methods
import {
	createInputRow,
	createTextCont,
	createSelectCont,
	createTextAreaCont
} from './create'
import { submitForm } from '../form_submit_methods/submit'
//  Global
//  methods
import { createElement, createTextElement } from '../../../../global/methods/elements'
import { formData } from '../data'

const createRows = ():HTMLDivElement => {
	let rowsCont:HTMLDivElement = createElement({
		idName: "inputRowsCont"
	});

	// Create element for each text input
	formData.form.textInput.forEach((input:ITextRow) => {
		let txtCont:HTMLDivElement = createTextCont({
			id: input.id,
			data: input.data
		});

		let row:HTMLDivElement = createInputRow({
			label: input.label,
			content: txtCont
		});

		// Append input to form container
		rowsCont.appendChild(row);
	});

	// Load select element for Subject input
	let selectCont:HTMLDivElement = createSelectCont({
		id: formData.form.selectInput.id,
		data: formData.form.selectInput.data
	});
	// If directed from service, display subject accordingly
	if (sessionStorage.length === 1) {
		let from:string = <string>sessionStorage.getItem("from");
		let selectEl:HTMLSelectElement = <HTMLSelectElement>selectCont.firstElementChild;

		switch(from) {
			case 'reedmaking':
				selectEl.selectedIndex = 3; // Reed Details
			break;
			case 'past':
				selectEl.selectedIndex = 7; // Performance Details
			break;
			case 'present':
				selectEl.selectedIndex = 5; // General info
			break;
			case 'future':
				selectEl.selectedIndex = 6; // Pricing
			break;
			case 'editing':
				selectEl.selectedIndex = 11; // Editing details
			break;
			case 'listen':
				selectEl.selectedIndex = 14; // Specific piece
			break;
		}

		// Clear remove item from session storage 
		sessionStorage.removeItem("from");
	}
	let selectInputRow:HTMLDivElement = createInputRow({
		label: formData.form.selectInput.label,
		content: selectCont
	});
	// Append select row to rowsCont
	rowsCont.appendChild(selectInputRow);

	// Load textarea element for Message input
	let txtAreaCont:HTMLDivElement = createTextAreaCont({
		id: formData.form.textAreaInput.id,
		data: formData.form.textAreaInput.data
	});
	let txtAreaInputRow:HTMLDivElement = createInputRow({
		label: formData.form.textAreaInput.label,
		content: txtAreaCont
	});
	// Append textArea row to rowsCont
	rowsCont.appendChild(txtAreaInputRow);

	// Create element for submit button
	let submitCont:HTMLDivElement = loadButtonInput(formData.submit);
	// Append submit cont to rowsCont
	rowsCont.appendChild(submitCont);

	return rowsCont;
}
const loadButtonInput = (input:IButton):HTMLDivElement => {
	let cont:HTMLDivElement = createElement({className:"buttonInput", idName:"submitCont"});

	// Create button element for submit button
	let submitBtn:HTMLInputElement = createElement({element:"input",idName:input.id});
	// Set type attribute
	submitBtn.setAttribute("type",input.type);

	// Add event listener to handle submitting form 
	submitBtn.addEventListener("submit",submitForm);
	
	// Create container to be used to display messages about the form status
	let msgCont:HTMLSpanElement = createElement({element:"span",idName:"formMessage"});

	// Append message container and submit button to container
	cont.appendChild(submitBtn);
	cont.appendChild(msgCont);

	return cont;
}

export { createRows }