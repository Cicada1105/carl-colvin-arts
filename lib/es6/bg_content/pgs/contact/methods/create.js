/*
    Thist file contains methods for create different user inputs
        and labels for the contact page
*/
//	methods
import { createElement, createTextElement, createSelectElement, createLabelElement } from '../../../../global/methods/elements';
const createInputRow = (rowData) => {
    let cont = createElement({ className: "selectionRow" });
    // Create label element for name to be displayed for input
    let inputLabel = createLabelElement({
        text: rowData.label.text,
        forIn: rowData.label.for
    });
    // Append input text, tag and span to input container
    cont.appendChild(inputLabel);
    cont.appendChild(rowData.content);
    return cont;
};
const createInputCont = (inputEl) => {
    let cont = createElement({
        className: "userInputCont"
    });
    // 		element to be used as an animation for click effect
    let spanAnimation = createElement({ className: "inputAnimation" });
    //		element to display message for incomplete field
    let errorMsg = createTextElement({ text: "*", className: "errorMsg" });
    // Set event listener for input tag focus to active animation
    inputEl.addEventListener("focus", () => {
        spanAnimation.style.animationName = "inputFocus";
    });
    inputEl.addEventListener("blur", () => {
        spanAnimation.style.animationName = "inputUnfocus";
    });
    cont.appendChild(inputEl);
    cont.appendChild(spanAnimation);
    cont.appendChild(errorMsg);
    return cont;
};
const createTextCont = (textData) => {
    let txtInput = createElement({
        element: "input",
        className: "userInput",
        idName: textData.id
    });
    // Set attribute for type and placeholder
    txtInput.setAttribute("type", textData.data.type);
    txtInput.setAttribute("placeholder", textData.data.placeholder);
    // Set autocomplete to off
    txtInput.setAttribute("autocomplete", "off");
    let cont = createInputCont(txtInput);
    return cont;
};
const createSelectCont = (selectData) => {
    let selectInput = createSelectElement({
        options: selectData.data.options,
        className: "userInput",
        idName: selectData.id
    });
    let cont = createInputCont(selectInput);
    return cont;
};
const createTextAreaCont = (textAreaData) => {
    let txtAreaInput = createElement({
        element: "textarea",
        className: "userInput",
        idName: textAreaData.id
    });
    // Set attribute for rows and columns
    txtAreaInput.setAttribute("rows", textAreaData.data.rows);
    txtAreaInput.setAttribute("cols", textAreaData.data.cols);
    // Set autocomplete to off
    txtAreaInput.setAttribute("autocomplete", "off");
    let cont = createInputCont(txtAreaInput);
    return cont;
};
export { createInputRow, createTextCont, createSelectCont, createTextAreaCont };
