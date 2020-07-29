// Static data to be used for displaying row content

// Imports
//	interfaces
import { LiteratureTypeInterface } from '../interfaces/row_data_interfaces'

const literatureRatesSelections:Array<LiteratureTypeInterface> = [
	{
		literatureType: {
			display: "Poetry",
			value: "poetry"
		},
		child: {
			genres: [
				{
					display: "Genre 1",
					value: "genre1"
				},
				{
					display: "Genre 2",
					value: "genre2"
				},
				{
					display: "Genre 3",
					value: "genre3"
				},
				{
					display: "Genre 4",
					value: "genre4"
				}
			],
			child: [
				{
					editingType: {
						display: "Standard Proofreading",
						value: "standard"
					},
					child: {
						rates: [
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
								min: 1001,
								max: Infinity,
								perHour: 12,
								perWord: 0.012
							}
						]
					}	
				},
				{
					editingType: {
						display: "Developmental Editing",
						value: "developmental"
					},
					child: {
						rates: [
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
								min: 1001,
								max: Infinity,
								perHour: 20,
								perWord: 0.06
							}
						]
					}
				},
				{
					editingType: {
						display: "Both",
						value: "both"
					},
					child: {
						rates: [
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
								min: 1001,
								max: Infinity,
								perHour: 25,
								perWord: 0.08
							}
						]
					}
				}
			]
		}
	},
	{
		literatureType: {
			display: "Prose",
			value: "prose"
		},
		child: {
			genres: [
				{
					display: "Genre 1",
					value: "genre1"
				},
				{
					display: "Genre 2",
					value: "genre2"
				},
				{
					display: "Genre 3",
					value: "genre3"
				},
				{
					display: "Genre 4",
					value: "genre4"
				}
			],
			child: [
				{
					editingType: {
						display: "Standard Proofreading",
						value: "standard"
					},
					child: {
						rates: [
							{
								min: 0,
								max: 1999,
								flatRate: 100,
								perHour: 0,
								perWord: 0.00
							},
							{
								min: 2000,
								max: 3999,
								flatRate: 125,
								perHour: 0,
								perWord: 0.00
							},
							{
								min: 4000,
								max: 5999,
								flatRate: 150,
								perHour: 0,
								perWord: 0.00
							},
							{
								min: 6000,
								max: 39999,
								perHour: 15,
								perWord: 0.01
							},
							{
								min: 40000,
								max: 59999,
								perHour: 16,
								perWord: 0.01
							},
							{
								min: 60000,
								max: 79999,
								perHour: 16.25,
								perWord: 0.01
							},
							{
								min: 80000,
								max: 149999,
								perHour: 16.30,
								perWord: 0.01
							},
							{
								min: 150000,
								max: Infinity,
								perHour: 16.35,
								perWord: 0.01
							}
						]
					}
				},
				{
					editingType: {
						display: "Developmental Editing",
						value: "developmental"
					},
					child: {
						rates: [
							{
								min: 0,
								max: 1999,
								flatRate: 100,
								perHour: 0,
								perWord: 0.00
							},
							{
								min: 2000,
								max: 3999,
								flatRate: 170,
								perHour: 0,
								perWord: 0.00
							},
							{
								min: 4000,
								max: 5999,
								flatRate: 280,
								perHour: 0,
								perWord: 0.00
							},
							{
								min: 6000,
								max: 39999,
								perHour: 20,
								perWord: 0.03
							},
							{
								min: 40000,
								max: 59999,
								perHour: 23,
								perWord: 0.03
							},
							{
								min: 60000,
								max: 79999,
								perHour: 23.5,
								perWord: 0.03
							},
							{
								min: 80000,
								max: Infinity,
								perHour: 23.75,
								perWord: 0.03
							}
						]
					}
				},
				{
					editingType: {
						display: "Both",
						value: "both"
					},
					child: {
						rates: [
							{
								min: 0,
								max: 1999,
								flatRate: 150,
								perHour: 0,
								perWord: 0.00
							},
							{
								min: 2000,
								max: 3999,
								flatRate: 245,
								perHour: 0,
								perWord: 0.00
							},
							{
								min: 4000,
								max: 5999,
								flatRate: 380,
								perHour: 0,
								perWord: 0.00
							},
							{
								min: 6000,
								max: 39999,
								perHour: 34,
								perWord: 0.02
							},
							{
								min: 40000,
								max: Infinity,
								perHour: 35,
								perWord: 0.02
							}
						]
					}
				}
			]
		}
	}
]

export { literatureRatesSelections }