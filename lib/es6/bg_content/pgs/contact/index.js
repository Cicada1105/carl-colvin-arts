// Imports
//  Global
//  methods
import { createElement, createTextElement } from '../../../global/methods';
// 	Local
//	data
import { formData } from './data';
//  methods
import { loadInputRow, loadButtonInput } from './load_methods';
import { submitForm } from './form_submit_methods/submit';
const loadContactPage = () => {
    // Create container to hold contact form
    let formCont = createElement({
        element: "form",
        idName: "formCont"
    });
    // Set method as post
    formCont.setAttribute("method", "POST");
    formCont.addEventListener("submit", submitForm);
    // Create element for header
    let headerCont = createTextElement({ element: "h1", text: formData.header });
    // Append header to form container
    formCont.appendChild(headerCont);
    // Create element for each text input
    formData.form.textInput.forEach(input => {
        let formInput = loadInputRow(input);
        // Append input to form container
        formCont.appendChild(formInput);
    });
    // Load select element for Subject input
    let selectInputRow = loadInputRow(formData.form.selectInput);
    // Load textarea element for Message input
    let textAreaInputRow = loadInputRow(formData.form.textAreaInput);
    // Create element for submit button
    let submitCont = loadButtonInput(formData.submit);
    // Append select input to form container
    formCont.appendChild(selectInputRow);
    // Append text area input to form container
    formCont.appendChild(textAreaInputRow);
    // Append submit container to form container
    formCont.appendChild(submitCont);
    document.body.appendChild(formCont);
    // Set screen position to fixed if on contact page (removes unintentional space below)
    document.body.style.position = window.location.pathname.includes("contact") ? "fixed" : "initial";
};
export { loadContactPage };
