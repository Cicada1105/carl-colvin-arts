import { IOption } from '../../../../global/interfaces/inputs';
interface RateInterface {
    min: number;
    max: number;
    flatRate?: number;
    perHour: number;
    perWord: number;
}
interface IEditingTypeRatesObject {
    rates: RateInterface[];
}
declare type EditingTypeMapping = Record<string, IEditingTypeRatesObject>;
interface IServerData {
    type: string;
    genres: IOption[];
    editing: EditingTypeMapping;
}
export { RateInterface, IEditingTypeRatesObject, EditingTypeMapping, IServerData };
