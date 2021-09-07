// This file holds the interfaces that are used by the reedmaking page

interface ReedPricingInterface {
	name:string;
	description:string;
	pricing:IPricing[];
}
interface IPricing {
	quantity:number;
	cost:number;
}


export { IPricing, ReedPricingInterface }