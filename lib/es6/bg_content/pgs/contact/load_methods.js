// Local methods to be used by contact page
//  methods
import { submitForm } from './special_methods';
//  Global
//  methods
import { createElement, createTextElement } from '../../../global/methods';
const loadTextInput = (input) => {
    let cont = createElement({ className: "textInput" });
    // Create text element for name to be displayed for input
    let inputText = createTextElement({ element: "h2", text: input.displayName });
    // Create element for input tag
    let inputTag = createElement({ element: "input", idName: input.name });
    // Set type attribute
    inputTag.setAttribute('type', input.type);
    // Set placeholder attribute
    inputTag.setAttribute('placeholder', input.placeholder);
    // Set autocomplete to prevent browser from offering suggestions
    inputTag.setAttribute('autocomplete', 'off');
    // Create span element to be used as an animation for click effect
    let spanAnimation = createElement({ element: "div", className: "inputAnimation" });
    // Set event listener for input tag focus to active animation
    inputTag.addEventListener("focus", () => {
        spanAnimation.style.animationName = "inputFocus";
    });
    inputTag.addEventListener("blur", () => {
        spanAnimation.style.animationName = "inputUnfocus";
    });
    // Append input text, tag and span to input container
    cont.appendChild(inputText);
    cont.appendChild(spanAnimation);
    cont.appendChild(inputTag);
    return cont;
};
const loadButtonInput = (input) => {
    let cont = createElement({ className: "buttonInput", idName: "submitCont" });
    // Create button element for submit button
    let submitBtn = createElement({ element: "input", idName: input.name });
    // Set type attribute
    submitBtn.setAttribute("type", input.type);
    // Set value attribute
    submitBtn.setAttribute("value", input.value);
    // Add event listener to handle submitting form 
    submitBtn.addEventListener("click", submitForm);
    // Create container to be used to display messages about the form status
    let msgCont = createElement({ element: "span", idName: "formMessage" });
    // Append message container and submit button to container
    cont.appendChild(submitBtn);
    cont.appendChild(msgCont);
    return cont;
};
export { loadTextInput, loadButtonInput };
