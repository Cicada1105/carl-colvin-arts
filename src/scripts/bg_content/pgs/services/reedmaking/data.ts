// Imports
import { TabInterface, ReedPricingInterface } from './interfaces'

const tabData:TabInterface[] = [
	{
		header: "Reed Strength",
		descriptions: [
			"Medium-Easy:Reeds for players who need lighter resistance, faster response, " +
			"and flexible pitch. These are suggested for younger players or adults just " +
			"starting off.",
			"Medium: Reeds with a balance of stability, reliable resistance, and more " + 
			"resistance to blow against than a medium-easy reed. These are what I use in " +
			"my everyday playing.",
			"Medium-Hard: Reeds with a bit more wood left on them, resulting in a larger " + 
			"opening than a medium reed. These reeds are definitely still playable with " +
			"appropriate pitch and balance but require more air and support. These are intended " +
			"for experienced players who like more resistance or want a reed they can adjust."
		]
	},
	{
		header: "Gouge and Shape Details",
		descriptions: [
			"My oboe reeds are made from 10.5-11mm diameter cane, pre-gouged on a Ross " +
			"planer, and gouged on an Innoledy gouger. My English horn cane is also processed " +
			"on a Ross planer and Innoledy gouger and is measured from 11.5-12mm diamerer cane.",
			"My usual oboe shapes are Gilbert -1, Gilbert 1, and Caleb -1, though there " +
			"will be more to come... Gilbert shapes provide a beautifully focused sound " +
			"that nicely balances projection and stability. The Caleb shape provides even " +
			"more projection than the Gilbert shapes and a free sound meant to reach the " +
			"back of the concert hall.",
			"At the moment, my sole English horn shape is Jeanne standard.",
			"Leave a note in your order, and I will be happy to use any shape you would like."
		]
	},
	{
		header: "Staples and Tubes",
		descriptions: [
			"The staples and tubes I personally use are Pisoni silver staples at 47mm " +
			"length for oboe and brass Pisoni tubes for English horn. The staples I use " +
			"for others are Pisoni silver, brass Chiarugi 2's, and synthetic cork 47mm " +
			"length staples. The English horn reeds I make for others are also brass " +
			"Pisoni tubes but also Chudnow gold tubes.",
			"Synthetic cork staples are great for student players  They are durable " +
			"and easily managed for the rigors of a student's playing.",
			"Pisoni staples and tubes provide a wonderfully dark sound that does not " +
			"bog down on itself but that also projects well in the concert hall.",
			"Both Chiarugi and Chudnow staples and tubes provide the opposite affect: " +
			"a very lively sound that responds extremely well due to their thinner walls."
		]
	}
]

const pricingData:ReedPricingInterface[] = [
	{
		name:"Reed 1",
		description: "Has very good cane. Da best",
		pricing: [
			{
				quantity:5,
				cost:50
			}, 
			{
				quantity:10,
				cost:90
			}, 
			{
				quantity:20,
				cost:160
			}
		]
	},
	{
		name:"Reed 2",
		description: "Has really good cane. Better dan da best",
		pricing: [
			{
				quantity:5,
				cost:60
			}, 
			{
				quantity:10,
				cost:110
			}, 
			{
				quantity:20,
				cost:180
			}
		]
	},
	{
		name:"Reed 3",
		description: "Has amazing cane. Top of da line",
		pricing: [
			{
				quantity:5,
				cost:75
			}, 
			{
				quantity:10,
				cost:140
			}, 
			{
				quantity:20,
				cost:240
			}
		]
	},
]

export { tabData, pricingData }