// Imports
import { loadAboutPage } from '../about/index';
import { loadContactPage } from '../contact/index';
import { loadMobileDisplay, loadCollage } from './methods/load';
import { MobileListener, DesktopListener } from './methods/event_listeners';
// Style method
const loadHomePage = () => {
    // Load about info
    loadAboutPage();
    // Load contact info for home page for ease of access
    loadContactPage();
    // Load collage 
    loadCollage();
    // Load collage only if screen is large enough, else load mobile version
    window.innerWidth <= 900 ? (() => {
        loadMobileDisplay();
        window.addEventListener("resize", DesktopListener);
    })() : (() => {
        window.addEventListener("resize", MobileListener);
    })();
};
export { loadHomePage };
