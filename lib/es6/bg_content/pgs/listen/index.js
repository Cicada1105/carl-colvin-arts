// Main file that handles loading of listen page
// Imports
//	data
import { audioData, videoData } from './data';
//  methods
import { loadBootstrap, loadAudioRow, loadVideoRow, loadCanvasWave } from './load_methods';
import { createTextElement } from '../../../global/methods';
const loadListenPage = () => {
    // Load bootstrap so font awesome can be used
    loadBootstrap();
    // Create header
    let header = createTextElement({ element: "h3", idName: "listenHeader", text: "Listen" });
    // Append to document before rows
    document.body.appendChild(header);
    loadAudioRow(audioData['sketches']);
    loadCanvasWave();
    loadVideoRow(videoData['poem-reading']);
    loadCanvasWave();
    loadAudioRow(audioData['ka-ra-zen']);
};
export { loadListenPage };
