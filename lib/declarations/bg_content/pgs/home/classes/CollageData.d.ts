import { IBox } from '@global/interfaces/general';
import { IPostData } from '../interfaces';
declare class CollageData {
    private static curr_pos;
    private static img_post_array;
    static storeImage(image: HTMLImageElement, data: IBox<string>): void;
    static getPost(): IPostData;
    static getImage(): HTMLImageElement;
    static getData(): IBox<string>;
    static findIndex(data: IBox<string>): number;
    static isEmpty(): boolean;
    static get current_index(): number;
    static previousImage(): void;
    static goToIndex(index: number): void;
    static nextImage(): void;
}
export default CollageData;
