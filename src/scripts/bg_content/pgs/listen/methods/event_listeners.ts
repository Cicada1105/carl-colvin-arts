// This file contains event listeners for the media controls on the listen page

function playButtonListener(event:MouseEvent) {
	let btn:HTMLElement = event.currentTarget as HTMLElement;
	
	btn.className = "fas fa-" + (btn.className.includes("play") ? "pause" : "play");

	// If playing the element, pause any other source of media
	if ( this.paused ) {
		let audioTags:HTMLCollection = document.getElementsByTagName('audio') as HTMLCollectionOf<HTMLAudioElement>;
		let videoTags:HTMLCollection = document.getElementsByTagName('video') as HTMLCollectionOf<HTMLVideoElement>;

		// Pause elements
		for ( let audioTag of audioTags ) {
			let audioEl:HTMLAudioElement = <HTMLAudioElement>audioTag;
			audioEl.pause();
		}
		for ( let videoTag of videoTags ) {
			let videoEl:HTMLVideoElement = <HTMLVideoElement>videoTag;
			videoEl.pause();
		}

		// Play current media element
		this.play();
	}
	else {
		this.pause();
	}
}

function muteButtonListener(event:MouseEvent) {
	let btn:HTMLElement = event.currentTarget as HTMLElement;

	btn.className = "fas fa-volume-" + (btn.className.includes("up") ? "mute" : "up");

	this.muted = this.muted ? false : true;
}

export { playButtonListener, muteButtonListener }