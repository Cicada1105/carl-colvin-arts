// Dynamic data to be used in storing "sub-global" data

// Imports
//	interfaces
import { UserSelectedDataInterface as IUserData } from '../interfaces/misc_interfaces'

// Create storage for maintaining user selected data
let userSelectedData:IUserData = {
	literatureType: "",
	genre: "",
	editingType: "",
	wordCount: 0,
	deadline: "",
	email: "",
	pricing: {
		flatRate:0,
		perWord:0,
		perHour:0
	}
}

export { userSelectedData }