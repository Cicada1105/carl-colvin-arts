import { EmailReport } from '../interfaces/errors';
declare const getCurrentFile: () => string;
declare const loadBootstrap: () => void;
declare const isValidEmail: (email: string) => Promise<EmailReport>;
export { loadBootstrap, getCurrentFile, isValidEmail };
