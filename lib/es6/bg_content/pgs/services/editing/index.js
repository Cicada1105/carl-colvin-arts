// Imports
//	methods
//	   local
import { loadPricing } from './pricing/index';
import { loadIntro } from './intro/index';
//	   global
import { loadBootstrap } from '../../../../global/methods';
const loadEditingPage = () => {
    // Load boostrap to be used by methods later on
    loadBootstrap();
    // Load intro paragraph
    loadIntro();
    // Load pricing info
    loadPricing();
};
export { loadEditingPage };
