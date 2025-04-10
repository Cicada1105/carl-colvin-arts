// This file holds the interfaces that are used by the reedmaking page

type ReedPreview = Pick<ReedInterface, 'name' | 'description' | 'image'> & { 
	[key: string]: string | undefined;
	displayPrice: string;
};
interface ReedInterface {
	name:string;
	description:string;
	image?: string;
	pricing: ReedPriceType;
	categories?: CategoryInterface[];
}
interface FixedPricingInterface {
	flatRate: number;
}
interface VariablePricingInterface {
	name: string;
	rates: PricingType[];
}
interface CategoryInterface {
	name: string;
	options: string[];
}
type ReedPriceType = FixedPricingInterface | VariablePricingInterface;
type PricingType = {
	name:string;
	cost:number;
}

export {
	ReedInterface, ReedPreview,
	ReedPriceType, PricingType,
	FixedPricingInterface, VariablePricingInterface,
	CategoryInterface
}