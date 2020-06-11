// Local loading methods to be used by contact page

// Imports
// 	Local
// 	interfaces 
import { 
	TextInputInterface as IText, 
	SelectInputInterface as ISelect, 
	TextAreaInterface as ITextArea,
	ButtonInputInterface as IButton 
} from './interfaces/specific_input'
//  methods
import { submitForm } from './form_submit_methods/submit'
import { 
	createLabel, 
	createTextInput as createText,
	createSelectInput as createSelect,
	createTextAreaInput as createTextArea
} from './create_methods'
//  Global
//  methods
import { createElement, createTextElement } from '../../../global/methods'

type InputInterface = IText | ISelect | ITextArea;

const loadInputRow = (input:InputInterface):HTMLDivElement => {
	let cont:HTMLDivElement = createElement({className:"inputRow"});

	// Create label element for name to be displayed for input
	let inputLabel:HTMLLabelElement = createLabel(input.label);

	// Create element for input tag
	let inputCont:HTMLDivElement = loadInputCont(input);

	// Append input text, tag and span to input container
	cont.appendChild(inputLabel);
	cont.appendChild(inputCont);

	return cont;
}

const loadInputCont = (inputData:InputInterface):HTMLDivElement => {
	let cont:HTMLDivElement = createElement({className:"inputCont"});

	// Create children elements of input container
	// 	creaet specific input based on properties
	let inputTag:HTMLElement = (inputData as IText).placeholder ? createText(<IText>inputData) : ((inputData as ITextArea).rows ? createTextArea(<ITextArea>inputData) : createSelect(<ISelect>inputData));
	// 		element to be used as an animation for click effect
	let spanAnimation:HTMLDivElement = createElement({className:"inputAnimation"});
	//		element to display message for incomplete field
	let errorMsg:HTMLParagraphElement = createTextElement({text:"*", className:"errorMsg"});

	// Set event listener for input tag focus to active animation
	inputTag.addEventListener("focus",() => {
		spanAnimation.style.animationName = "inputFocus";
	});
	inputTag.addEventListener("blur",() => {
		spanAnimation.style.animationName = "inputUnfocus";
	});

	cont.appendChild(inputTag);
	cont.appendChild(spanAnimation);
	cont.appendChild(errorMsg);

	return cont;
}

const loadButtonInput = (input:IButton):HTMLDivElement => {
	let cont:HTMLDivElement = createElement({className:"buttonInput", idName:"submitCont"});

	// Create button element for submit button
	let submitBtn:HTMLInputElement = createElement({element:"input",idName:input.id});
	// Set type attribute
	submitBtn.setAttribute("type",input.type);
	// Set value attribute
	submitBtn.setAttribute("value",input.value);

	// Add event listener to handle submitting form 
	submitBtn.addEventListener("click",submitForm);
	
	// Create container to be used to display messages about the form status
	let msgCont:HTMLSpanElement = createElement({element:"span",idName:"formMessage"});

	// Append message container and submit button to container
	cont.appendChild(submitBtn);
	cont.appendChild(msgCont);

	return cont;
}

export { loadInputRow, loadButtonInput }