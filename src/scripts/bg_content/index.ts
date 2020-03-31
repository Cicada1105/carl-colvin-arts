// Imports
import { getCurrentFile } from '../global/methods'
// Different pages
import { loadHomePage } from './pgs/home/index'
import { loadAboutPage } from './pgs/about/index'
import { loadServicesPage } from './pgs/services/index'
import { loadListenPage } from './pgs/listen/index'
import { loadContactPage } from './pgs/contact/index'

const createBodyContent = () => {
	let currFile:string = getCurrentFile();

	switch(currFile) {
		case 'index':
			loadHomePage();
		break;
		case '':
			loadHomePage();
		break;
		case 'about':
			loadAboutPage();
		break;
		case 'listen':
			loadListenPage();
		break;
		case 'contact':
			loadContactPage();
		break;
		default:
			loadServicesPage(); // Doesn't have it's own home page so will redirect to loading specific page
	}
}

export { createBodyContent } 