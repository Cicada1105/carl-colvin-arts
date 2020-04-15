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
import { createMediaElement } from './special';
const createAudioCont = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Create container to aid in positioning audio element
    let audioCont = createElement({ className: "mediaCont" });
    // Create image to visually support audio controls
    let audioImg = createImageElement({ src: data.image.path, alt: data.image.alt, className: "audioImg" });
    let audioEl = yield createMediaElement(data);
    // Append audio image to container
    audioCont.appendChild(audioImg);
    // Append audio media to container
    audioCont.appendChild(audioEl);
    return audioCont;
});
const createVideoCont = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Create container to aid in positioning video element
    let videoCont = createElement({ className: "mediaCont" });
    // Create image instead of using poster to allow for common positioning
    let videoImg = createImageElement({ src: data.poster, className: "videoImg" });
    let videoEl = yield createMediaElement(data);
    // Append video image to container
    videoCont.appendChild(videoImg);
    // Append video media to container
    videoCont.appendChild(videoEl);
    return videoCont;
});
export { createAudioCont, createVideoCont };
