// Imports
//	methods
//import { loadForm } from './methods/load'
import { loadHeaderSection, loadServerGraphic, loadSocialMediaLinks } from './methods/load';

const loadContactPage = ():void => {
	// Load intro paragraph
	//loadForm();
	// Loaad header section
	loadHeaderSection();
	// Load page graphic
	loadServerGraphic();
	// Load footer content
	loadSocialMediaLinks();
}

export { loadContactPage }