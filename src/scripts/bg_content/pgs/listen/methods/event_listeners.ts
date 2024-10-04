// This file contains event listeners for the media controls on the listen page

function playButtonListener(event:MouseEvent) {
	let btn:HTMLElement = event.currentTarget as HTMLElement;
	
	btn.className = "fas fa-" + (btn.className.includes("play") ? "pause" : "play");

	this.paused ? this.play() : this.pause();
}

function muteButtonListener(event:MouseEvent) {
	let btn:HTMLElement = event.currentTarget as HTMLElement;

	btn.className = "fas fa-volume-" + (btn.className.includes("up") ? "mute" : "up");

	this.muted = this.muted ? false : true;
}

export { playButtonListener, muteButtonListener }