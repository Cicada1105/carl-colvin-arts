interface ReedPricingInterface {
    name: string;
    description: string;
    pricing: IPricing[];
}
interface IPricing {
    quantity: number;
    cost: number;
}
export { IPricing, ReedPricingInterface };
