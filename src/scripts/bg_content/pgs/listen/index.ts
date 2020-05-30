// Main file that handles loading of listen page

// Imports
//	data
import { audioData, videoData } from './data'
//  methods
import { loadBootstrap, loadAudioRow, loadVideoRow, loadCanvasWave } from './load_methods'
import { createTextElement } from '../../../global/methods'
//  interfaces
import { RowInterface } from './interfaces'

 const loadListenPage = async ():Promise<any> => {
 	// Load bootstrap so font awesome can be used
 	loadBootstrap();
 	// Create header
 	let header:HTMLHeadingElement = createTextElement({
 		element:"h3",
 		idName:"listenHeader",
 		text:"Listen"
 	});
 	// Append to document before rows
 	document.body.appendChild(header);

 	await loadAudioRow(audioData['sketches'] as RowInterface);
 	loadCanvasWave();
 	await loadVideoRow(videoData['poem-reading'] as RowInterface);
 	loadCanvasWave();
 	await loadAudioRow(audioData['ka-ra-zen'] as RowInterface);
 }

 export { loadListenPage }