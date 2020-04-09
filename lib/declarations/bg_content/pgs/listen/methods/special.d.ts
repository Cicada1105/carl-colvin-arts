import { AudioInterface, VideoInterface } from '../interfaces';
declare const createCustomControls: (mediaEl: any) => any;
declare const createMediaElement: (mediaEl: AudioInterface | VideoInterface) => any;
export { createCustomControls, createMediaElement };
