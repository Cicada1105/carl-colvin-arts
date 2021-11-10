// Main file that handles loading of listen page

// Imports
//	data
import { audioData, videoData } from './data'
//  methods
import { loadMediaRow, loadCanvasWave, loadContactLink } from './load_methods'
import { createTextElement } from '../../../global/methods/elements'
import { loadBootstrap } from '../../../global/methods/utilities'
//  interfaces
import { RowInterface } from './interfaces'

 const loadListenPage = async ():Promise<any> => {
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

 	await loadMediaRow(audioData['sketches'] as RowInterface);
 	loadCanvasWave();
 	await loadMediaRow(videoData['poem-reading'] as RowInterface);
 	loadCanvasWave();
 	await loadMediaRow(audioData['ka-ra-zen'] as RowInterface);

	// Load link to contact page, using current page as reference
	loadContactLink();
 }

 export { loadListenPage }