import { AudioInterface, VideoInterface } from '../interfaces';
declare const createMediaCont: (data: AudioInterface | VideoInterface) => Promise<HTMLDivElement>;
export { createMediaCont };
