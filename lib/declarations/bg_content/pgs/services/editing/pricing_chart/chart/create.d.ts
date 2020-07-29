import { RateInterface as IRate } from '../shared/interfaces';
declare const createChart: () => HTMLDivElement;
declare function updateChartBody(rates: IRate[]): void;
export { createChart, updateChartBody };
