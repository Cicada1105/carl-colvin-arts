import { IImage, IBox } from '../../../global/interfaces';
interface ICollage extends IImage {
    idName: string;
}
interface IPost {
    imageData: ICollage;
    postData: IBox;
}
interface IPostData {
    img: HTMLImageElement;
    postData: IBox;
}
export { ICollage, IPost, IPostData };
