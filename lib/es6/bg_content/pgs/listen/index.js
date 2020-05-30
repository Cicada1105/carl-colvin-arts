// Main file that handles loading of listen page
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Imports
//	data
import { audioData, videoData } from './data';
//  methods
import { loadBootstrap, loadAudioRow, loadVideoRow, loadCanvasWave } from './load_methods';
import { createTextElement } from '../../../global/methods';
const loadListenPage = () => __awaiter(void 0, void 0, void 0, function* () {
    // Load bootstrap so font awesome can be used
    loadBootstrap();
    // Create header
    let header = createTextElement({
        element: "h3",
        idName: "listenHeader",
        text: "Listen"
    });
    // Append to document before rows
    document.body.appendChild(header);
    yield loadAudioRow(audioData['sketches']);
    loadCanvasWave();
    yield loadVideoRow(videoData['poem-reading']);
    loadCanvasWave();
    yield loadAudioRow(audioData['ka-ra-zen']);
});
export { loadListenPage };
