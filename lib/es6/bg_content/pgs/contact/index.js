// Imports
//  Global
//  methods
import { createElement, createTextElement } from '../../../global/methods';
// 	Local
//	data
import { formData } from './data';
//  methods
import { loadTextInput, loadButtonInput } from './load_methods';
const loadContactPage = () => {
    // Create container to hold contact form
    let formCont = createElement({ idName: "formCont" });
    // Create element for header
    let headerCont = createTextElement({ element: "h1", text: formData.header });
    // Append header to form container
    formCont.appendChild(headerCont);
    // Create element for each text input
    formData.form.forEach(input => {
        let formInput = loadTextInput(input);
        // Append input to form container
        formCont.appendChild(formInput);
    });
    // Create element for submit button
    let submitCont = loadButtonInput(formData.submit);
    // Append submit container to form container
    formCont.appendChild(submitCont);
    document.body.appendChild(formCont);
};
export { loadContactPage };
