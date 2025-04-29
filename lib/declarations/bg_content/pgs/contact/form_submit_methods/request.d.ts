import { EmailRequestInterface } from '../interfaces';
declare let request: (request: EmailRequestInterface) => Promise<unknown>;
export { request };
