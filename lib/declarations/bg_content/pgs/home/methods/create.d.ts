import { IBox } from '../../../../global/interfaces/general';
import { IPostData } from '../interfaces';
declare let imgPostArray: Array<IPostData>;
declare const createPostCont: (postData: IBox<string>) => HTMLDivElement;
export { createPostCont, imgPostArray };
