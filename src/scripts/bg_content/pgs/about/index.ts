// Imports
// methods
import { loadRows, loadListenPreview } from './load_methods'
import { loadBootstrap } from '../../../global/methods/utilities'

const loadAboutPage = () => {
	// Load Rows
	loadRows();
	// Load previous for listen container
	loadListenPreview();
}

export { loadAboutPage }