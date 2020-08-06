// This file will handle which services page to load based on the current file

// Imports
import { getCurrentFile } from '../../../global/methods/utilities'
import { loadEditingPage } from './editing/index'
import { loadPerformancePage } from './performance/index'
import { loadReedmakingPage } from './reedmaking/index'
import { loadWritingPage } from './writing/index'

const loadServicesPage = () => {
	let currPage:string = getCurrentFile();

	switch(currPage) {
		case "editing":
			loadEditingPage();
		break;
		case "performance":
			loadPerformancePage();
		break;
		case "reedmaking":
			loadReedmakingPage();
		break;
		case "writing":
			loadWritingPage();
		break;
	}
}

export { loadServicesPage }