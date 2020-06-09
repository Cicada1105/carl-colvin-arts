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
import { createElement, createImageElement } from '../../../../global/methods';
import { createMediaElement } from './media_elements';
const createMediaCont = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Create container to aid in positioning media element
    let mediaCont = createElement({ className: "mediaCont" });
    // Create media image container for positioning
    let mediaImgCont = createMediaImageCont(data);
    //let mediaEl:any = await createMediaElement(data);
    let mediaCtrlsCont = yield createMediaControlsCont(data);
    // Append media image to container
    mediaCont.appendChild(mediaImgCont);
    // Append media media to container
    //mediaCont.appendChild(mediaEl);
    mediaCont.appendChild(mediaCtrlsCont);
    return mediaCont;
});
const createMediaControlsCont = (mediaData) => __awaiter(void 0, void 0, void 0, function* () {
    let cont = createElement({ className: "mediaCtrlsCont" });
    // Create media element with data of type Media
    let mediaEl = yield createMediaElement(mediaData);
    // Append media element to container 
    cont.appendChild(mediaEl);
    return cont;
});
const createMediaImageCont = (mediaData) => {
    const imgCont = createElement({ className: "mediaImgCont" });
    let source = mediaData.image ? mediaData.image.path : mediaData.poster;
    let alternative = mediaData.image ? mediaData.image.alt : mediaData.source.src;
    let img = createImageElement({
        src: source,
        alt: alternative
    });
    // Append image to its container
    imgCont.appendChild(img);
    return imgCont;
};
export { createMediaCont };
