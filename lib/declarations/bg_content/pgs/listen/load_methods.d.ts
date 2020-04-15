import { RowInterface } from './interfaces';
declare const loadBootstrap: () => void;
declare const loadAudioRow: (data: RowInterface) => Promise<any>;
declare const loadVideoRow: (data: RowInterface) => Promise<any>;
declare const loadCanvasWave: () => void;
export { loadBootstrap, loadAudioRow, loadVideoRow, loadCanvasWave };
