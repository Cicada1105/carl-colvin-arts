// These will hold a majority of the methods used to display
// 	content for the reedmaking page

// Imports
//	interfaces
import type { 
	ReedInterface, ReedPreview, 
	ReedPriceType, PricingType,
	FixedPricingInterface, VariablePricingInterface,
	CategoryInterface
} from '../interfaces';
import type { IBox, IImage } from '../../../../../global/interfaces/general';
import { CartAction, CustomEventProps, AddReedInterface } from '../../../../../global/interfaces/cart'
import type { ISelectRow, ISelect, IOption } from '../../../../../global/interfaces/inputs';
//	methods
import { 
	createElement, createTextElement, 
	createImageElement, createLabelElement,
	createSelectElement
} from '../../../../../global/methods/elements'
import { createIntroHeader } from './utilities';

const IMG_PATH:string = "../../../resources/pg_imgs/reedmaking_imgs/";

/************************************/
/*		Header Text and Content 	*/
/************************************/
const createHeaderContent = (data:IBox<string>):HTMLDivElement => {
	let cont:HTMLDivElement = document.createElement("div");

	// Create article to semantically define individual header section
	let article:HTMLElement = document.createElement("article");

	// Create title header
	let header:HTMLElement = createIntroHeader(data["header"]);
	// Create paragraph containing description
	let description:HTMLParagraphElement = createTextElement({
		text:data["content"]
	});

	// Append header and description to header article
	article.appendChild(header);
	article.appendChild(description);
	// Append article to header container
	cont.appendChild(article);

	// return container
	return cont;
}

/************************************/
/*		Reed Pricings Container 	*/
/************************************/

// Method will take in a ReedPricing Object and will return 
// 	a container to display to the webpage
const createReedPriceBox = (reedData:ReedInterface):HTMLElement => {
	let reedDisplayCont:HTMLElement = createElement({element:'article',className:'priceListingWrapper'});

	// Create a paragraph tag for the price
	let reedCost:number | null = (reedData['pricing'] as FixedPricingInterface).flatRate;
	let displayPrice:string = '';
	let btnText:string = 'View';
	
	if ( !reedCost ) {
		let priceOptions: PricingType[] = (reedData['pricing'] as VariablePricingInterface).rates;

		let min = priceOptions[0]['cost'], max = 0;
		priceOptions.forEach( (rate: PricingType) => {
			min = Math.min(min, rate['cost']);
			max = Math.max(max, rate['cost']);
		});

		displayPrice = `$${min} - $${max}`;
	}
	else if ( typeof reedCost === 'number' ) {
		displayPrice = `$${reedCost}`;
	}

	let reedPreviewData:ReedPreview = {
		name: reedData['name'],
		description: reedData['description'],
		image: reedData['image'],
		displayPrice
	};
	let reedPreview:HTMLElement = createReedPreview(reedPreviewData);

	// Create button for viewing popup
	let reedPriceBtn:HTMLButtonElement = createTextElement({ text: btnText, element: 'button', className: 'reedBtn' });

	// Display dialog box when user clicks button
	reedPriceBtn.addEventListener("click", () => createDescriptionModal(reedData));

	// Append blend and text to container
	reedDisplayCont.appendChild(reedPreview);
	reedDisplayCont.appendChild(reedPriceBtn);

	// Return name container that holds the description and pricing children
	return reedDisplayCont;
}

const createReedPreview = (preview: ReedPreview):HTMLElement => {
	let reedFigure:HTMLElement = createElement({element: "figure", className: "reedFigure"});

	let reedImg:HTMLImageElement;
	// Check if image is provided with current reed data
	if (preview['image'] ) {
		let reedImage: IImage = preview['image'];
		// Load image
		reedImg = createImageElement({src:reedImage['path'],alt:reedImage['alt']});
	}
	else {
		reedImg = createImageElement({src: "../../resources/global_imgs/background/reedmaking_bg.jpeg", alt: preview['name']});
	}

	// Create a figure caption
	let reedCaption:HTMLElement = createElement({
		element: "figcaption",
		className: "reedCaption"
	});

	// Create text elements for the name and price display
	let reedName:HTMLHeadingElement = createTextElement({
		element: 'h3',
		text: preview['name']
	});
	let reedPriceDisplay:HTMLParagraphElement = createTextElement({
		text: preview['displayPrice']
	})

	// Append text elements to figcaption
	reedCaption.appendChild(reedName);
	reedCaption.appendChild(reedPriceDisplay);

	// Append Reed Image and caption to figure
	reedFigure.appendChild(reedImg);
	reedFigure.appendChild(reedCaption);

	return reedFigure;
}

// Method will take in a reed name and description and display a modal
const createDescriptionModal = (reedData:ReedInterface):void => {
	// Retrieve dialog containing form
	const dialogBox:HTMLDialogElement = document.getElementsByTagName('dialog')[0];
	// Retrieve form within the dialog
	const form:HTMLFormElement = dialogBox.getElementsByTagName('form')[0];
	// Retrieve title, title input field and content to display current reed data
	const title:HTMLHeadingElement = form.getElementsByTagName('h4')[0];
	const titleField:HTMLInputElement = <HTMLInputElement>document.getElementById('reedName');
	const content:HTMLDivElement = <HTMLDivElement>form.getElementsByClassName('content')[0];

/*
	let test:ISelectRow[] = [];

	if ( 'options' in reedData ) {
		reedData?.options.forEach((reedOption: ReedOptionInterface) => {
			let idName:string = reedOption['optionName'].split(' ').map( el => el.toLowerCase() ).join('_');
			let selectOptions:ISelect = {
				options: reedOption['options'].map((option:string) => ({
					display: option,
					value: option
				}))
			}

			let selectRowData:ISelectRow = {
				id: idName,
				data: selectOptions,
				label: {
					text: reedOption['optionName'],
					for: idName
				}
			}

			test.push(selectRowData);
		});
		console.log(test);
	}
*/
	title.textContent = reedData['name'];

	titleField.setAttribute('value',reedData['name']);

	if( (reedData['pricing'] as VariablePricingInterface).rates ) {
		let varPricing: VariablePricingInterface = reedData['pricing'] as VariablePricingInterface;
		let optionRow:HTMLDivElement = createElement({ className: 'reedPopupRow' });

		let idName:string = varPricing['name'].toLowerCase().split(' ').join('-');
		let label:HTMLLabelElement = createLabelElement({
			text: varPricing.name,
			forIn: idName
		});

		let select:HTMLSelectElement = createSelectElement({
			idName,
			options: varPricing['rates'].map(( rate: PricingType ) => ({
				display: rate['name'],
				value: rate['cost']
			}))
		});

		select.setAttribute('name','cost');

		optionRow.appendChild(label);
		optionRow.appendChild(select);

		content.appendChild(optionRow);
	}
	else {
		let staticPricing: FixedPricingInterface = reedData['pricing'] as FixedPricingInterface;
		let hiddenInput:HTMLInputElement = document.createElement('input');

		let fixedPriceCont:HTMLDivElement = createElement({ className: 'reedPopupRow' });
		let fixedPriceLabel:HTMLParagraphElement = createTextElement({ text: 'Pricing' });
		let fixedPriceText:HTMLParagraphElement = createTextElement({ text: `$${staticPricing.flatRate}` });

		fixedPriceCont.appendChild(fixedPriceLabel);
		fixedPriceCont.appendChild(fixedPriceText);

		hiddenInput.setAttribute('name','cost');
		hiddenInput.setAttribute('type','hidden');
		hiddenInput.setAttribute('value',staticPricing['flatRate'].toString())

		content.appendChild(fixedPriceCont);
		content.appendChild(hiddenInput);
	}

	if (reedData['categories']) {
		// Add categories as an input row
		reedData['categories'].forEach(( category: CategoryInterface ) => {
			let optionRow:HTMLDivElement = createElement({ className: 'reedPopupRow' });

			let idName:string = category['name'].toLowerCase().split(' ').join('-');
			let label:HTMLLabelElement = createLabelElement({
				text: category['name'],
				forIn: idName
			});

			let select:HTMLSelectElement = createSelectElement({
				idName,
				options: category['options'].map(( option: string ) => ({
					display: option,
					value: option
				}))
			});

			select.setAttribute('name','category');

			optionRow.appendChild(label);
			optionRow.appendChild(select);

			content.appendChild(optionRow);
		})	
	}

	// Create quantity row for user to select how many reeds they want
	const reedRow:HTMLDivElement = createElement({
		className: 'reedPopupRow'
	});
	const qtyLabel:HTMLLabelElement = createLabelElement({
		text: 'Quantity',
		forIn: 'quantity'
	});
	const qtyInput:HTMLInputElement = createElement({
		element: 'input',
		idName: 'quantity'
	});
	qtyInput.setAttribute('type','number');
	qtyInput.setAttribute('name','quantity');
	qtyInput.setAttribute('min','0');

	reedRow.appendChild(qtyLabel);
	reedRow.appendChild(qtyInput);

	content.appendChild(reedRow);

	dialogBox.showModal();
}
const creatDialogBox = ():void => {
	const dialog:HTMLDialogElement = document.createElement('dialog');

	const form:HTMLFormElement = document.createElement("form");
	form.addEventListener('submit',function(e:Event) {
		e.preventDefault();
		const nameInput:HTMLInputElement = <HTMLInputElement>form.querySelector('[name="name"]');
		const costInput:HTMLInputElement = <HTMLInputElement>form.querySelector('[name="cost"]');
		const quantityInput:HTMLInputElement = <HTMLInputElement>form.querySelector('[name="quantity"]');

		let data:CustomEventProps<AddReedInterface> = {
			bubbles:true,
			detail: {
				action: CartAction.Add,
				name:nameInput.value,
				cost: parseFloat(costInput.value),
				quantity:parseInt(quantityInput.value)
			}
		}
		if ( form['category'] ) {
			const categoryInput:HTMLSelectElement = <HTMLSelectElement>form.querySelector('[name="category"]');
			data['detail']['category'] = categoryInput.value;
		}
		
		let updateCartEvent:CustomEvent<AddReedInterface> = new CustomEvent('OnUpdateCart',data);
		document.dispatchEvent(updateCartEvent);
		dialog.close();
		return false;
	});

	const closeButton:HTMLButtonElement = createElement({
		element: 'button',
		idName: 'dialogCloseBtn'
	});
	closeButton.setAttribute('autofocus','');
	let closeButtonIcon:HTMLSpanElement = createElement({
		element: "span",
		className: "fa-solid fa-xmark"//fa-solid fa-x 	fas fa-chevron-up
	});
	closeButton.appendChild(closeButtonIcon);
	closeButton.addEventListener("click",(e) => {
		e.preventDefault();
		dialog.close();
	});

	const title:HTMLHeadingElement = document.createElement("h4");
	// Add name as hidden input field to be sent with other data
	const titleField:HTMLInputElement = createElement({
		element: 'input',
		idName: 'reedName'
	});
	titleField.setAttribute('name','name');
	titleField.setAttribute('type','hidden');

	const content:HTMLDivElement = createElement({ className: 'content' });

	let submitBtn:HTMLInputElement = createElement({ 
		element: 'input', 
		idName: 'reedSubmitBtn'
	});
	submitBtn.setAttribute('type','submit');
	submitBtn.setAttribute( 'value', 'Add To Cart' );

	// Clear dialog data when closed
	dialog.addEventListener('close', (e) => {
		title.textContent = '';
		titleField.value = '';
		let numContentChildNodes:number = content.childElementCount;
		for(let i = 0; i < numContentChildNodes; i++){ content.childNodes[0].remove(); }
	});

	form.appendChild(closeButton);
	form.appendChild(title);
	form.appendChild(titleField);
	form.appendChild(content);
	form.appendChild(submitBtn);

	dialog.appendChild(form);

	document.body.appendChild(dialog);
}
const createProductOptions = (data: ISelectRow) => {

}

export { createHeaderContent, createReedPriceBox, creatDialogBox }