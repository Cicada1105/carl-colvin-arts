// Imports
//  Global
//  methods
import { createElement, createTextElement } from '../../../global/methods'
// 	Local
//	data
import { formData } from './data'
//  methods
import { loadInputRow, loadButtonInput } from './load_methods'

const loadContactPage = () => {
	// Create container to hold contact form
	let formCont:HTMLDivElement = createElement({idName:"formCont"});

	// Create element for header
	let headerCont:HTMLHeadingElement = createTextElement({element:"h1",text:formData.header});
	// Append header to form container
	formCont.appendChild(headerCont);

	// Create element for each text input
	formData.form.textInput.forEach(input => {
		let formInput:HTMLDivElement = loadInputRow(input);

		// Append input to form container
		formCont.appendChild(formInput);
	});

	// Load select element for Subject input
	let selectInputRow:HTMLDivElement = loadInputRow(formData.form.selectInput);
	// Append select input to form container
	formCont.appendChild(selectInputRow);

	// Load textarea element for Message input
	let textAreaInputRow:HTMLDivElement = loadInputRow(formData.form.textAreaInput);
	// Append text area input to form container
	formCont.appendChild(textAreaInputRow);

	// Create element for submit button
	let submitCont:HTMLDivElement = loadButtonInput(formData.submit);
	// Append submit container to form container
	formCont.appendChild(submitCont);

	document.body.appendChild(formCont);
}

export { loadContactPage }