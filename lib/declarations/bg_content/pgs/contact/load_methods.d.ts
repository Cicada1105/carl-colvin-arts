import { TextInputInterface as IText, ButtonInputInterface as IButton } from './interfaces';
declare const loadInputRow: (input: IText) => HTMLDivElement;
declare const loadButtonInput: (input: IButton) => HTMLDivElement;
export { loadInputRow, loadButtonInput };
