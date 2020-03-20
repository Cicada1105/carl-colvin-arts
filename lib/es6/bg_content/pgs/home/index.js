// Imports
// methods
import { loadBootstrap, loadRows, loadListenPreview } from './load_methods';
const loadHomePage = () => {
    // Load bootstrap to allow Font Awesome to be used
    loadBootstrap();
    // Load Rows
    loadRows();
    // Load previous for listen container
    loadListenPreview();
};
export { loadHomePage };
