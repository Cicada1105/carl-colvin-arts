// Imports
//  Global
//  methods
import { createElement, createTextElement } from '../../../global/methods'
// 	Local
//	data
import { formData } from './data'
// 	interfaces
import { IForm } from './interfaces'
//  methods
import { loadInputRow, loadButtonInput } from './load_methods'

const loadContactPage = () => {
	// Create container to hold contact form
	let formCont:any = createElement({idName:"formCont"});

	// Create element for header
	let headerCont:any = createTextElement({element:"h1",text:formData.header});
	// Append header to form container
	formCont.appendChild(headerCont);

	// Create element for each text input
	formData.form.forEach(input => {
		let formInput:any = loadInputRow(input);

		// Append input to form container
		formCont.appendChild(formInput);
	});

	// Create element for submit button
	let submitCont:any = loadButtonInput(formData.submit);
	// Append submit container to form container
	formCont.appendChild(submitCont);

	document.body.appendChild(formCont);
}

export { loadContactPage }