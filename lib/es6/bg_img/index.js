// Imports
// 	 Global
import { getCurrentFile } from '../global/methods';
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
    switch (currFile) {
        case 'index':
            imgLocation = bgImgs['oboe'].path;
            imgAlternative = bgImgs['oboe'].alt;
            break;
        case 'about':
            imgLocation = bgImgs['english_horn'].path;
            imgAlternative = bgImgs['english_horn'].alt;
            break;
        case 'services':
            imgLocation = bgImgs['poem'].path;
            imgAlternative = bgImgs['poem'].alt;
            break;
        case 'listen':
            imgLocation = bgImgs['oboe'].path;
            imgAlternative = bgImgs['oboe'].alt;
            break;
        case 'contact':
            imgLocation = bgImgs['oboe'].path;
            imgAlternative = bgImgs['oboe'].alt;
            break;
        default:
            imgLocation = bgImgs['oboe'].path;
            imgAlternative = bgImgs['oboe'].alt;
    }
    ;
    // Fade image 
    //let imageFade:any = createImageFade(imgLocation,imgAlternative);
    let imageFade = document.createElement('img');
    imageFade.setAttribute('src', imgLocation);
    imageFade.setAttribute('alt', imgAlternative);
    imageFade.setAttribute('id', 'bgImage');
    // Append image to document
    document.body.appendChild(imageFade);
};
export { createBgFade };
