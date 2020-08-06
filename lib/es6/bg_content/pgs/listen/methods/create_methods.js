// This file contains methods to create audio and video containers
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//	methods
import { createElement, createImageElement } from '../../../../global/methods/elements';
import { createCustomControls, createMediaElement } from './media_elements';
const createMediaCont = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Create container to aid in positioning media element
    let mediaCont = createElement({ className: "mediaCont" });
    // Create media element and await it to be finished loading
    let mediaEl = yield createMediaElement(data);
    // Create container for controls 
    let mediaCtrlsCont = createMediaControlsCont(mediaEl);
    // Create media visual container for positioning
    let mediaVisualCont = data.image ? createMediaVisualCont(data.image) : createMediaVisualCont(mediaEl);
    // Append media visual to container
    mediaCont.appendChild(mediaVisualCont);
    // Append audio element to container; video already appended to visual container
    mediaCont.appendChild(mediaCtrlsCont); // Conditional rendering
    data.image && mediaCont.appendChild(mediaEl);
    return mediaCont;
});
const createMediaControlsCont = (media) => {
    let cont = createElement({ className: "mediaCtrlsCont" });
    // Create media element with data of type Media
    let mediaEl = createCustomControls(media);
    // Append media element to container 
    cont.appendChild(mediaEl);
    return cont;
};
/*
    @params
        mediaData:VisualDisplayData (IImage | HTMLVideoElement)

        Note: Audio element does not have image property, so data of type IImage, a subproperty of the
            AudioInterface, is needed. To reduce the need to replace beginning image poster, for
            HTMLVideoElement, data of type HTMLVideoElement is directly placed into the visual container
            to be returned.

    @return
        visualCont:HTMLDivElement
        -Div element containing image of AudioInterface's IImage subproperty or HTMLVideoElement's video display
*/
const createMediaVisualCont = (visualData) => {
    const visualCont = createElement({ className: "mediaVisualCont" });
    let mediaEl = visualData.path ? createMediaImage(visualData) : visualData;
    //  Append visual element to container
    visualCont.appendChild(mediaEl);
    console.log(visualCont);
    return visualCont;
};
const createMediaImage = (imgData) => {
    let source = imgData.path;
    let alternative = imgData.alt;
    let img = createImageElement({
        src: source,
        alt: alternative
    });
    return img;
};
export { createMediaCont };
