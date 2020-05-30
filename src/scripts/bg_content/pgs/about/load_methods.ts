// Imports
// 	methods
//	global
import { createElement, createImageElement } from '../../../global/methods'
//	local
import { infoBox, imgCont } from './special_methods'
// 	data
import { Rows } from './data'

// Paths for development
let isHomePage:boolean = window.location.pathname.includes('index');
const IMAGE_DIR:string = isHomePage ? './resources/pg_imgs/about_imgs/' : '../resources/pg_imgs/about_imgs/';
const MEDIA_DIR:string = isHomePage ? './resources/media/' : '../resources/media/';
// Paths for production
//const IMAGE_DIR:string = '/resources/pg_imgs/about_imgs/';
//const MEDIA_DIR:string = '/resources/media/';

const loadRows = ():void => {
	let currBox:HTMLElement;
	let currImg:HTMLDivElement;

	Rows.forEach((row,i) => {
		currBox = infoBox(row.infoData);
		currImg = imgCont(row.imgData);

		// createElement's default element is div
		let dataRow:HTMLDivElement = createElement({className:'row'});

		// Alternate info boxes and images
		if (i % 2 == 0) {
			currBox.setAttribute('id','left');
			currImg.setAttribute('id','right');
		}
		else {
			currImg.setAttribute('id','left');
			currBox.setAttribute('id','right');
		}
		dataRow.appendChild(currBox);
		dataRow.appendChild(currImg);

		// Append each row to the page
		document.body.appendChild(dataRow);	
	});
}

const loadListenPreview = ():void => {
	// Container to hold image and Font Awesome Icon
	let cont:HTMLDivElement = createElement({idName:"listenImageCont"});

	// Create Image Element to add to image container
	let listenImg:HTMLImageElement = createImageElement({
		src:`${IMAGE_DIR}kao_ra_zen_album_cover.jpg`,
		alt:"Kao Rao Zen Album Cover",
		idName:"listenImage"
	});
	
	// Add event listener to image to activate sound and switch icon
	listenImg.addEventListener('click',() => {
		volumeIcon.className = volumeIcon.className.indexOf("up") >= 0 ? 'fas fa-volume-mute' : 'fas fa-volume-up';
		if (audioEl.paused) 
			audioEl.play();
		else 
			audioEl.pause();
	})

	// Create audio element
	let audioEl:HTMLAudioElement = createElement({element:'audio',idName:'audioExcerpt'});
	audioEl.setAttribute('controls','');

	// Create source element
	let audioSrc:HTMLSourceElement = document.createElement('source');
	audioSrc.setAttribute('src',`${MEDIA_DIR}kenya-lifestream.wav`);
	audioSrc.setAttribute('type','audio/wav');

	// Append audio source to audio element
	audioEl.appendChild(audioSrc);
	// Start current time at 1:48(108 seconds);
	audioEl.currentTime = 108;

	// Add event listener to audio element
	audioEl.ontimeupdate = () => {
		if (audioEl.currentTime >= 161) {
			audioEl.currentTime = 108;
			audioEl.pause();
		}
	}

	// Create container to hold font awesome icon
	let volumeIcon:HTMLElement = createElement({element:'i',className:'fas fa-volume-mute'});
	// Add event listener to icon to activate sound and switch icon
	volumeIcon.addEventListener('click',() => {
		volumeIcon.className = volumeIcon.className.indexOf("up") >= 0 ? 'fas fa-volume-mute' : 'fas fa-volume-up';
		if (audioEl.paused) 
			audioEl.play();
		else 
			audioEl.pause();
	})

	// Append image and icon to Listen Image Container
	cont.appendChild(listenImg);
	cont.appendChild(volumeIcon);

	// locate listen section element
	let listenEl:any = document.getElementsByClassName('row')[1].firstChild;
	listenEl.appendChild(cont);
}

export { loadRows, loadListenPreview }