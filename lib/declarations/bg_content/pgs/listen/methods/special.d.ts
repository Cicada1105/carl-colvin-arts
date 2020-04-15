import { AudioInterface, VideoInterface } from '../interfaces';
declare type media = AudioInterface | VideoInterface;
declare const createCustomControls: (mediaEl: any) => any;
declare const createMediaElement: (el: media) => any;
export { createCustomControls, createMediaElement };
