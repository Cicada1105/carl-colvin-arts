import { InputInterface, InputTagInterface } from './general_input';
interface TextInputInterface extends InputTagInterface {
    placeholder: string;
}
interface TextAreaInterface extends InputInterface {
    rows: string;
    cols: string;
}
interface SelectInputInterface extends InputInterface {
    optionGroups: Array<OptionGroupInterface>;
}
interface OptionGroupInterface {
    label: string;
    options: Array<OptionInterface>;
}
interface OptionInterface {
    value: string;
    text: string;
}
interface ButtonInputInterface {
    type: string;
    id: string;
    value: string;
}
interface IForm {
    header: string;
    form: {
        textInput: Array<TextInputInterface>;
        selectInput: SelectInputInterface;
        textAreaInput: TextAreaInterface;
    };
    submit: ButtonInputInterface;
}
export { IForm };
export { TextInputInterface, TextAreaInterface, SelectInputInterface, ButtonInputInterface };
export { OptionGroupInterface, OptionInterface };
