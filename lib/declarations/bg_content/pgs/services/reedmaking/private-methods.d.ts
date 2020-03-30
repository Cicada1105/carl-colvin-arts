import { ReedPricingInterface } from './interfaces';
import { IBox } from '../../../../global/interfaces';
/************************************/
/************************************/
declare const createHeaderContent: (data: IBox) => any;
/************************************/
/************************************/
declare const createReedPriceBox: (reedData: ReedPricingInterface) => any;
export { createHeaderContent, createReedPriceBox };
