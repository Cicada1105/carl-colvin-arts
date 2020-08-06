declare const getCurrentFile: () => string;
declare const loadBootstrap: () => void;
declare const isValidEmail: (email: string) => Promise<boolean>;
export { loadBootstrap, getCurrentFile, isValidEmail };
