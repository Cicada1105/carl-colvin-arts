// Main file that handles loading of listen page

// Imports
//  Global
//    methods
import { createTextElement, createLoadingText } from '../../../global/methods/elements'
//  Local
//    data
import { audioData, videoData } from './data'
//    methods
import { loadMediaRow, loadCanvasWave, loadContactLink } from './load_methods'
//    interfaces
import { RowInterface } from './interfaces'

 const loadListenPage = async ():Promise<void> => {
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
   let loadingText:HTMLElement = createLoadingText();
   document.body.appendChild(loadingText);

   // Load sketches
   await loadMediaRow(audioData['sketches'] as RowInterface);
   loadCanvasWave();
   // Load poem reading
   await loadMediaRow(videoData['poem-reading'] as RowInterface);
   loadCanvasWave();
   // Load Ka Ra Zen performance
   await loadMediaRow(audioData['ka-ra-zen'] as RowInterface);

   // Remove loading text after all audio and media is done loading
   loadingText.remove();

	// Load link to contact page, using current page as reference
	loadContactLink();
 }

 export { loadListenPage }