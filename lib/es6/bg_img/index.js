// Imports
// 	 Global
import { getCurrentFile, createImageElement } from '../global/methods';
//	 Local
import { data as bgImgs } from './data';
//import { createImageFade } from './methods'
const createBgFade = () => {
    // Get current path to determine bg image
    const currFile = getCurrentFile();
    // Image location
    let imgLocation;
    // Image alt
    let imgAlternative;
    // Based on current location, display different image
    // Data is associative with currFile being name of key
    imgLocation = bgImgs[currFile].path;
    imgAlternative = bgImgs[currFile].alt;
    // Fade image 
    //let imageFade:any = createImageFade(imgLocation,imgAlternative);
    let imageFade = createImageElement({ src: imgLocation, alt: imgAlternative, idName: 'bgImage' });
    // Append image to document
    document.body.appendChild(imageFade);
};
export { createBgFade };
