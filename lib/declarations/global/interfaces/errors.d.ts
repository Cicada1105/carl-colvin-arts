interface EmailError {
    type: string;
    message: string;
}
interface MissingCharacter extends EmailError {
}
interface RepeatingCharacter extends EmailError {
}
interface InvalidCharacter extends EmailError {
}
interface InvalidCharacterLocation extends EmailError {
    subtype?: string;
}
interface InvalidDomain extends EmailError {
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
export { MissingCharacter, RepeatingCharacter, InvalidCharacter, InvalidCharacterLocation, InvalidDomain, InvalidStartingCharacter, InvalidTrailingCharacter, TLDError, SLDError };
