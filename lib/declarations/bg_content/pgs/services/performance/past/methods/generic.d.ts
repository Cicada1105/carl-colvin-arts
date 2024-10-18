import { IGenericCard, IHeader } from '../interfaces';
declare const createPageSection: (cardTitle: string) => HTMLElement;
declare const createGenericCard: (genericUserData: IGenericCard) => void;
declare const createHeaderGroup: (headers: IHeader[]) => HTMLElement;
export { createPageSection, createGenericCard, createHeaderGroup };
