// This file contains methods that are for aiding in creation of media elements
//	methods
import { createElement, createTextElement } from '../../../../global/methods/elements';
//  event listeners
import { playButtonListener as playBtnListener, muteButtonListener as muteBtnListener } from './event_listeners';
const createMediaElement = (mediaEl) => {
    return new Promise(resolve => {
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
        //if ((mediaEl as VideoInterface).poster) 
        //	el.setAttribute("poster",(<VideoInterface>mediaEl).poster);
        // If controls set to true, return default, built-in controls
        if (mediaEl.controls)
            el.setAttribute('controls', '');
        // Only return media element once duration has changed (from NaN to length of media)
        el.addEventListener("durationchange", (e) => resolve(el));
    });
    // If controls set to false, return custom controls once media is completely loaded
    //else {
    //	let tempCtrls:any = await asyncFunction(el);
    //	return tempCtrls;
    //}
};
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
    // Use closure to contain one time calculationts for progress bar click event
    (function () {
        // Store current time of media in seconds 
        let mediaLength = mediaEl.duration;
        // Create variables to store values each time progress bar is clicked
        let xClickedPos = 0;
        let barWidth = 0;
        let segmentLength = 0;
        let nearestBtmSegment = 0;
        // Create time update event to trigger visual update (above)
        let timeUpdateEvent = new Event("timeupdate");
        // Add "seek" ability to progress bar
        progressBar.addEventListener("click", (event) => {
            // Store location of where user clicked on progress bar
            xClickedPos = event.offsetX;
            console.log(`User clicked pos: ${xClickedPos}`);
            // Get width of progress bar for dividing up evenly based on length of media
            barWidth = parseFloat(event.path[0].clientWidth);
            console.log(`Progress bar width: ${barWidth}`);
            // Divide length of bar into even segments based on length of media
            segmentLength = barWidth / mediaLength;
            console.log(`Each even segment is ${segmentLength} units long`);
            // Locate nearest segment 
            nearestBtmSegment = Math.floor(xClickedPos / segmentLength);
            console.log(`User is closest to the ${nearestBtmSegment} segment`);
            // Set media time to rounded down time segment the user selected
            mediaEl.currentTime = nearestBtmSegment;
            // Trigger time update event
            mediaEl.dispatchEvent(timeUpdateEvent);
        });
    })();
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
