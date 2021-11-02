/*
	Thist file contains methods for create different user inputs 
		and labels for the contact page
*/

// Imports
import { 
	IText, ISelect, ITextArea, IInputRow,
	GenericInputInterface as IGenericInput
} from "../../../../global/interfaces/inputs"
//	methods
import { 
	createElement, createTextElement, 
	createImageElement, createSelectElement, 
	createLabelElement 
} from '../../../../global/methods/elements'

// Input element types to create generic input container
type InputType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const createInputRow = (rowData:IInputRow):HTMLDivElement => {
	let cont:HTMLDivElement = createElement({className:"selectionRow"});

	// Create label element for name to be displayed for input
	let inputLabel:HTMLLabelElement = createLabelElement({
		text: rowData.label.text,
		forIn: rowData.label.for
	});

	// Append input text, tag and span to input container
	cont.appendChild(inputLabel);
	cont.appendChild(rowData.content);

	return cont;
}
const createInputCont = (inputEl:InputType):HTMLDivElement => {
	let cont:HTMLDivElement = createElement({
		className: "userInputCont"
	});

	// 		element to be used as an animation for click effect
	let spanAnimation:HTMLDivElement = createElement({className:"inputAnimation"});
	//		element to display message for incomplete field
	let errorMsg:HTMLParagraphElement = createTextElement({text:"*", className:"errorMsg"});

	// Set event listener for input tag focus to active animation
	inputEl.addEventListener("focus",() => {
		spanAnimation.style.animationName = "inputFocus";
	});
	inputEl.addEventListener("blur",() => {
		spanAnimation.style.animationName = "inputUnfocus";
	});

	cont.appendChild(inputEl);
	cont.appendChild(spanAnimation);
	cont.appendChild(errorMsg);

	return cont;
}
const createTextCont = (textData:IGenericInput<IText>):HTMLDivElement => {
	let txtInput:HTMLInputElement = createElement({
		element:"input",
		className: "userInput",
		idName: textData.id
	});

	// Set attribute for type and placeholder
	txtInput.setAttribute("type", textData.data.type);
	txtInput.setAttribute("placeholder", textData.data.placeholder);
	// Set autocomplete to off
	txtInput.setAttribute("autocomplete", "off");

	let cont:HTMLDivElement = createInputCont(txtInput);

	return cont;
}

const createSelectCont = (selectData:IGenericInput<ISelect>):HTMLDivElement => {
	let selectInput:HTMLSelectElement = createSelectElement({
		options: selectData.data.options,
		className: "userInput",
		idName: selectData.id
	});

	let cont:HTMLDivElement = createInputCont(selectInput);

	return cont;
}

const createTextAreaCont = (textAreaData:IGenericInput<ITextArea>):HTMLDivElement => {
	let txtAreaInput:HTMLTextAreaElement = createElement({
		element: "textarea",
		className: "userInput",
		idName: textAreaData.id
	});

	// Set attribute for rows and columns
	txtAreaInput.setAttribute("rows", textAreaData.data.rows);
	txtAreaInput.setAttribute("cols", textAreaData.data.cols);
	// Set autocomplete to off
	txtAreaInput.setAttribute("autocomplete", "off");

	let cont:HTMLDivElement = createInputCont(txtAreaInput);

	return cont;
}

export { 
	createInputRow, createTextCont, 
	createSelectCont, createTextAreaCont
}