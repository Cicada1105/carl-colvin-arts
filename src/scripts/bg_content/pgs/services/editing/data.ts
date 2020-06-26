// Data stored for the editing page

// Imports
import { LiteratureTypeInterface } from './interfaces'

const INTRO:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut enim ligula. Vivamus purus risus, " +
					"dictum sed congue eget, efficitur non nunc. Suspendisse interdum aliquam lorem sed finibus. Maecenas " +
					"congue in elit vel condimentum. Nulla vulputate fringilla aliquet. Sed ut pulvinar mi, at luctus metus. " +
					"Sed sodales erat vitae nulla consequat, non interdum lorem pharetra. In at convallis nisl, ut imperdiet ipsum. ";

const HEADERS:string[] = [
	"Type of Literature",
	"Genre",
	"Type of Editing",
	"Word Count",
	"Deadline",
	"Contact Email"
];

const editingRatesSelection:Array<LiteratureTypeInterface> = [
	{
		"type": {
			"display": "Poetry",
			"name": "poetry"
		},
		"genres": [
			"Genre 1",
			"Genre 2",
			"Genre 3",
			"Genre 4"
		],
		"editingTypes": [
			{
				"type": {
					"display": "Standard Proofreading",
					"name": "standard"
				},
				"rates": [
					{
						min: 0,
						max: 500,
						perHour: 10,
						perWord: 0.00
					},
					{
						min: 501,
						max: 1000,
						perHour: 10,
						perWord: 0.01
					},
					{
						min: 0,
						max: 500,
						perHour: 10,
						perWord: 0.01
					}
				]
			}, 
			{
				"type": {
					"display": "Developmental Editing",
					"name": "developmental"
				},
				"rates": [
					{
						min: 0,
						max: 500,
						perHour: 20,
						perWord: 0.00
					},
					{
						min: 501,
						max: 1000,
						perHour: 20,
						perWord: 0.05
					},
					{
						min: 0,
						max: 500,
						perHour: 20,
						perWord: 0.06
					}
				]
			}, 
			{
				"type": {
					"display": "Both",
					"name": "both"
				},
				"rates": [
					{
						min: 0,
						max: 500,
						perHour: 25,
						perWord: 0.00
					},
					{
						min: 501,
						max: 1000,
						perHour: 25,
						perWord: 0.06
					},
					{
						min: 0,
						max: 500,
						perHour: 25,
						perWord: 0.08
					}
				]
			}
		]

	},
	{
		"type": {
			"display": "Prose",
			"name": "prose"
		},
		"genres": [
			"Genre 1",
			"Genre 2",
			"Genre 3",
			"Genre 4"
		],
		"editingTypes": [
			{
				"type": {
					"display": "Standard Proofreading",
					"name": "standard"
				},
				"rates": [
					{
						min: 0,
						max: 500,
						perHour: 10,
						perWord: 0.00
					},
					{
						min: 501,
						max: 1000,
						perHour: 10,
						perWord: 0.01
					},
					{
						min: 0,
						max: 500,
						perHour: 10,
						perWord: 0.01
					}
				]
			}, 
			{
				"type": {
					"display": "Developmental Editing",
					"name": "developmental"
				},
				"rates": [
					{
						min: 0,
						max: 500,
						perHour: 20,
						perWord: 0.00
					},
					{
						min: 501,
						max: 1000,
						perHour: 20,
						perWord: 0.05
					},
					{
						min: 0,
						max: 500,
						perHour: 20,
						perWord: 0.06
					}
				]
			}, 
			{
				"type": {
					"display": "Both",
					"name": "both"
				},
				"rates": [
					{
						min: 0,
						max: 500,
						perHour: 25,
						perWord: 0.00
					},
					{
						min: 501,
						max: 1000,
						perHour: 25,
						perWord: 0.06
					},
					{
						min: 0,
						max: 500,
						perHour: 25,
						perWord: 0.08
					}
				]
			}
		]
	}
]

export { INTRO, HEADERS, editingRatesSelection }