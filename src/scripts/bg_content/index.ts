// Imports
import { getCurrentFile } from '../global/methods/utilities'
// Different pages
import { loadHomePage } from './pgs/home/index'
import { loadAboutPage } from './pgs/about/index'
import { loadServicesPage } from './pgs/services/index'
import { loadListenPage } from './pgs/listen/index'
import { loadContactPage } from './pgs/contact/index'
import { loadCartPage } from './pgs/cart/index'

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
		case 'cart':
			loadCartPage();
		break;
		default:
			loadServicesPage();
	}
}

export { createBodyContent } 