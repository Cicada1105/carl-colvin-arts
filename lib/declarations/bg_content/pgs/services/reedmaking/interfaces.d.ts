interface TabInterface {
    header: string;
    descriptions: string[];
}
interface IPricing {
    quantity: number;
    cost: number;
}
interface ReedPricingInterface {
    name: string;
    description: string;
    pricing: IPricing[];
}
export { TabInterface, IPricing, ReedPricingInterface };
