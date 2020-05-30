import { AudioInterface, VideoInterface } from '../interfaces';
declare const createAudioCont: (data: AudioInterface) => Promise<any>;
declare const createVideoCont: (data: VideoInterface) => Promise<HTMLDivElement>;
export { createAudioCont, createVideoCont };
