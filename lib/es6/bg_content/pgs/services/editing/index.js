var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Imports
//	methods
//	   local
import { loadPricingChart } from './pricing_chart/index';
import { loadPricing } from './pricing/index';
import { loadIntro } from './intro/index';
//	   global
import { loadBootstrap, isValidEmail } from '../../../../global/methods/utilities';
const loadEditingPage = () => __awaiter(void 0, void 0, void 0, function* () {
    // Load boostrap to be used by methods later on
    loadBootstrap();
    // Load intro paragraph
    loadIntro();
    // Load pricing chart info
    loadPricingChart();
    // Load pricing info
    loadPricing();
    (yield isValidEmail("guitarlegen@gmail.com.uk")) && alert("Valid Email");
});
export { loadEditingPage };
