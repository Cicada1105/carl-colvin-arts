// Interfaces to be used on the Reedmaking page

interface IPricing {
	quantity:number;
	cost:number;
}

interface ReedPricingInterface {
	name:string;
	description:string;
	pricing:IPricing[];
}

export { IPricing, ReedPricingInterface }