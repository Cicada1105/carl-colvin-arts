// This file is rewsponsible for creating the selections and 
//	maintaing the data associated with each selection
// Imports
//	methods
import { createElement, createTextElement, createLabelElement } from '../../../../../../global/methods';
import { updateChartBody } from '../chart/create';
//	data
import { chartSelectionsData as data } from '../shared/data';
const createSelections = () => {
    // Create container to hold selections
    let selectionsCont = createElement({
        idName: "selectionsCont"
    });
    // Loop through literature types and append to selections container
    data.forEach((litType) => {
        selectionsCont.appendChild(createSelectionSection(litType));
    });
    return selectionsCont;
};
const createSelectionSection = (litType) => {
    // Create container to hold individual selection
    let selectionCont = createElement({
        className: "selectionCont"
    });
    // Create header for section
    let selectionHeader = createTextElement({
        element: "h2",
        text: litType.literatureType,
        className: "selectionHeader"
    });
    // Append header to container
    selectionCont.appendChild(selectionHeader);
    // Loop through editing types of current literature section and append to selection container
    litType.editingTypes.forEach((type) => {
        selectionCont.appendChild(createSelectionRow(type));
    });
    return selectionCont;
};
const createSelectionRow = (editData) => {
    // Create row container to hold editing selection data
    let editingTypeRow = createElement({
        className: "editingTypeRow"
    });
    // Create radio button
    let radioBtn = createElement({
        element: "input",
        idName: editData.id
    });
    // Set type, value and name attributes
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", "editingType");
    // Give first input checked property as default
    (editData.id.localeCompare("standardPoetryEditing") === 0) && radioBtn.setAttribute("checked", "");
    // Add event listener to update table when button is selected 
    radioBtn.addEventListener("input", () => {
        updateChartBody(editData.rates);
    });
    // Create label to be display next to the radio button
    let radioBtnLabel = createLabelElement({
        text: editData.label.text,
        forIn: editData.label.for
    });
    // Create custom radio button
    let customRadioBtn = createRadioBtn();
    // Append radio button and label to row container
    editingTypeRow.appendChild(radioBtn);
    editingTypeRow.appendChild(radioBtnLabel);
    editingTypeRow.appendChild(customRadioBtn);
    return editingTypeRow;
};
const createRadioBtn = () => {
    // Create a container to store the custom radio button components
    let selectionBtnCont = createElement({
        className: "customRadioBtnCont"
    });
    // Create circle to be displayed inside of circle ring outside
    let innerCircle = createElement({
        element: "span",
        className: "innerCircle"
    });
    // Create white slice to rotate around circle
    let rotatingWhitePiece = createElement({
        element: "span",
        className: "rotatingWhitePiece"
    });
    // Create mask for hiding rotating white piece initially 
    let whitePieceMask = createElement({
        element: "span",
        className: "whitePieceMask"
    });
    // Create filler to be displayed once rotating white piece has moved past a specific point
    let whiteFiller = createElement({
        element: "span",
        className: "whiteFiller"
    });
    // Add event listener to mask to clean up transition once it has finished
    whiteFiller.addEventListener("transitionrun", (transEvent) => {
        // Check to see if input has been checked -> if not, make return transition clean
        let selectLabel = selectionBtnCont.previousElementSibling;
        let radioInput = selectLabel.previousElementSibling;
        if (!radioInput.checked) {
            whiteFiller.style.visibility = "hidden";
            whitePieceMask.style.border = "2px solid rgba(222, 87, 87, 1)";
            setTimeout(function () {
                whitePieceMask.style.border = "2px solid rgba(222, 87, 87, 0)";
                whitePieceMask.style.borderTop = "2px solid #de5757";
                whiteFiller.style.visibility = "visible";
            }, 1000);
        }
    });
    /*whiteFiller.addEventListener("transitionend", (transEvent) => {
        if (transEvent.propertyName.localeCompare("border-left-color") === 0) {
            console.log("End of transition for White corner slices");
            console.log(transEvent);
        }
    });*/
    // Append inner circle, white piece, mask and filler to button container
    selectionBtnCont.appendChild(innerCircle);
    selectionBtnCont.appendChild(rotatingWhitePiece);
    selectionBtnCont.appendChild(whitePieceMask);
    selectionBtnCont.appendChild(whiteFiller);
    return selectionBtnCont;
};
export { createSelections };
