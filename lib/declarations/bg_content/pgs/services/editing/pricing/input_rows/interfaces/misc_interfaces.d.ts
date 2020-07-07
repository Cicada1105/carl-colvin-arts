interface EditingPricingRowInterface {
    header: string;
    content: HTMLDivElement | null;
}
interface UserSelectedDataInterface {
    literatureType: string;
    genre: string;
    editingType: string;
    wordCount: number;
    deadline?: string;
    email: string;
}
interface EventListener {
    (event: any): void;
}
interface RangeInterface {
    min: number | string;
    max: number | string;
}
export { EditingPricingRowInterface, UserSelectedDataInterface, EventListener, RangeInterface };
