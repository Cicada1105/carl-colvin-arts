// This file contains event listeners for the media controls on the listen page
function playButtonListener(event) {
    let btn = event.target;
    btn.className = "fas fa-" + (btn.className.includes("play") ? "pause" : "play");
    // this = media element bounded by addEventListener("listener", callback.bind(mediaElement))
    this.paused ? this.play() : this.pause();
}
function muteButtonListener(event) {
    let btn = event.target;
    btn.className = "fas fa-volume-" + (btn.className.includes("up") ? "mute" : "up");
    this.muted = this.muted ? false : true;
}
export { playButtonListener, muteButtonListener };