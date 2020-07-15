import { IBox } from '../../../../global/interfaces/general';
import { IPostData } from '../interfaces';
declare let imgPostArray: Array<IPostData>;
declare const createPostCont: (postData: IBox) => HTMLDivElement;
export { createPostCont, imgPostArray };
