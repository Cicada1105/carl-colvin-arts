// Imports
// methods
import { loadRows, loadListenPreview } from './load_methods';
const loadAboutPage = () => {
    // Load Rows
    loadRows();
    // Load previous for listen container
    loadListenPreview();
};
export { loadAboutPage };
