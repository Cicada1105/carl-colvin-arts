/*
	File for initializing present performance page
*/

// Imports
//	Global
import requestData from '../../request';
import { createTextElement, createLoadingText, createFallbackText } from '@global/methods/elements';
//	Local
import { SongInterface } from './interfaces';
import { PerformanceDataInterface } from '../interfaces';
import { createSheetMusic } from './methods/music_sheets';
import { createStand } from './methods/create';

const INTRO_DATA:string[] = [
	"In my decades of performance experience, the oboe has taken me through some " +
	"delightfully unexpected musical experiences. When entering music school, I " +
	"never expected to be working on experimental background music for music videos " +
	"and documentaries, contemporary sextet music, or even music for musical theatre. " +
	"Here is where you can stay updated on where this journey has brought me at this " +
	"moment by seeing what is currently on my music stand."
];

const loadMusicStand = ():void => {
	// Create page header and intro text
	let title:HTMLHeadingElement = createTextElement({
		element:"h1",
		text:"My Music Stand",
		idName:"myMusicStandTitle"
	});
	document.body.appendChild(title);

	INTRO_DATA.forEach((section:string) => document.body.appendChild(createTextElement({ text:section, className:"introParagraph" })))

	// Add loading text to screen while retrieving data from the server
	const loadingText:HTMLParagraphElement = createLoadingText();
	document.body.appendChild(loadingText);
	// Retrieve songs for the music stand from server
  	requestData<PerformanceDataInterface<SongInterface>>("performances/present").then((data:PerformanceDataInterface<SongInterface>) => {
	  	// Create the sheet music for the song data
	  	let sheetMusic:HTMLDivElement = createSheetMusic(data['performances']);
	  	// Create the stand with the sheet music and add to the page
	  	let musicStand:HTMLDivElement = createStand(sheetMusic);
	  	document.body.appendChild(musicStand);	
  	}).catch(e => {
  		let fallbackText:HTMLDivElement = createFallbackText('No music at this time','Try again later');
  		document.body.appendChild(fallbackText);
  	}).finally(() => {
  		// Remove loading text
  		loadingText.remove();
  	})
}

export { loadMusicStand }