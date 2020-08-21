import { ReedPricingInterface } from './interfaces';
import { IBox } from '../../../../global/interfaces/general';
/************************************/
/************************************/
declare const createHeaderContent: (data: IBox<string>) => HTMLDivElement;
/************************************/
/************************************/
declare const createReedPriceBox: (reedData: ReedPricingInterface) => HTMLDivElement;
export { createHeaderContent, createReedPriceBox };
