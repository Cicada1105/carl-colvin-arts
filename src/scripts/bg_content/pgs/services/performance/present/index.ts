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
	"In 2015, Chicago-based hip hop artist Kao Ra Zen approached me in need of a " + 
	"woodwind player for some of his projects. Once I accepted, I knew that my " +
	"performance career was to take a strange and wonderful turn. ",
	"After many successful live hip hop shows and recordings as Chicago's sole " +
	"hip hop oboist, I saw the benefits of being versatile and realized that " +
	"versatility is one of the most important aspects of a performer's career. " +
	"I took this to heart and applied it to every performance opportunity, " +
	"whether in the genres ranging from classical to hip hop."
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