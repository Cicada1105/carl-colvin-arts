// This file contains methods that are for aiding in creation of media elements

// Imports
//	interfaces
import { AudioInterface, VideoInterface } from '../interfaces'
//	methods
import { createElement, createTextElement } from '../../../../global/methods'

//  local types
type media = AudioInterface | VideoInterface;

const createTimeStamp:(length:number) => any = (length:number):any => {
  var durationMin:number = Math.floor(length / 60);
  var durationSec:number = Math.floor((length - (durationMin * 60)));
  var durationSecStr:string = durationSec < 10 ? `0${durationSec}` : `${durationSec}`;

  let timeEl:any = createTextElement({element:"span",text:`0:00/${durationMin}:${durationSecStr}`});

  return timeEl;
} 
const createProgressBar:(maxVal:number) => any = (val:number):any => {
  let bar:any = createElement({element:"progress",className:"progressBar"});

  // Add initial properties to progress bar
  bar.value = 0;
  bar.max = Math.ceil(val);

  return bar;
}

const createCustomControls:(mediaEl:any) => any = (mediaEl:any):any => {
	let ctrlCont:any = createElement({className:"mediaControls"});

	let playBtn:any = createElement({element:'i',className:'fas fa-play'});
	// Add click event listener
	playBtn.addEventListener("click",(event:any) => {
		//console.log(event);
		playBtn.className = playBtn.className === "fas fa-play" ? "fas fa-pause" : "fas fa-play";

		if (mediaEl.paused) 
			mediaEl.play();
		else 
			mediaEl.pause();
	});

	let timeStamp:any = createTimeStamp(mediaEl.duration);

	mediaEl.addEventListener("timeupdate",() => {
		let min:number = Math.floor(mediaEl.currentTime / 60);
		let seconds:number = Math.floor((mediaEl.currentTime - (min * 60)));
		let secondsStr:string = seconds < 10 ? `0${seconds}` : `${seconds}`;

		// Update time
		// 	take current time (mm:ss/MM:SS) and slice off dynamic part of time: mm:ss
		timeStamp.innerHTML = `${min}:${secondsStr}/${(timeStamp.innerHTML).slice(5)}`;
		// Update progress bar
		progressBar.value = Math.floor(mediaEl.currentTime);
	});

	let progressBar:any = createProgressBar(mediaEl.duration);

	let muteBtn:any = createElement({element:'i',className:'fas fa-volume-up'});
	// Add click event listener to handle muting/unmuting
	muteBtn.addEventListener("click",() => {
		muteBtn.className = muteBtn.className === "fas fa-volume-up" ? "fas fa-volume-mute" : "fas fa-volume-up";

		mediaEl.muted = mediaEl.muted ? false : true;
	});

	// Append original media to allow video to display
	ctrlCont.appendChild(mediaEl);
	// Append each control element to it's parent container
	ctrlCont.appendChild(playBtn);
	ctrlCont.appendChild(timeStamp);
	ctrlCont.appendChild(progressBar);
	ctrlCont.appendChild(muteBtn);

	return ctrlCont;
}

const createMediaElement:(el:media)=>any = async (mediaEl:media):Promise<any> => {
	// Audio object has image, video object has poster
	let tag:string = (mediaEl as AudioInterface).image ? "audio" : "video";

	let el = createElement({element:`${tag}`,className:"mediaTag",idName:`${tag}Tag`});

	let source:any = document.createElement('source');
	source.setAttribute("src",mediaEl.source.src);
	source.setAttribute("type",mediaEl.source.type);

	// Append Source to child
	el.appendChild(source);

	//if ((<VideoInterface>mediaEl).poster) 
	//	el.setAttribute("poster",(<VideoInterface>mediaEl).poster);

	// If controls set to true, return default, built-in controls
	if (mediaEl.controls) {
		el.setAttribute('controls','');
		return el;
	}
	// If controls set to false, return custom controls once media is completely loaded
	else {
		let tempCtrls:any = await asyncFunction(el);
		return tempCtrls;
	}
}
async function asyncFunction(el:any):Promise<any> {
	let temp:any;

	temp = await waitForCompleteLoad(el);

	return temp;
}
function waitForCompleteLoad(el:any):Promise<any> {
	let promise:Promise<any> = new Promise(async (resolve) => {
		await el.addEventListener("durationchange",(e:any) => {
			e.preventDefault();
			resolve(createCustomControls(el));
		});
	});

	return promise;
}

export { createCustomControls, createMediaElement }