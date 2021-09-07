// This file is meant to abstract from the index.ts file
// File dependencies will be handled here

// Imports
import { reedmakingIntro, aboutIntro, tabData } from '../data';
import { ReedPricingInterface } from '../interfaces';
import { createHeaderContent, createReedPriceBox } from './create';

import { createElement, createTextElement, createImageElement, createContactLink } from '../../../../../global/methods/elements';
import { IContactLink } from '../../../../../global/interfaces/general';
import requestData from '../../request';

const loadIntroData = ():void => {
	// Create reedmaking intro container that holds the individual sections
	let introCont:HTMLDivElement = createElement({
		idName:"reedmakingIntro"
	});

	// Create reedmaking intro section and add specific id to reed intro section
	let reedIntroSection:HTMLElement = createHeaderContent(reedmakingIntro);
	reedIntroSection.setAttribute("id","reedmakingIntroSection");
	// Create center section that contains reed image
	let imgSection:HTMLDivElement = createElement({
		idName:"imgSection"
	});

	let connector:HTMLDivElement = createElement({
		idName:"connector"
	});
	let reedImg:HTMLImageElement = createImageElement({
		src:"../../resources/pg_imgs/reedmaking_imgs/finished_reed.jpg",
		alt:"Finished Reed"
	});

	imgSection.appendChild(connector);
	imgSection.appendChild(reedImg);
	// Create reedmaking about section and add specific id to reed about section
	let reedAboutSection:HTMLDivElement = createHeaderContent(aboutIntro);
	reedAboutSection.setAttribute("id","aboutIntroSection");

	// Append sections to the intro reedmaking intro container 
	introCont.appendChild(reedIntroSection);
	introCont.appendChild(imgSection);
	introCont.appendChild(reedAboutSection);

	// Append intro container to document
	document.body.appendChild(introCont);
}

const loadTabs = ():void => {
	tabData.forEach(tab => {
		let tabCont:HTMLDivElement = createElement({className:'tabCont'});

		// Create container to hold header and button to activate dropdown 
		let tabHeaderCont:HTMLDivElement = createElement({className:'tabHeaderCont'});

		// Header Content
		// Header
		let tabHeader:HTMLHeadingElement = createTextElement({element:'h3',text:tab.header,className:'tabHeader'});
		// Button -> Stylized with CSS
		let tabButton:HTMLDivElement = createElement({className:'tabButton'});

		// Append header data to header container
		tabHeaderCont.appendChild(tabHeader);
		tabHeaderCont.appendChild(tabButton);

		// Create container to hold dropdown content
		let tabBody:HTMLDivElement = createElement({className:'tabBody'});

		// Body Content
		tab["content"].forEach((description:string) => {
			// createTextElement's default element is 'p'
			let p:HTMLParagraphElement = createTextElement({text:description});

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

const loadPricings = async ():Promise<void> => {
	let pricingHeader:HTMLHeadingElement = createTextElement({element:"h2",text:"Pricings"});
	document.body.appendChild(pricingHeader);

	let pricingData: ReedPricingInterface[] = await requestData<ReedPricingInterface[]>("reedmaking");
	// Create reed pricing container for each Reed
	pricingData.forEach(reed => {
		// Create container that will be used to help with sizing and positioning
		// createElement's default element is 'div'
		let reedCont:HTMLDivElement = createElement({className:'priceBox'});

		let reedPricingBox:HTMLDivElement = createReedPriceBox(reed);

		// Append reed pricing box to the reed container
		reedCont.appendChild(reedPricingBox);

		document.body.appendChild(reedCont);
	});
	/*catch((err:Error) => {
		document.body.appendChild(
			createTextElement({
				element: "h3",
				text: err.name,
				idName: "errName"
			})
		);
		document.body.appendChild(
			createTextElement({
				element: "h6",
				text: err.message,
				idName: "errMessage"
			})
		);
	})*/
}

const loadContactLink = ():void => {
	let linkData:IContactLink = {
		text: "Request Reeds",
		from: "reedmaking",
		path: "../contact.html"
	}
	let contactLinkCont:HTMLDivElement = createContactLink(linkData);
	document.body.appendChild(contactLinkCont);
}

export { loadIntroData, loadTabs, loadPricings, loadContactLink }