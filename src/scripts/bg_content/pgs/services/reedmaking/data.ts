// Imports
import { TabInterface, ReedPricingInterface } from './interfaces'
import { IBox } from '../../../../global/interfaces/general'

const REEDMAKING_DESCR:string = "Reeds are hard, whether to play on or make. \n" +
								"There's no getting around it. However, \n" +
								"that shouldn't stop you from playing at \n" +
								"your best, and that is why I offer \n" +
								"reedmaking services. I have been making \n" +
								"reeds for 11 years and, like many other \n" + 
								"professional oboists, offer them to the \n" +
								"public for sale. My reeds are all handmade\n" + 
								"from start to finish, from tube cane to \n" +
								"performance-ready, and will not leave my\n" +
								"hand until they are play-tested and at a \n" + 
								"level that I would perform on them \n" +
								"myself."

const ABOUT_DESCR:string = 	"My sale price reflects my years of \n" +
							"experience in reeds and the cane itself. \n" +
							"However, I completely understand that \n" +
							"everyone is different and may not like my \n" +
							"reeds. If this is the case, I would love \n" +
							"the opportunity to make it right and get \n" +
							"the best reed that fits all your needs. \n" +
							"If any of your needs are more immediate, \n" +
							"I am more than happy to work with you. \n" +
							"I normally create and ship reeds within \n" +
							"a week of receiving payment. Please reach \n" +
							"me via the \"Contact\" tab with any \n" +
							"orders, issues, and special instructions."

const introData:IBox<string>[] = [
	{
		header:"Reedmaking",
		content:"Reeds are hard, whether to play on or make. There's no getting around it. However, that " +
		"shouldn't stop you from playing at your best, and that is why I offer reedmaking services." +
		"I have been making reeds for 11 years and, like many other professional oboists, offer " +
		"them to the public for sale. My reeds are all handmade from start to finish, from tube " +
		"cane to performance-ready, and will not leave my hand until they are play-tested and at " +
		"a level that I would perform on them myself."
	},
	{
		header:"About",
		content:"My sale price reflects my years of experience in reeds and the cane itself. However, I " +
		"completely understand that everyone is different and may not like my reeds. If this is " +
		"the case, I would love the opportunity to make it right and get the best reed that fits " +
		"all your needs. If any of your needs are more immediate, I am more than happy to work with " +
		"you. I normally create and ship reeds within a week of receiving payment, Please reach me " +
		"via the \"Contact\" tab with any orders, issues, and special instructions."
	}
]

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

export { REEDMAKING_DESCR, ABOUT_DESCR, introData, tabData }