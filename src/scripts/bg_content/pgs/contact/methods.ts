// Local methods to be used by contact page

// Imports
// 	Local
// 	interfaces 
import { TextInputInterface as IText, ButtonInputInterface as IButton } from './interfaces'
//  Global
//  methods
import { createElement, createTextElement } from '../../../global/methods'

const loadTextInput = (input:IText):any => {
	let cont:any = createElement({className:"textInput"});

	// Create text element for name to be displayed for input
	let inputText:any = createTextElement({element:"h2",text:input.displayName});

	// Create element for input tag
	let inputTag:any = createElement({element:"input",idName:input.name});
	// Set type attribute
	inputTag.setAttribute('type',input.type);
	// Set placeholder attribute
	inputTag.setAttribute('placeholder',input.placeholder);


	// Append input text and tag to input container
	cont.appendChild(inputText);
	cont.appendChild(inputTag);

	return cont;
}

const loadButtonInput = (input:IButton):any => {
	let cont:any = createElement({idName:"submitCont"});

	// Create container to be used to display messages about the form status
	let msgCont:any = createElement({element:"span",idName:"formMessage"});

	// Create button element for submit button
	let submitBtn:any = createElement({element:"input",idName:input.name});
	// Set type attribute
	submitBtn.setAttribute("type",input.type);
	// Set value attribute
	submitBtn.setAttribute("value",input.value);

	// Append message container and submit button to container
	cont.appendChild(msgCont);
	cont.appendChild(submitBtn);

	return cont;
}

export { loadTextInput, loadButtonInput }