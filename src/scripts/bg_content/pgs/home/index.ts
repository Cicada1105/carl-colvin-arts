// Imports
import { loadAboutPage } from '../about/index'
import { loadContactPage } from '../contact/index'
import { loadCollage } from './methods/load'

// Style method

const loadHomePage = () => {
	// Load image collage
	loadCollage();
	// Load about info
	loadAboutPage();
	// Load contact info for home page for ease of access
	loadContactPage();
}

export { loadHomePage }