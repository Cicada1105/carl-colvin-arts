// Local loading methods to be used by contact page
//  methods
import { createInputRow, createTextCont, createSelectCont, createTextAreaCont } from './create';
import { submitForm } from '../form_submit_methods/submit';
//  Global
//  methods
import { createElement } from '../../../../global/methods/elements';
import { formData } from '../data';
const createRows = () => {
    let rowsCont = createElement({
        idName: "inputRowsCont"
    });
    // Create element for each text input
    formData.form.textInput.forEach((input) => {
        let txtCont = createTextCont({
            id: input.id,
            data: input.data
        });
        let row = createInputRow({
            label: input.label,
            content: txtCont
        });
        // Append input to form container
        rowsCont.appendChild(row);
    });
    // Load select element for Subject input
    let selectCont = createSelectCont({
        id: formData.form.selectInput.id,
        data: formData.form.selectInput.data
    });
    // If directed from service, display subject accordingly
    if (sessionStorage.length === 1) {
        let from = sessionStorage.getItem("from");
        let selectEl = selectCont.firstElementChild;
        switch (from) {
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
    let selectInputRow = createInputRow({
        label: formData.form.selectInput.label,
        content: selectCont
    });
    // Append select row to rowsCont
    rowsCont.appendChild(selectInputRow);
    // Load textarea element for Message input
    let txtAreaCont = createTextAreaCont({
        id: formData.form.textAreaInput.id,
        data: formData.form.textAreaInput.data
    });
    let txtAreaInputRow = createInputRow({
        label: formData.form.textAreaInput.label,
        content: txtAreaCont
    });
    // Append textArea row to rowsCont
    rowsCont.appendChild(txtAreaInputRow);
    // Create element for submit button
    let submitCont = loadButtonInput(formData.submit);
    // Append submit cont to rowsCont
    rowsCont.appendChild(submitCont);
    return rowsCont;
};
const loadButtonInput = (input) => {
    let cont = createElement({ className: "buttonInput", idName: "submitCont" });
    // Create button element for submit button
    let submitBtn = createElement({ element: "input", idName: input.id });
    // Set type attribute
    submitBtn.setAttribute("type", input.type);
    // Add event listener to handle submitting form 
    submitBtn.addEventListener("submit", submitForm);
    /*submitBtn.addEventListener("click",(event:any) => {
        submitForm(event);
    });*/
    // Create container to be used to display messages about the form status
    let msgCont = createElement({ element: "span", idName: "formMessage" });
    // Append message container and submit button to container
    cont.appendChild(submitBtn);
    cont.appendChild(msgCont);
    return cont;
};
export { createRows };
