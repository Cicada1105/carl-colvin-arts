// This file is rewsponsible for creating the selections and 
//	maintaing the data associated with each selection

// Imports
//	methods
import { createElement, createTextElement, createLabelElement } from '@global/methods/elements'
import { updateChartBody } from '../chart/create'
//	data
import { chartSelectionsData as data } from '../shared/data'
//	interfaces
import { LiteratureTypeInterface as ILit, EditingTypeInterface as IEdit } from '../shared/interfaces'

const createSelections = ():HTMLDivElement => {
	// Create container to hold selections
	let selectionsCont:HTMLDivElement = createElement({
		idName: "selectionsCont"
	});

	// Loop through literature types and append to selections container
	data.forEach((litType:ILit) => {
		selectionsCont.appendChild(createSelectionSection(litType));
	});

	return selectionsCont;
}
const createSelectionSection = (litType:ILit):HTMLDivElement => {
	// Create container to hold individual selection
	let selectionCont:HTMLDivElement = createElement({
		className: "selectionCont"
	});

	// Create header for section
	let selectionHeader:HTMLHeadingElement = createTextElement({
		element: "h3",
		text: litType.literatureType,
		className: "selectionHeader"
	});
	// Append header to container
	selectionCont.appendChild(selectionHeader);

	// Loop through editing types of current literature section and append to selection container
	litType.editingTypes.forEach((type:IEdit) => {
		selectionCont.appendChild(createSelectionRow(type));
	});

	return selectionCont;
}
const createSelectionRow = (editData: IEdit):HTMLDivElement => {
	// Create row container to hold editing selection data
	let editingTypeRow:HTMLDivElement = createElement({
		className: "editingTypeRow"
	});

	// Create radio button
	let radioBtn:HTMLInputElement = createElement({
		element: "input",
		idName: editData.id
	});
	// Set type, value and name attributes
	radioBtn.setAttribute("type","radio");
	radioBtn.setAttribute("name", "editingType");
	// Give first input checked property as default
	(editData.id.localeCompare("standardPoetryEditing") === 0) && radioBtn.setAttribute("checked","");

	// Add event listener to update table when button is selected 
	radioBtn.addEventListener("input",() => {
		updateChartBody(editData.rates);
	});

	// Create label to be display next to the radio button
	let { text, forIn } = editData['label'];
	let radioBtnLabel:HTMLLabelElement = createLabelElement({
		text,
		forIn
	});

	// Create custom radio button
	let customRadioBtn:SVGElement = createRadioBtn();

	// Append radio button and label to row container
	editingTypeRow.appendChild(radioBtn);
	editingTypeRow.appendChild(radioBtnLabel);
	editingTypeRow.appendChild(customRadioBtn);

	return editingTypeRow;
}
const createRadioBtn = ():SVGElement => {
	let svg:SVGElement = <SVGElement>document.createElementNS("http://www.w3.org/2000/svg","svg");

	// Set viewbox
	svg.setAttribute('viewBox','0 0 50 50');
	svg.setAttribute('class','customRadioBtn');

	// Created red outter circle
	let redCircle:SVGCircleElement = <SVGCircleElement>document.createElementNS('http://www.w3.org/2000/svg','circle');
	// Add respective attriubtes
	redCircle.setAttribute('cx','25');
	redCircle.setAttribute('cy','25');
	redCircle.setAttribute('r','23');
	redCircle.setAttribute('fill','none');
	redCircle.setAttribute('stroke','#de5757');
	redCircle.setAttribute('stroke-width','4')
	redCircle.setAttribute('stroke-dasharray','145');

	// Create white outter circle that will be the animated circle
	let whiteOutterCircle:SVGCircleElement = <SVGCircleElement>document.createElementNS('http://www.w3.org/2000/svg','circle');
	// Add respective attributes
	whiteOutterCircle.setAttribute('class','whiteOutterCircle')
	whiteOutterCircle.setAttribute('cx','25');
	whiteOutterCircle.setAttribute('cy','25');
	whiteOutterCircle.setAttribute('r','23');
	whiteOutterCircle.setAttribute('fill','none');
	whiteOutterCircle.setAttribute('stroke','white');
	whiteOutterCircle.setAttribute('stroke-width','4')
	whiteOutterCircle.setAttribute('stroke-dasharray','0 145');

	// Create white inner circle that will be the "filled in" part
	let whiteInnerCircle:SVGCircleElement = <SVGCircleElement>document.createElementNS('http://www.w3.org/2000/svg','circle');
	// Add respective attributes
	whiteInnerCircle.setAttribute('class','whiteInnerCircle')
	whiteInnerCircle.setAttribute('cx','25');
	whiteInnerCircle.setAttribute('cy','25');
	whiteInnerCircle.setAttribute('r','12');
	whiteInnerCircle.setAttribute('fill','none');

	svg.appendChild(redCircle);
	svg.appendChild(whiteOutterCircle);
	svg.appendChild(whiteInnerCircle);

	return svg;
}

export { createSelections }