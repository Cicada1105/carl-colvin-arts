import { IImage, IBox } from '../../../global/interfaces';
interface ICollage extends IImage {
    idName: string;
}
interface IPost {
    imageData: ICollage;
    postData: IBox;
}
export { IPost, ICollage };
