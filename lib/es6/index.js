// imports
import { createGradient as gradient } from './gradient/index';
import { createBgFade as bgFade } from './bg_img/index';
import { createHeader as header } from './header/index';
import { createFooter as footer } from './footer/index';
const init = () => {
    bgFade();
    gradient();
    header();
    footer();
};
export { init };
