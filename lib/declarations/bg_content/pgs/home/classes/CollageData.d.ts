import { IPostData, ICollageBox } from '../interfaces';
declare class CollageData {
    private static curr_pos;
    private static img_post_array;
    static storeImage(image: HTMLImageElement, data: ICollageBox): void;
    static getPost(): IPostData;
    static getImage(): HTMLImageElement;
    static getData(): ICollageBox;
    static findIndex(data: ICollageBox): number;
    static isEmpty(): boolean;
    static get current_index(): number;
    static previousImage(): void;
    static goToIndex(index: number): void;
    static nextImage(): void;
}
export default CollageData;
