declare type EmailError = MissingCharacter | RepeatingCharacter | InvalidCharacter | InvalidCharacterLocation | InvalidDomain | InvalidStartingCharacter | InvalidTrailingCharacter | TLDError | SLDError;
interface EmailReport {
    validEmail: boolean;
    report?: EmailError;
}
interface BasicError {
    type: string;
    message: string;
}
interface MissingCharacter extends BasicError {
}
interface RepeatingCharacter extends BasicError {
}
interface InvalidCharacter extends BasicError {
}
interface InvalidCharacterLocation extends BasicError {
    subtype?: string;
}
interface InvalidDomain extends BasicError {
    subtype?: string;
}
interface InvalidStartingCharacter extends InvalidCharacterLocation {
}
interface InvalidTrailingCharacter extends InvalidCharacterLocation {
}
interface TLDError extends InvalidDomain {
}
interface SLDError extends InvalidDomain {
}
export { EmailReport, EmailError, MissingCharacter, RepeatingCharacter, InvalidCharacter, InvalidCharacterLocation, InvalidDomain, InvalidStartingCharacter, InvalidTrailingCharacter, TLDError, SLDError };
