/*
    Thist file contains methods for create different user inputs
        and labels for the contact page
*/
//	methods
import { createElement, createTextElement } from '../../../global/methods';
const createLabel = (labelData) => {
    let lbl = createTextElement({
        element: "label",
        text: labelData.text,
        className: "inputLabel"
    });
    lbl.setAttribute("for", labelData.for);
    return lbl;
};
const createTextInput = (textData) => {
    let txtInput = createElement({
        element: "input",
        className: "userInput",
        idName: textData.id
    });
    // Set attribute for type and placeholder
    txtInput.setAttribute("type", textData.type);
    txtInput.setAttribute("placeholder", textData.placeholder);
    // Set autocomplete to off
    txtInput.setAttribute("autocomplete", "off");
    return txtInput;
};
const createSelectInput = (selectData) => {
    let selectInput = createElement({
        element: "select",
        className: "userInput",
        idName: selectData.id
    });
    // Create default option for select input
    let defaultOption = createTextElement({
        element: "option",
        text: "-None-"
    });
    // Set value of default option
    defaultOption.setAttribute("value", "none");
    // Append default option to select input
    selectInput.appendChild(defaultOption);
    // Loop through option groups
    selectData.optionGroups.forEach((group) => {
        let optGroup = document.createElement("optgroup");
        // Append label to opt group to define group
        optGroup.setAttribute("label", group.label);
        // Loop through options in current group and append to optGroup
        group.options.forEach((option) => {
            let opt = createTextElement({
                element: "option",
                text: option.text
            });
            // Append value attribute
            opt.setAttribute("value", option.value);
            // Append to optGroup
            optGroup.appendChild(opt);
        });
        // Append optGroup to select input
        selectInput.appendChild(optGroup);
    });
    return selectInput;
};
const createTextAreaInput = (textAreaData) => {
    let txtAreaInput = createElement({
        element: "textarea",
        className: "userInput",
        idName: textAreaData.id
    });
    // Set attribute for rows and columns
    txtAreaInput.setAttribute("rows", textAreaData.rows);
    txtAreaInput.setAttribute("cols", textAreaData.cols);
    // Set autocomplete to off
    txtAreaInput.setAttribute("autocomplete", "off");
    return txtAreaInput;
};
export { createLabel };
export { createTextInput, createSelectInput, createTextAreaInput };
