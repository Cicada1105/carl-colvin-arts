// imports
import { createGradient as gradient } from './gradient/index';
import { createHeader as header } from './header/index';
import { createFooter as footer } from './footer/index';
const init = () => {
    gradient();
    header();
    footer();
};
export { init };
