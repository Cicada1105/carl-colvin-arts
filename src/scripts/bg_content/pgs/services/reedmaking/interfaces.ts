// This file holds the interfaces that are used by the reedmaking page

interface TabInterface {
	header:string;
	descriptions:string[];
}

interface IPricing {
	quantity:number;
	cost:number;
}

interface ReedPricingInterface {
	name:string;
	description:string;
	pricing:IPricing[];
}

export { TabInterface, IPricing, ReedPricingInterface }