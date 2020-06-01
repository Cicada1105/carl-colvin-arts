import { RowInterface } from './interfaces';
declare const loadAudioRow: (data: RowInterface) => Promise<any>;
declare const loadVideoRow: (data: RowInterface) => Promise<any>;
declare const loadCanvasWave: () => void;
export { loadAudioRow, loadVideoRow, loadCanvasWave };
