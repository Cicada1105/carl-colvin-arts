// Main file that handles loading of listen page

// Imports
//  Global
//    methods
import { createTextElement } from '../../../global/methods/elements'
import { loadBootstrap, loadingScreen } from '../../../global/methods/utilities'
//  Local
//    data
import { audioData, videoData } from './data'
//    methods
import { loadMediaRow, loadCanvasWave/*, loadContactLink*/ } from './load_methods'
//    interfaces
import { RowInterface } from './interfaces'

 const loadListenPage = ():any => {
 	// Create header
 	let header:HTMLHeadingElement = createTextElement({
 		element:"h3",
 		idName:"listenHeader",
 		text:"Listen"
 	});
    // Create intro
    let intro:HTMLParagraphElement = createTextElement({
        text:"A sampling of past performances and recordings."
    });
 	// Append header and intro to document before rows
 	document.body.appendChild(header);
   document.body.appendChild(intro);

   // Add loading text while audio and video data is being processed
   let loadingText:HTMLElement = loadingScreen();
   document.body.appendChild(loadingText);

   let sketchesPromise:Promise<void> = loadMediaRow(audioData['sketches'] as RowInterface).then(() => loadCanvasWave());
   let poemPromise:Promise<void> = loadMediaRow(videoData['poem-reading'] as RowInterface).then(() => loadCanvasWave());
   let kaRaZenPromise:Promise<void> = loadMediaRow(audioData['ka-ra-zen'] as RowInterface);

   // Remove loading text after all audio and media is done loading
   Promise.all([sketchesPromise,poemPromise,kaRaZenPromise]).then(() => loadingText.remove());

	// Load link to contact page, using current page as reference
	//loadContactLink();
 }

 export { loadListenPage }