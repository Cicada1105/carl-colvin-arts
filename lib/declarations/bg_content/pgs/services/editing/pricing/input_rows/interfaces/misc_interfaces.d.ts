interface UserSelectedDataInterface {
    literatureType: string;
    genre: string;
    editingType: string;
    wordCount: number;
    deadline?: string;
    email: string;
    pricing: {
        flatRate?: number;
        perWord: number;
        perHour: number;
    };
}
export { UserSelectedDataInterface };
