// Imports
//  Global
//  methods
import { createElement, createTextElement } from '../../../../global/methods/elements'
// 	Local
//	data
import { formData } from '../data'
//  methods
import { createRows } from './rows'
import { submitForm } from '../form_submit_methods/submit'

const loadForm = () => {
	// Create container to hold contact form
	let formCont:HTMLDivElement = createElement({
		element:"form",
		idName:"formCont"
	});
	// Set method as post
	formCont.setAttribute("method", "POST");
	// Prevent default form validation
	formCont.setAttribute("novalidate","");
	formCont.addEventListener("submit",submitForm);

	// Create element for header
	let headerCont:HTMLHeadingElement = createTextElement({element:"h1",text:formData.header});
	// Append header to form container
	formCont.appendChild(headerCont);

	let formContent:HTMLDivElement = createRows();

	// Append form content container to actual form
	formCont.appendChild(formContent);

	document.body.appendChild(formCont);

	// Set screen position to fixed if on contact page (removes unintentional space below)
	document.body.style.position = window.location.pathname.includes("contact") ? "fixed" : "initial";
}

export { loadForm }