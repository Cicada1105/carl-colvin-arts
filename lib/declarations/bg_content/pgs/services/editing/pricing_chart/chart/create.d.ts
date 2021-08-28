import { RateInterface as IRate } from '../..//interfaces';
declare const createChart: () => HTMLDivElement;
declare function updateChartBody(rates: IRate[]): void;
export { createChart, updateChartBody };
