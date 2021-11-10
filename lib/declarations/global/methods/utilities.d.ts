import { EmailReport } from '../interfaces/errors';
declare const getCurrentFile: () => string;
declare const loadBootstrap: () => void;
declare const isValidEmail: (email: string) => Promise<EmailReport>;
declare const loadingScreen: () => HTMLElement;
export { loadBootstrap, getCurrentFile, isValidEmail, loadingScreen };
