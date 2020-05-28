// Imports
import { loadAboutPage } from '../about/index';
import { loadContactPage } from '../contact/index';
import { loadCollage } from './load_methods';
// Style method
//import { addImageListener } from './special_methods'
const loadHomePage = () => {
    // Load image collage
    loadCollage();
    // Once css loads add onclick listener to images passing in CSS computed dimensions
    //if (document.readyState === "complete")
    //addImageListener();
    // Load about info
    loadAboutPage();
    // Load contact info for home page for ease of access
    loadContactPage();
};
export { loadHomePage };
