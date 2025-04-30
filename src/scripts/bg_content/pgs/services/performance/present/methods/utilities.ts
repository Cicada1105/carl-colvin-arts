/*
	Utility functions that can stand on they're own, 
	not dependent upon other functions
*/

// Imports
//	Global
import { createElement } from '@global/methods/elements';

function createStandTray(musicCont:HTMLDivElement):HTMLDivElement {
	let standTrayCont:HTMLDivElement = createElement({idName:"standTray"});

	// Create the back and guard of the tray, adding them along with the music to the container
	let trayBack:HTMLDivElement = createElement({idName:"trayBack"});
	let trayGuard:HTMLDivElement = createElement({idName:"trayGuard"});

	standTrayCont.appendChild(trayBack);
	standTrayCont.appendChild(musicCont);
	standTrayCont.appendChild(trayGuard);

	return standTrayCont;
}
function createStandShaft():HTMLDivElement {
	let standShaftCont:HTMLDivElement = createElement({idName:"standShaftCont"})

	// The metal pipe container will have the pipe and the "hole" that 
	//	consists of a half circle behind and a half circle in front 
	//	mimicking the pipe "entering" the tube
	let metalPipeCont:HTMLDivElement = createElement({idName:"standPipeCont"});
	// Create components of the metal pipe
	let upperHalfCircle:HTMLDivElement = createElement({className:"halfCircle"});
	let metalPipe:HTMLDivElement = createElement({idName:"metalPipe"});
	let lowerHalfCircle:HTMLDivElement = createElement({className:"halfCircle"});
	// Add metal pip components to its container 
	metalPipeCont.appendChild(upperHalfCircle);
	metalPipeCont.appendChild(metalPipe);
	metalPipeCont.appendChild(lowerHalfCircle);

	// Create tube that metal pipe "enters"
	let metalPipeTube:HTMLDivElement = createElement({idName:"metalPipeTube"});

	// Append pipe container and pipe tube to the stand shaft container
	standShaftCont.appendChild(metalPipeCont);
	standShaftCont.appendChild(metalPipeTube);

	return standShaftCont;
}

export { createStandTray, createStandShaft }