// This file holds the data to be handled by the chart pricing selections

// Imports 
import { LiteratureTypeInterface as ILit } from '../shared/interfaces';

const chartSelectionsData:ILit[] = [
	{
		literatureType: "Poetry",
		editingTypes: [
			{
				id: "standardPoetryEditing",
				label: {
					text: "Standard Proofreading",
					for: "standardPoetryEditing"
				},
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
			},
			{
				id: "developmentalPoetryEditing",
				label: {
					text: "Developmental Editing",
					for: "developmentalPoetryEditing"
				},
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
			},
			{
				id: "bothPoetryEditing",
				label: {
					text: "Both",
					for: "bothPoetryEditing"
				},
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
		]
	},
	{
		literatureType: "Prose",
		editingTypes: [
			{
				id: "standardProseEditing",
				label: {
					text: "Standard Proofreading",
					for: "standardProseEditing"
				},
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
			},
			{
				id: "developmentalProseEditing",
				label: {
					text: "Developmental Editing",
					for: "developmentalProseEditing"
				},
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
			},
			{
				id: "bothProseEditing",
				label: {
					text: "Both",
					for: "bothProseEditing"
				},
				rates: [
					{
						min: 0,
						max: 1999,
						flatRate: 79,
						perHour: 0,
						perWord: 0.00
					},
					{
						min: 2000,
						max: 3999,
						flatRate: 149,
						perHour: 0,
						perWord: 0.00
					},
					{
						min: 4000,
						max: 5999,
						flatRate: 218,
						perHour: 0,
						perWord: 0.00
					},
					{
						min: 6000,
						max: Infinity,
						perHour: 32,
						perWord: 0.02
					}
				]
			}
		]
	}
];

export { chartSelectionsData }