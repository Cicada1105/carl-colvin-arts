import { AudioInterface, VideoInterface } from '../interfaces';
declare const createAudioCont: (data: AudioInterface) => Promise<any>;
declare const createVideoCont: (data: VideoInterface) => Promise<any>;
export { createAudioCont, createVideoCont };
