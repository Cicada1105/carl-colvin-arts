// This file contains methods that are for aiding in creation of media elements
//	methods
import { createElement, createTextElement } from '../../../../global/methods';
const createCustomControls = (mediaEl) => {
    let ctrlCont = createElement({ className: "mediaControls" });
    let playBtn = createElement({ element: 'i', className: 'fas fa-play' });
    // Add click event listener
    playBtn.addEventListener("click", () => {
        playBtn.className = playBtn.className === "fas fa-play" ? "fas fa-pause" : "fas fa-play";
        if (mediaEl.paused)
            mediaEl.play();
        else
            mediaEl.pause();
    });
    var durationMin = Math.floor(mediaEl.duration / 60);
    var durationSec = Math.floor((mediaEl.duration - (durationMin * 60)));
    var durationSecStr = durationSec < 10 ? `0${durationSec}` : `${durationSec}`;
    let timeStamp = createTextElement({ element: "span", text: `0:00/${durationMin}:${durationSecStr}` });
    mediaEl.addEventListener("timeupdate", () => {
        let min = Math.floor(mediaEl.currentTime / 60);
        let seconds = Math.floor((mediaEl.currentTime - (min * 60)));
        let secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
        // Update time
        timeStamp.innerHTML = `${min}:${secondsStr}/${durationMin}:${durationSecStr}`;
        // Update progress bar
        progressBar.value = Math.floor(mediaEl.currentTime);
    });
    let progressBar = createElement({ element: "progress", className: "progressBar" });
    // Add initial properties to progress bar
    progressBar.value = 0;
    progressBar.max = Math.ceil(mediaEl.duration);
    let muteBtn = createElement({ element: 'i', className: 'fas fa-volume-up' });
    // Add click event listener to handle muting/unmuting
    muteBtn.addEventListener("click", () => {
        muteBtn.className = muteBtn.className === "fas fa-volume-up" ? "fas fa-volume-mute" : "fas fa-volume-up";
        mediaEl.muted = mediaEl.muted ? false : true;
    });
    // Append each control element to it's parent container
    ctrlCont.appendChild(playBtn);
    ctrlCont.appendChild(timeStamp);
    ctrlCont.appendChild(progressBar);
    ctrlCont.appendChild(muteBtn);
    return ctrlCont;
};
const createMediaElement = (mediaEl) => {
    let el;
    // Audio object has image, video object has poster
    let tag = mediaEl.image ? "audio" : "video";
    el = createElement({ element: `${tag}`, className: "mediaTag", idName: `${tag}Tag` });
    if (mediaEl.poster)
        el.setAttribute("poster", mediaEl.poster);
    mediaEl.controls ? el.setAttribute('controls', '') : "";
    let source = document.createElement('source');
    source.setAttribute("src", mediaEl.source.src);
    source.setAttribute("type", mediaEl.source.type);
    return el;
};
export { createCustomControls, createMediaElement };
