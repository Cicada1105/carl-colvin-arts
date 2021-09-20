/*
	File for initializing present performance page
*/

// Imports
//	Global
import requestData from '../../request';
import { loadBootstrap } from '../../../../../global/methods/utilities';
//	Local
import { SongInterface } from './interfaces';
import { createSheetMusic } from './methods/music_sheets';
import { createStand } from './methods/create';

const loadMusicStand = async ():Promise<void> => {
	// Load bootstrap to allow fontawesome icons
	loadBootstrap();
	
	// Retrieve songs for the music stand from server
  	let songs:SongInterface[] = await requestData<SongInterface[]>("performances/present");
  	// Create the sheet music for the song data
  	let sheetMusic:HTMLDivElement = createSheetMusic(songs);
  	// Create the stand with the sheet music and add to the page
  	let musicStand:HTMLDivElement = createStand(sheetMusic);
  	document.body.appendChild(musicStand);
}

export { loadMusicStand }