import { AudioInterface, VideoInterface } from '../interfaces';
declare type Media = AudioInterface | VideoInterface;
declare const createMediaElement: (mediaElement: Media) => Promise<HTMLMediaElement>;
declare const createCustomControls: (mediaEl: HTMLMediaElement) => any;
export { createCustomControls, createMediaElement };
