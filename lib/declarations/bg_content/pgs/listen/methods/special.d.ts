import { AudioInterface, VideoInterface } from '../interfaces';
declare type Media = AudioInterface | VideoInterface;
declare const createCustomControls: (mediaEl: HTMLMediaElement) => any;
declare const createMediaElement: (el: Media) => any;
export { createCustomControls, createMediaElement };
