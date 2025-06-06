import { ITextRow, ISelectRow, IAreaRow, IButton } from '@global/interfaces/inputs';
interface IForm {
    form: {
        textInput: Array<ITextRow>;
        selectInput: ISelectRow;
        textAreaInput: IAreaRow;
    };
    submit: IButton;
}
interface EmailRequestInterface {
    name: string;
    email: string;
    subject: string;
    body: string;
}
export { IForm, EmailRequestInterface };
