import { AudioInterface, VideoInterface } from '../interfaces';
declare type Media = AudioInterface | VideoInterface;
declare const createMediaCont: (data: Media) => Promise<HTMLDivElement>;
export { createMediaCont };
