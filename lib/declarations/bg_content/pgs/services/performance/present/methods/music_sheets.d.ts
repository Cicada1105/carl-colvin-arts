import { SongInterface } from '../interfaces';
declare const createSheetMusic: (sheets: SongInterface[]) => HTMLDivElement;
declare function createMusicSheet(songs: SongInterface[]): HTMLDivElement;
declare function createMusicPage(song: SongInterface): HTMLElement;
declare function createMusicDescription(desc: string): HTMLDivElement;
export { createSheetMusic, createMusicSheet, createMusicPage, createMusicDescription };
