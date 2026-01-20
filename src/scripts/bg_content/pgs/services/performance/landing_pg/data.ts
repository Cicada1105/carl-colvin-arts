// This file holds the data specific to the Performance page

// Imports
import { 
	CircleInterface as ICircle, 
	LineInterface as ILine,
	PathInterface as IPath,
	SVGImageInterface as ISVGImage,
	AnimateInterface as IAnimate,
	ISector
} from './interfaces'

const RESOURCES:string = "../../resources";

const IMG_PATH:string = `${RESOURCES}/pg_imgs/performance`;
const SHARED_IMG_PATH:string = `${RESOURCES}/global_imgs/shared/`;

const PERFORMANCES_SUB_PATH:string = "./performances";

interface DimensionsInterface {
	[index:string]: ICircle[] | ILine[] | IPath[];
}

const centerImagesData:ISVGImage[] = [
	{
		href:``,
		x:"112.5",
		y:"112.5",
		width:"75",
		height:"75"
	},
	{
		href:`${SHARED_IMG_PATH}/carl_headshot.png`,
		x:"112.5",
		y:"112.5",
		width:"75",
		height:"75"
	}
]

const sectorData:ISector[] = [
	{
		sectorHeader:{
			text: "Past",
			className: "header",
			x:"66.5",
			y:"70"
		},
		underline: {
			x1:"50",
			y1:"80",
			x2:"103",
			y2:"80",
			stroke:"#de5757",
			strokeWidth:"1"
		},
		descriptions:[
			{
				text: "View my most recent",
				className:"sector_content",
				x:"40",
				y:"95"
			},
			{
				text: "performances and whom",
				className:"sector_content",
				x:"20",
				y:"105"
			},
			{
				text: "I have collaborated with",
				className:"sector_content",
				x:"15",
				y:"115"
			},
			{
				text: "in the past",
				className:"sector_content",
				x:"55",
				y:"125"
			}
		],
		sectorPath: {
			idName:"pastSector",
			d:	"M 97.23847108,178.7 " +
				"L 24.49233716,220.7 " +
				"A 144 144 0 0 1 148.5,6 " +
				"L 148.5,90 " +
				"A 60 60 0 0 0 97.23847108,178.7 Z",
			fill:"#003249",
			fillOpacity:"0",
			children: [
				{
					attributeName:"fill-opacity",
					to:"0.95",
					begin:"indefinite"
				},
				{
					attributeName:"fill-opacity",
					to:"0",
					begin:"indefinite"
				}
			]
		},
		hoverHeader:[
			{
				text:"Previous",
				className:"sector_hover",
				x:"55",
				y:"90"
			},
			{
				text:"Performances",
				className:"sector_hover",
				x:"42.5",
				y:"105"
			}
		],
		link:`${PERFORMANCES_SUB_PATH}/past.html`,
		image: {
			path:`${SHARED_IMG_PATH}/happy_holy_dayz.png`,
			alt:"Past image"
		}
	},
	{
		sectorHeader:{
			text: "Present",
			className: "header",
			x:"129.5",
			y:"225"
		},
		underline: {
			x1:"115",
			y1:"235",
			x2:"182.5",
			y2:"235",
			stroke:"#de5757",
			strokeWidth:"1"
		},
		descriptions:[
			{
				text: "What am I up to? What am I currently",
				className:"sector_content",
				x:"90",
				y:"250"
			},
			{
				text: "working on and with whom?",
				className:"sector_content",
				x:"105",
				y:"260"
			}
		],
		sectorPath: {
			idName:"presentSector",
			d:	"M 201.1615196,181.3 " +
				"L 273.9076534,223.3 " +
				"A 144 144 0 0 1 26.09234656,223.3 " +
				"L 98.83848048,181.3 " +
				"A 60 60 0 0 0 201.1615196,181.3 Z",
			fill:"#003249",
			fillOpacity:"0",
			children: [
				{
					attributeName:"fill-opacity",
					to:"0.95",
					begin:"indefinite"
				},
				{
					attributeName:"fill-opacity",
					to:"0",
					begin:"indefinite"
				}
			]
		},
		hoverHeader:[
			{
				text: "My Music",
				className:"sector_hover",
				x:"125",
				y:"250"
			},
			{
				text: "Stand",
				className:"sector_hover",
				x:"135",
				y:"265"
			}
		],
		link:`${PERFORMANCES_SUB_PATH}/present.html`,
		image: {
			path:`${SHARED_IMG_PATH}/oboe_sheet_music.jpeg`,
			alt:"Present image"
		}
	},
	{
		sectorHeader:{
			text: "Future",
			className: "header",
			x:"200",
			y:"70"
		},
		underline: {
			x1:"185.5",
			y1:"80",
			x2:"254",
			y2:"80",
			stroke:"#de5757",
			strokeWidth:"1"
		},
		descriptions:[
			{
				text: "Come see where you can",
				className:"sector_content",
				x:"185",
				y:"95"
			},
			{
				text: "catch me performing next!",
				className:"sector_content",
				x:"195",
				y:"105"
			},
			{
				text: "I would love to meet you!",
				className:"sector_content",
				x:"205",
				y:"115"
			}
		],
		sectorPath: {
			idName:"futureSector",
			d: 	"M 151.5,90 " +
				"L 151.5,6 " +
				"A 144 144 0 0 1 275.5076628,220.7 " +
				"L 202.761529,178.7 " +
				"A 60 60 0 0 0 151.5,90 Z",
			fill:"#003249",
			fillOpacity:"0",
			children: [
				{
					attributeName:"fill-opacity",
					to:"0.95",
					begin:"indefinite"
				},
				{
					attributeName:"fill-opacity",
					to:"0",
					begin:"indefinite"
				}
			]
		},
		hoverHeader:[
			{
				text: "Future",
				className:"sector_hover",
				x:"212",
				y:"90"
			},
			{
				text: "Performances",
				className:"sector_hover",
				x:"198",
				y:"105"
			}
		],
		link:`${PERFORMANCES_SUB_PATH}/future.html`,
		image: {
			path:`${IMG_PATH}/future.jpeg`,
			alt:"Future image"
		}
	}
]

const commonFilterChildren:IAnimate[] = [
	{
		idName:"noblurAnimation",
		attributeName:"stdDeviation",
		from:"5",
		to:"0",
		begin:"indefinite",
		end:"indefinite",
		fill:"freeze",
		dur:"1s"
	},
	{
		idName:"blurAnimation",
		attributeName:"stdDeviation",
		from:"0",
		to:"5",
		begin:"indefinite",
		end:"indefinite",
		fill:"freeze",
		dur:"1s"
	}
]
const graphicsAttributes:DimensionsInterface = {
	circles: [
		{
			cx:"150",
			cy:"150",
			r:"146",
			fill:"none",
			stroke:"#003249",
			strokeOpacity:"0.55",
			strokeWidth:"4"
		},
		{
			cx:"150",
			cy:"150",
			r:"60",
			fill:"#003249",
			fillOpacity:"0.55"
		}
	],
	lines: [
		{
			x1:"150",
			y1:"90",
			x2:"150",
			y2:"6",
			stroke:"#003249",
			strokeWidth:"3",
			strokeOpacity:"0.55"
		},
		{
			x1:"98.03847578",
			y1:"180",
			x2:"25.29234186",
			y2:"222",
			stroke:"#003249",
			strokeWidth:"3",
			strokeOpacity:"0.55"
		},
		{
			x1:"201.9615243",
			y1:"180",
			x2:"274.7076581",
			y2:"222",
			stroke:"#003249",
			strokeWidth:"3",
			strokeOpacity:"0.55"
		}
	]
	/*imageFilters: [
		{
			idName:"blur",
			filter: {
				stdDeviation:"5",
				children: commonFilterChildren
			}
		},
		{
			idName: "noBlur",
			filter: {
				stdDeviation:"0",
				children: commonFilterChildren
			}
		}
	]*/
}
export { centerImagesData, sectorData, graphicsAttributes }