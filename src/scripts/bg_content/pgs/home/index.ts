// Imports
import { loadAboutPage } from '../about/index'
import { loadContactPage } from '../contact/index'

const loadHomePage = () => {
	// Load image collage
	// Load about info
	loadAboutPage();
	// Load contact info for home page for ease of access
	loadContactPage();
}

export { loadHomePage }