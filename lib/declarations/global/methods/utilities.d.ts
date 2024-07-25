import { EmailReport } from '../interfaces/errors';
declare const getCurrentFile: () => string;
declare const isValidEmail: (email: string) => Promise<EmailReport>;
declare const loadingScreen: () => HTMLElement;
export { getCurrentFile, isValidEmail, loadingScreen };
