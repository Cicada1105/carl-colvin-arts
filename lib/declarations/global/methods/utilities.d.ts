import { EmailReport } from '@global/interfaces/errors';
declare const getCurrentFile: () => string;
declare const isValidEmail: (email: string) => Promise<EmailReport>;
export { getCurrentFile, isValidEmail };
