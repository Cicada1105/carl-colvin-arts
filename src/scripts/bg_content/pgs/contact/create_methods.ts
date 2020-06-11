/*
	Thist file contains methods for create different user inputs 
		and labels for the contact page
*/

// Imports
//	interfaces
import { LabelInterface as ILabel } from './interfaces/general_input'
import { 
	TextInputInterface as IText, 
	SelectInputInterface as ISelect, 
	TextAreaInterface as ITextArea,
	OptionGroupInterface as IGroup,
	OptionInterface as IOption
} from "./interfaces/specific_input"
//	methods
import { createElement, createTextElement } from '../../../global/methods'

const createLabel = (labelData:ILabel):HTMLLabelElement => {
	let lbl:HTMLLabelElement = createTextElement({
		element: "label",
		text: labelData.text,
		className: "inputLabel"
	});

	lbl.setAttribute("for", labelData.for);

	return lbl;
}

const createTextInput = (textData:IText):HTMLInputElement => {
	let txtInput:HTMLInputElement = createElement({
		element:"input",
		className: "userInput",
		idName: textData.id
	});

	// Set attribute for type and placeholder
	txtInput.setAttribute("type", textData.type);
	txtInput.setAttribute("placeholder", textData.placeholder);
	// Set autocomplete to off
	txtInput.setAttribute("autocomplete", "off");

	return txtInput;
}

const createSelectInput = (selectData:ISelect):HTMLSelectElement => {
	let selectInput:HTMLSelectElement = createElement({
		element:"select",
		className: "userInput",
		idName: selectData.id
	});

	// Create default option for select input
	let defaultOption:HTMLOptionElement = createTextElement({
		element:"option",
		text: "-None-"
	});
	// Set value of default option
	defaultOption.setAttribute("value","none");
	// Append default option to select input
	selectInput.appendChild(defaultOption);
	
	// Loop through option groups
	selectData.optionGroups.forEach((group:IGroup) => {
		let optGroup:HTMLOptGroupElement = document.createElement("optgroup");

		// Append label to opt group to define group
		optGroup.setAttribute("label", group.label);

		// Loop through options in current group and append to optGroup
		group.options.forEach((option:IOption) => {
			let opt:HTMLOptionElement = createTextElement({
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
}

const createTextAreaInput = (textAreaData:ITextArea):HTMLTextAreaElement => {
	let txtAreaInput:HTMLTextAreaElement = createElement({
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
}


export { createLabel }
export { createTextInput, createSelectInput, createTextAreaInput }