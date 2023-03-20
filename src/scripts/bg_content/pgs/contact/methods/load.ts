// Imports
//  Global
//  methods
import { createElement, createTextElement, createImageElement } from '../../../../global/methods/elements'
//	interfaces
//import { IImageLink } from '../../../../global/interfaces/general';
// 	Local
//	data
import { formData } from '../data'
//  methods
import { createRows } from './rows'
import { submitForm } from '../form_submit_methods/submit'

const IMG_FOLDER:string = "../resources/pg_imgs/contact";

const loadForm = () => {
	// Create container to hold contact form
	let formCont:HTMLDivElement = createElement({
		element:"form",
		idName:"formCont"
	});
	// Set method as post
	formCont.setAttribute("method", "POST");
	// Prevent default form validation
	formCont.setAttribute("novalidate","");
	formCont.addEventListener("submit",submitForm);

	// Create element for header
	let headerCont:HTMLHeadingElement = createTextElement({element:"h1",text:formData.header});
	// Append header to form container
	formCont.appendChild(headerCont);

	let formContent:HTMLDivElement = createRows();

	// Append form content container to actual form
	formCont.appendChild(formContent);

	document.body.appendChild(formCont);

	// Set screen position to fixed if on contact page (removes unintentional space below)
	//document.body.style.position = window.location.pathname.includes("contact") ? "fixed" : "initial";
}
/*
const loadHeaderSection = ():void => {
	let section:HTMLElement = createElement({
		element:"section",
		idName:"introSection"
	})

	let headerText:HTMLHeadingElement = createTextElement({
		element:"h1",
		text:"Under Maintenance"
	});
	// Create page sub text
	let pageSubText:HTMLParagraphElement = createTextElement({
		text:"I'd love to contact you about my portfolio and services but the email servers are down. Please come back later"
	});

	// Append header text and page sub text to header section
	section.appendChild(headerText);
	section.appendChild(pageSubText);

	document.body.appendChild(section);
}
const loadServerGraphic = ():void => {
	let section:HTMLElement = createElement({
		element:"section",
		idName:"serverGraphicSection"
	})

	let person:HTMLImageElement = createImageElement({
		src:`${IMG_FOLDER}/person.svg`,
		alt:"Person"
	});
	let server:HTMLImageElement = createImageElement({
		src:`${IMG_FOLDER}/server.svg`,
		alt:"Server"
	});

	// Append person and server to graphic section
	section.appendChild(person);
	section.appendChild(server);

	document.body.appendChild(section);
}
const loadSocialMediaLinks = ():void => {
	let section:HTMLElement = createElement({
		element:"section",
		idName:"mediaLinksSection"
	})

	let socialMediaText:HTMLParagraphElement = createTextElement({
		text:"In the meantime, check out what I'm up to on social media!"
	});

	// Create container to hold the media links
	let mediaLinksCont:HTMLDivElement = createElement({
		idName:"mediaLinksCont"
	});

	// Loop through social media data, creating image links and appending them to meddia links container
	linkData.forEach((imgLink:IImageLink) => {
		let img:HTMLImageElement = createImageElement({
			src: `${IMG_FOLDER}/${imgLink["path"]}`,
			alt: imgLink["alt"]
		});
		img.addEventListener("click",() => window.open(imgLink["link"],"_blank"));

		mediaLinksCont.appendChild(img);
	})

	// Append social media text and links container to section
	section.appendChild(socialMediaText);
	section.appendChild(mediaLinksCont);

	document.body.appendChild(section);
}

export { loadHeaderSection, loadServerGraphic, loadSocialMediaLinks }*/
export { loadForm }