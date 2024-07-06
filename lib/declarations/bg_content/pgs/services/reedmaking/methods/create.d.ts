import { ReedInterface } from '../interfaces';
import { IBox } from '../../../../../global/interfaces/general';
/************************************/
/************************************/
declare const createHeaderContent: (data: IBox<string>) => HTMLDivElement;
/************************************/
/************************************/
declare const createReedPriceBox: (reedData: ReedInterface) => HTMLElement;
export { createHeaderContent, createReedPriceBox };
