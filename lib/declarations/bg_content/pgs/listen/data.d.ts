import { RowInterface } from './interfaces';
interface IRow {
    [index: string]: RowInterface;
}
declare const audioData: IRow;
declare const videoData: IRow;
export { audioData, videoData };
