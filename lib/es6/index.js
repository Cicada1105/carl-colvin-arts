// imports
import { createGradient as gradient } from './gradient';
import { createNavigation as navigation } from './navigation';
const init = () => {
    gradient();
    navigation();
    alert("It's working");
};
export { init };
