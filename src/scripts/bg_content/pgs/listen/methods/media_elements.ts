// This file contains methods that are for aiding in creation of media elements

// Imports
//	interfaces
import { AudioInterface, VideoInterface } from '../interfaces'
//	methods
import { createElement, createTextElement } from '../../../../global/methods'
//  event listeners
import { playButtonListener as playBtnListener, muteButtonListener as muteBtnListener } from './event_listeners'

//  local types
type Media = AudioInterface | VideoInterface;

const createMediaElement:(mediaElement:Media)=>Promise<HTMLMediaElement> = (mediaEl:Media):Promise<HTMLMediaElement> => {
	return new Promise(resolve => {
		// Audio object has image property while Video object has poster property
		let tag:string = (mediaEl as AudioInterface).image ? "audio" : "video";

		let el:HTMLMediaElement = createElement({
			element:`${tag}`,
			className:"mediaTag",
			idName:`${tag}Tag`
		});

		let source:HTMLSourceElement = document.createElement('source');
		source.setAttribute("src",mediaEl.source.src);
		source.setAttribute("type",mediaEl.source.type);

		// Append Source to child
		el.appendChild(source);

		//if ((mediaEl as VideoInterface).poster) 
		//	el.setAttribute("poster",(<VideoInterface>mediaEl).poster);

		// If controls set to true, return default, built-in controls
		if (mediaEl.controls) 
			el.setAttribute('controls','');

		// Only return media element once duration has changed (from NaN to length of media)
		el.addEventListener("durationchange", (e) => resolve(el));
	})
	// If controls set to false, return custom controls once media is completely loaded
	//else {
	//	let tempCtrls:any = await asyncFunction(el);
	//	return tempCtrls;
	//}
}

/*function asyncFunction(el:HTMLMediaElement):any {
	let temp:any = waitForCompleteLoad(el);
	
	return temp;
}

function waitForCompleteLoad(el:HTMLMediaElement):HTMLDivElement {
	let promise:Promise<HTMLDivElement> = new Promise(async (resolve) => {
		await el.addEventListener("durationchange",(e:any) => {
			e.preventDefault();
			resolve(createCustomControls(el));
		});
	});

	return promise;
}*/

const createCustomControls:(mediaEl:HTMLMediaElement) => any = (mediaEl:HTMLMediaElement):HTMLDivElement => {
	let ctrlCont:HTMLDivElement = createElement({className:"mediaControls"});

	let playBtn:HTMLElement = createElement({element:'i',className:'fas fa-play'});
	// Add click event listener
	playBtn.addEventListener("click",playBtnListener.bind(mediaEl));

	let timeStamp:HTMLSpanElement = createTimeStamp(mediaEl.duration);

	mediaEl.addEventListener("timeupdate",() => {
		//  check if current time is the end of the current media length
		if (mediaEl.currentTime == mediaEl.duration) {
			// Bring media current time to begging
			mediaEl.currentTime = 0;
			// Pause media 
			mediaEl.pause();
			// Change pause button to play
			playBtn.className = "fas fa-play";
		}
		let min:number = Math.floor(mediaEl.currentTime / 60);
		let seconds:number = Math.floor((mediaEl.currentTime - (min * 60)));
		let secondsStr:string = seconds < 10 ? `0${seconds}` : `${seconds}`;

		// Update time
		// 	take current time (mm:ss/MM:SS) and slice off dynamic part of time: mm:ss
		timeStamp.innerHTML = `${min}:${secondsStr}/${(timeStamp.innerHTML).slice(5)}`;
		// Update progress bar
		progressBar.value = Math.floor(mediaEl.currentTime);
	});

	let progressBar:HTMLProgressElement = createProgressBar(mediaEl.duration);

	let muteBtn:HTMLElement = createElement({element:'i',className:'fas fa-volume-up'});
	// Add click event listener to handle muting/unmuting
	muteBtn.addEventListener("click",muteBtnListener.bind(mediaEl));

	// Append original media to allow video to display
	ctrlCont.appendChild(mediaEl);
	// Append each control element to it's parent container
	ctrlCont.appendChild(progressBar);
	ctrlCont.appendChild(playBtn);
	ctrlCont.appendChild(timeStamp);
	ctrlCont.appendChild(muteBtn);

	return ctrlCont;
}

const createTimeStamp:(length:number) => HTMLSpanElement = (length:number):HTMLSpanElement => {
	let durationMin:number = Math.floor(length / 60);
	let durationSec:number = Math.floor((length - (durationMin * 60)));
	let durationSecStr:string = durationSec < 10 ? `0${durationSec}` : `${durationSec}`;

	let timeEl:HTMLSpanElement = createTextElement({
		element:"span",
		text:`0:00/${durationMin}:${durationSecStr}`
	});

	return timeEl;
} 
const createProgressBar:(maxVal:number) => HTMLProgressElement = (val:number):HTMLProgressElement => {
  let bar:HTMLProgressElement = createElement({element:"progress",className:"progressBar"});

  // Add initial properties to progress bar
  bar.value = 0;
  bar.max = Math.ceil(val);

  return bar;
}

export { createCustomControls, createMediaElement }