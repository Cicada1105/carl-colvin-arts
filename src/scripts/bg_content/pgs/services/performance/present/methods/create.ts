/*
	File for creating individual parts/sections
	of the My Music Stand page
*/

// Imports
//	Global
import { createElement } from '../../../../../../global/methods/elements';
//	Local
import { createStandTray, createStandShaft } from './utilities';

const createStand = (music:HTMLDivElement):HTMLDivElement => {
	let standCont:HTMLDivElement = createElement({
		idName:"musicStandCont"
	});

	// Create the stand tray (with music on it) and the stand shaft
	let standTray:HTMLDivElement = createStandTray(music);
	let standShaft:HTMLDivElement = createStandShaft();

	// Append the tray and shaft to the stand container
	standCont.appendChild(standTray);
	standCont.appendChild(standShaft);

	return standCont;
}

export { createStand }