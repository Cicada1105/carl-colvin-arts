interface GenericInputInterface<T> {
    id: string;
    data: T;
}
interface LabelInterface {
    text: string;
    forIn: string;
}
interface LabelPropInterface {
    label: LabelInterface;
}
interface InputRowInterface {
    label: LabelInterface;
    content: HTMLDivElement;
}
interface TextAreaInterface {
    rows: string;
    cols: string;
}
interface RangeInterface {
    min: number | string;
    max: number | string;
}
interface TextInputInterface {
    type: string;
    placeholder: string;
}
interface SelectInputInterface {
    options: Array<OptionGroupInterface> | Array<OptionInterface>;
}
interface OptionGroupInterface {
    label: string;
    options: Array<OptionInterface>;
}
interface OptionInterface {
    display: string;
    value: string;
}
interface TextInputRowInterface extends GenericInputInterface<TextInputInterface>, LabelPropInterface {
}
interface TextAreaRowInterface extends GenericInputInterface<TextAreaInterface>, LabelPropInterface {
}
interface SelectInputRowInterface extends GenericInputInterface<SelectInputInterface>, LabelPropInterface {
}
interface NumberInputRowInterface extends GenericInputInterface<RangeInterface>, LabelPropInterface {
}
interface ButtonInputInterface {
    type: string;
    id: string;
}
export { GenericInputInterface, LabelInterface as ILabel, LabelPropInterface as ILabelRow, InputRowInterface as IInputRow, TextAreaInterface as ITextArea, RangeInterface as IRange, TextInputInterface as IText, SelectInputInterface as ISelect, OptionGroupInterface as IOptionGroup, OptionInterface as IOption, TextInputRowInterface as ITextRow, TextAreaRowInterface as IAreaRow, SelectInputRowInterface as ISelectRow, NumberInputRowInterface as INumberRow, ButtonInputInterface as IButton };
