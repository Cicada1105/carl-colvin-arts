interface TabInterface {
    header: string;
    descriptions: string[];
}
interface ReedPricingInterface {
    name: string;
    description: string;
    pricing: IPricing[];
}
interface IPricing {
    quantity: number;
    cost: number;
}
export { TabInterface, IPricing, ReedPricingInterface };
