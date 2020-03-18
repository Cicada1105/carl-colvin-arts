// This file is meant to abstract from the index.ts file
// File dependencies will be handled here

// Imports
import { introData, tabData, pricingData } from './data' 
import { createReedPriceBox } from './private-methods'
import { createElement, createTextElement, createImageElement } from '../../../../global/methods'

const loadIntroData = ():void => {
	let introHeaderCont:any = createElement({className:'reedmakingHeader'});
	let leftReed:any = createImageElement({src:'../../resources/reedmaking_imgs/reed.png',alt:'Reed silhouette',className:'reed_silhouette',idName:'leftReed'});
	let introHeader:any = createTextElement({element:'h3',text:'Reedmaking'});
	let rightReed:any = createImageElement({src:'../../resources/reedmaking_imgs/reed.png',alt:'Reed silhouette',className:'reed_silhouette',idName:'rightReed'});

	introHeaderCont.appendChild(leftReed);
	introHeaderCont.appendChild(introHeader);
	introHeaderCont.appendChild(rightReed);

	document.body.appendChild(introHeaderCont);
}

const loadTabs = ():void => {
	let aboutHeaderCont:any = createElement({className:'reedmakingHeader'});
	let leftReed:any = createImageElement({src:'../../resources/reedmaking_imgs/reed.png',alt:'Reed silhouette',className:'reed_silhouette',idName:'leftReed'});
	let aboutHeader:any = createTextElement({element:'h3',text:'About'});
	let rightReed:any = createImageElement({src:'../../resources/reedmaking_imgs/reed.png',alt:'Reed silhouette',className:'reed_silhouette',idName:'rightReed'});
	
	aboutHeaderCont.appendChild(leftReed);
	aboutHeaderCont.appendChild(aboutHeader);
	aboutHeaderCont.appendChild(rightReed);

	document.body.appendChild(aboutHeaderCont);

	tabData.forEach(tab => {
		let tabCont:any = createElement({className:'tabCont'});

		// Create container to hold header and button to activate dropdown 
		let tabHeaderCont:any = createElement({className:'tabHeaderCont'});

		// Header Content
		// Header
		let tabHeader:any = createTextElement({element:'h3',text:tab.header,className:'tabHeader'});
		// Button -> Stylized with CSS
		let tabButton:any = createElement({className:'tabButton'});

		// Append header data to header container
		tabHeaderCont.appendChild(tabHeader);
		tabHeaderCont.appendChild(tabButton);

		// Create container to hold dropdown content
		let tabBody:any = createElement({className:'tabBody'});

		// Body Content
		tab.descriptions.forEach(description => {
			// createTextElement's default element is 'p'
			let p:any = createTextElement({text:description});

			// Append paragraph description and break to dropdown
			tabBody.appendChild(p);
		});

		/*  Event Listeners  */
		tabButton.addEventListener('click', function() {
			// Tab Button animation
			tabButton.style.animationPlayState = "running";
			tabButton.style.animationName = tabButton.style.animationName === "plusMinus" ? "minusPlus" : "plusMinus";
			// Tab Body animation
			tabBody.style.animationPlayState = "running";
			tabBody.style.animationName = tabBody.style.animationName === "dropdownOpen" ? "dropdownClose" : "dropdownOpen";
			// Paragraph animation
			tabBody.childNodes.forEach(function(p:any) {
				p.style.animationPlayState = "running";
				p.style.animationName = p.style.animationName === "dropdownPOpen" ? "dropdownPClose" : "dropdownPOpen";
			})
		});


		// Append header and body container to tab container 
		tabCont.appendChild(tabHeaderCont);
		tabCont.appendChild(tabBody);

		// Append tab container to document
		document.body.appendChild(tabCont);
	});
}

const loadPricings = ():void => {
	// Create reed pricing container for each Reed
	pricingData.forEach(reed => {
		// Create container that will be used to help with sizing and positioning
		// createElement's default element is 'div'
		let reedCont:any = createElement({className:'priceBox'});

		let reedPricingBox:any = createReedPriceBox(reed);

		// Append reed pricing box to the reed container
		reedCont.appendChild(reedPricingBox);

		document.body.appendChild(reedCont);
	});
}

export { loadIntroData, loadTabs, loadPricings }