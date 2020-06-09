// This file contains methods that are for aiding in creation of media elements
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
import { createElement, createTextElement } from '../../../../global/methods';
//  event listeners
import { playButtonListener as playBtnListener, muteButtonListener as muteBtnListener } from './event_listeners';
const createMediaElement = (mediaEl) => __awaiter(void 0, void 0, void 0, function* () {
    // Audio object has image property while Video object has poster property
    let tag = mediaEl.image ? "audio" : "video";
    let el = createElement({
        element: `${tag}`,
        className: "mediaTag",
        idName: `${tag}Tag`
    });
    let source = document.createElement('source');
    source.setAttribute("src", mediaEl.source.src);
    source.setAttribute("type", mediaEl.source.type);
    // Append Source to child
    el.appendChild(source);
    //if ((<VideoInterface>mediaEl).poster) 
    //	el.setAttribute("poster",(<VideoInterface>mediaEl).poster);
    // If controls set to true, return default, built-in controls
    if (mediaEl.controls) {
        el.setAttribute('controls', '');
        return el;
    }
    // If controls set to false, return custom controls once media is completely loaded
    else {
        let tempCtrls = yield asyncFunction(el);
        return tempCtrls;
    }
});
function asyncFunction(el) {
    return __awaiter(this, void 0, void 0, function* () {
        let temp = yield waitForCompleteLoad(el);
        return temp;
    });
}
function waitForCompleteLoad(el) {
    let promise = new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        yield el.addEventListener("durationchange", (e) => {
            e.preventDefault();
            resolve(createCustomControls(el));
        });
    }));
    return promise;
}
const createCustomControls = (mediaEl) => {
    let ctrlCont = createElement({ className: "mediaControls" });
    let playBtn = createElement({ element: 'i', className: 'fas fa-play' });
    // Add click event listener
    playBtn.addEventListener("click", playBtnListener.bind(mediaEl));
    let timeStamp = createTimeStamp(mediaEl.duration);
    mediaEl.addEventListener("timeupdate", () => {
        //  check if current time is the end of the current media length
        if (mediaEl.currentTime == mediaEl.duration) {
            // Bring media current time to begging
            mediaEl.currentTime = 0;
            // Pause media 
            mediaEl.pause();
            // Change pause button to play
            playBtn.className = "fas fa-play";
        }
        let min = Math.floor(mediaEl.currentTime / 60);
        let seconds = Math.floor((mediaEl.currentTime - (min * 60)));
        let secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
        // Update time
        // 	take current time (mm:ss/MM:SS) and slice off dynamic part of time: mm:ss
        timeStamp.innerHTML = `${min}:${secondsStr}/${(timeStamp.innerHTML).slice(5)}`;
        // Update progress bar
        progressBar.value = Math.floor(mediaEl.currentTime);
    });
    let progressBar = createProgressBar(mediaEl.duration);
    let muteBtn = createElement({ element: 'i', className: 'fas fa-volume-up' });
    // Add click event listener to handle muting/unmuting
    muteBtn.addEventListener("click", muteBtnListener.bind(mediaEl));
    // Append original media to allow video to display
    ctrlCont.appendChild(mediaEl);
    // Append each control element to it's parent container
    ctrlCont.appendChild(progressBar);
    ctrlCont.appendChild(playBtn);
    ctrlCont.appendChild(timeStamp);
    ctrlCont.appendChild(muteBtn);
    return ctrlCont;
};
const createTimeStamp = (length) => {
    let durationMin = Math.floor(length / 60);
    let durationSec = Math.floor((length - (durationMin * 60)));
    let durationSecStr = durationSec < 10 ? `0${durationSec}` : `${durationSec}`;
    let timeEl = createTextElement({
        element: "span",
        text: `0:00/${durationMin}:${durationSecStr}`
    });
    return timeEl;
};
const createProgressBar = (val) => {
    let bar = createElement({ element: "progress", className: "progressBar" });
    // Add initial properties to progress bar
    bar.value = 0;
    bar.max = Math.ceil(val);
    return bar;
};
export { createCustomControls, createMediaElement };
