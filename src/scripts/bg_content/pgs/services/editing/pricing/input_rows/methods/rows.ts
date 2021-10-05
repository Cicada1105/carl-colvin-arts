// File to create specific rows

// Imports
//	data
//	   local
//import { literatureRatesSelections as litSelections } from '../data/static'
import { constructEditingData } from './construct'
//	   shared
import { LABELS } from '../../shared/data/static'
//	interfaces
import { 
	IRange, IOption
} from '../../../../../../../global/interfaces/inputs' 
import { 
	LiteratureTypeInterface as ILitType,
	GenresInterface as IGenres,
	EditingTypeInterface as IEditingType
} from '../interfaces/row_data_interfaces'
import { RateInterface as IRate } from '../../../interfaces'
//	methods
//	   local
import { 
	createInputRow, createSelectCont, createNumberCont, 
	createDeadlineCont, createEmailCont, createSubmitCont,
	createSubmitDisclaimerCont
} from './create'
//	   global
import { createElement } from '../../../../../../../global/methods/elements'
//	Event handler
import { LiteratureTypeHandler, GenreHandler, EditingHandler, WordCountHandler, DeadlineHandler, EmailHandler, SubmitHandler } from './event_handlers'

const createLiteratureRow = ():HTMLDivElement => {
	let litOptions:IOption[] = [];

	let litSelections:ILitType[] = constructEditingData();
	// Loop through editingRatesSelections, adding the literature type to rowData
	litSelections.forEach((litSelection:ILitType) => {
		litOptions.push(<IOption>litSelection.literatureType);
	});

	let childElement:HTMLDivElement | null = null;
	// Define "callback" function for event handler once selected value position has been obtained
	const childRowCallback = (childPos:number) => {
		childElement = createGenreRow(<IGenres>(litSelections[childPos].child));
		literatureRow.appendChild(childElement);
	}

	// Create event listener for when specific literature type option is selected
	//	bind callback function in order to pass data back to "parent" function: createLiteratureRow
	// Create select container
	let selectCont:HTMLDivElement = createSelectCont({
		id: "literature",
		data: {
			options: litOptions
		}
	}, LiteratureTypeHandler.bind(childRowCallback));

	// Create literature row with row data
	let literatureRow:HTMLDivElement = createInputRow({
		label: LABELS[0],
		content: selectCont
	});

	return literatureRow;
}
const createGenreRow = (genreData:IGenres):HTMLDivElement => {
	let childElement:HTMLDivElement | null = null;
	// Define "callback" function for event handler once selected value position has been obtained
	const childRowCallback = () => {
		// Pass child data of selected literature type to display corresponding editing types
		//	Store return value as child element
		childElement = createEditingRow(<IEditingType[]>(genreData.child));
		// Append childElement to parent element
		genreRow.appendChild(childElement);
	}
	// Create select container 
	let genreCont:HTMLDivElement = createSelectCont({
		id: "genre",
		data: {
			options: <IOption[]>genreData.genres
		}
	}, GenreHandler.bind(childRowCallback));

	// Create genre row with row data and event handler
	let genreRow:HTMLDivElement = createInputRow({
		label: LABELS[1],
		content: genreCont
	});

	return genreRow;
}
const createEditingRow = (editingData:IEditingType[]):HTMLDivElement => {
	let editingOptions:IOption[] = [];
	
	// Loop through editing types, adding each one to the row data
	editingData.forEach((type:IEditingType) => {
		editingOptions.push(type.editingType);
	});

	let childElement:HTMLDivElement | null = null;
	// Define "callback" function for event handler once selected value position has been obtained
	const childRowCallback = (childPos:number) => {
		// Pass child data of selected literature type to display corresponding genres 
		//	Store return value as child element
		childElement = createWordCountRow(<IRate[]>(editingData[childPos].child.rates));
		// Append childElement to parent element
		editingTypeRow.appendChild(childElement);
		// Place focus on word count input
		let wordCountCont:HTMLDivElement = <HTMLDivElement>childElement.lastElementChild;
		let wordCountInput:HTMLInputElement = <HTMLInputElement>wordCountCont.firstElementChild;
		wordCountInput.focus();
	}
	// Create event listener for when specific editing type option is selected
	// Create select container
	let editingCont:HTMLDivElement = createSelectCont({
		id: "editing",
		data: {
			options: editingOptions
		}
	}, EditingHandler.bind(childRowCallback));

	// Create editing type row with row data and event handler
	let editingTypeRow:HTMLDivElement = createInputRow({
		label: LABELS[2],
		content: editingCont
	});

	return editingTypeRow;
}
const createWordCountRow = (rates:IRate[]):HTMLDivElement => {
	// Loop through rates, finding lowest value and highest value to determine range
	let ranges:IRange = {
		min: 0,
		max: 0
	}
	rates.forEach((rate:IRate) => {
		(rate.min < ranges.min) && (ranges.min = rate.min);
		(rate.max > ranges.max) && (ranges.max = rate.max);
	});

	const childRowCallback = () => {
		// Create deadline row
		//	Store return value as child element
		let childElement:HTMLDivElement = createDeadlineRow();
		// Append deadline row to parent
		wordCountRow.appendChild(childElement);
		// Focus on deadline input
		let deadlineCont:HTMLDivElement = <HTMLDivElement>childElement.lastElementChild;
		let deadlineInput:HTMLInputElement = <HTMLInputElement>deadlineCont.firstElementChild;
		deadlineInput.focus();
	}
	// Create word count container with ranges and handler
	let wordCountCont:HTMLDivElement = createNumberCont({
		id: "count",
		data: {
			min: ranges.min,
			max: ranges.max
		}
	}, WordCountHandler.bind({
		callBack: childRowCallback,
		data: rates
	}));

	// Create word count row with row data row
	let wordCountRow:HTMLDivElement = createInputRow({
		label: LABELS[3],
		content: wordCountCont
	});

	return wordCountRow;
}
const createDeadlineRow = ():HTMLDivElement => {
	const childRowCallback = () => {
		// Create child element
		let childElement:HTMLDivElement = createContactEmailRow();
		// Append child element to parent
		deadlineRow.appendChild(childElement);	
		// Focus on email input
		let emailInputCont:HTMLDivElement = <HTMLDivElement>childElement.lastElementChild;
		let emailInput:HTMLInputElement = <HTMLInputElement>emailInputCont.firstElementChild;
		emailInput.focus();
	}
	// Create date container with listener
	let deadlineCont:HTMLDivElement = createDeadlineCont({
		id: "deadline",
		data: null
	},DeadlineHandler.bind(childRowCallback));

	let deadlineRow:HTMLDivElement = createInputRow({
		label: LABELS[4],
		content: deadlineCont
	});

	return deadlineRow;
}
const createContactEmailRow = ():HTMLDivElement => {
	const childRowCallback = () => {
		// Button submit element container
		let submitCont:HTMLDivElement = createSubmitRow();
		// Append discalimer element after input rows container
		let inputRowsForm:HTMLDivElement = <HTMLDivElement>document.getElementById("inputRowsCont");
		inputRowsForm.insertAdjacentElement("afterend",submitCont);
		// Focus on submit button
		let submitInputCont:HTMLDivElement = <HTMLDivElement>submitCont.firstElementChild;
		let submitBtn:HTMLInputElement = <HTMLInputElement>submitInputCont.firstElementChild;
		submitBtn.focus();
	}

	let emailCont:HTMLDivElement = createEmailCont({
		id: "email",
		data: null
	},EmailHandler.bind(childRowCallback));

	// Load emailRow
	let emailRow:HTMLDivElement = createInputRow({
		label: LABELS[5],
		content: emailCont
	});

	return emailRow;
}
const createSubmitRow = ():HTMLDivElement => {
	const childRowCallback = () => {
		// Clear form and return to beginning
		let litInput:HTMLSelectElement = <HTMLSelectElement>document.getElementById("literature");
		let changeEvent = new Event("change");
		litInput.value = "none";
		litInput.dispatchEvent(changeEvent);
	}

	// Create container row for submit container
	let submitRow:HTMLDivElement = createElement({
		idName: "submitRow"
	});

	let submitCont:HTMLDivElement = createSubmitCont(SubmitHandler.bind(childRowCallback));
	let submitDisclaimer:HTMLDivElement = createSubmitDisclaimerCont();

	submitRow.appendChild(submitCont);
	submitRow.appendChild(submitDisclaimer);

	return submitRow;
}

export { createLiteratureRow }