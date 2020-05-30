import { ReedPricingInterface } from './interfaces';
import { IBox } from '../../../../global/interfaces';
/************************************/
/************************************/
declare const createHeaderContent: (data: IBox) => HTMLDivElement;
/************************************/
/************************************/
declare const createReedPriceBox: (reedData: ReedPricingInterface) => HTMLDivElement;
export { createHeaderContent, createReedPriceBox };
