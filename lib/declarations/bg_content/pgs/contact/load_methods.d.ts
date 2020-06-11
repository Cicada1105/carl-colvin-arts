import { TextInputInterface as IText, SelectInputInterface as ISelect, TextAreaInterface as ITextArea, ButtonInputInterface as IButton } from './interfaces/specific_input';
declare type InputInterface = IText | ISelect | ITextArea;
declare const loadInputRow: (input: InputInterface) => HTMLDivElement;
declare const loadButtonInput: (input: IButton) => HTMLDivElement;
export { loadInputRow, loadButtonInput };
