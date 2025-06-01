// Imports
//	methods
import { loadForm } from './methods/load'
import { createTextElement } from '@global/methods/elements'
//import { loadHeaderSection, loadServerGraphic, loadSocialMediaLinks } from './methods/load';

const loadContactPage = ():void => {
	// Create element for header
	let headerCont:HTMLHeadingElement = createTextElement({element:"h1",text:'Contact'});
	// Append header to form container
	document.body.appendChild(headerCont);
	// Load intro paragraph
	loadForm();
	// Loaad header section
	//loadHeaderSection();
	// Load page graphic
	//loadServerGraphic();
	// Load footer content
	//loadSocialMediaLinks();
}

export { loadContactPage }