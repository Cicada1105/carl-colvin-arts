declare function LiteratureTypeHandler(event: Event): void;
declare function GenreHandler(event: Event): void;
declare function EditingHandler(event: Event): void;
declare function WordCountHandler(event: Event | KeyboardEvent): void;
declare function DeadlineHandler(event: InputEvent): void;
declare function EmailHandler(event: Event | KeyboardEvent): Promise<void>;
declare function SubmitHandler(event: PointerEvent): void;
export { LiteratureTypeHandler, GenreHandler, EditingHandler, WordCountHandler, DeadlineHandler, EmailHandler, SubmitHandler };
