import type { ReedInterface } from '../interfaces';
import type { IBox } from '@global/interfaces/general';
/************************************/
/************************************/
declare const createHeaderContent: (data: IBox<string>) => HTMLDivElement;
/************************************/
/************************************/
declare const createReedPriceBox: (reedData: ReedInterface) => HTMLElement;
declare const creatDialogBox: () => void;
export { createHeaderContent, createReedPriceBox, creatDialogBox };
