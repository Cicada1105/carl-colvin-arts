// This file contains methods to aid load methods for listen page
//	methods
import { createElement, createTextElement } from '../../../global/methods';
const createControls = (mediaEl) => {
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
const createAudio = (data) => {
    // Create container to aid in positioning audio element
    let audioCont = createElement({ className: "mediaCont" });
    let audioEl = createElement({ element: "audio", className: "mediaTag", idName: "audioTag" });
    data.controls ? audioEl.setAttribute('controls', '') : "";
    let source = createElement({ element: "source", className: "mediaSrc" });
    source.setAttribute("src", data.source.src);
    source.setAttribute("type", data.source.type);
    let customCtrls;
    // Load controls once media has been completely loaded
    audioEl.oncanplaythrough = () => {
        customCtrls = createControls(audioEl);
        // Only append data once media is fully loaded
        // Append custom controls to container
        audioCont.appendChild(customCtrls);
    };
    // Append source tag to audio element
    audioEl.appendChild(source);
    // Append audio media to container
    audioCont.appendChild(audioEl);
    return audioCont;
};
const createVideo = (data) => {
    // Create container to aid in positioning video element
    let videoCont = createElement({ className: "mediaCont" });
    let videoEl = createElement({ element: "video", className: "mediaTag", idName: "videoTag" });
    data.controls ? videoEl.setAttribute('controls', '') : "";
    videoEl.setAttribute("poster", data.poster);
    let source = document.createElement('source');
    source.setAttribute("src", data.source.src);
    source.setAttribute("type", data.source.type);
    let customCtrls;
    // Load controls once media has been completely loaded
    videoEl.oncanplaythrough = () => {
        customCtrls = createControls(videoEl);
        // Only append data once media is fully loaded
        // Append custom controls to container
        videoCont.appendChild(customCtrls);
    };
    // Append source tag to video element
    videoEl.appendChild(source);
    // Append video media to container
    videoCont.appendChild(videoEl);
    return videoCont;
};
export { createAudio, createVideo };
