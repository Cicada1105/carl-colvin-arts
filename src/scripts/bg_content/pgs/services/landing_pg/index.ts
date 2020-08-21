/*
	This page will be the central "hub" for all of the services
*/

// Imports
//	methods
import { loadIntro, loadBody } from './methods/load'

const loadServicesLandingPage = () => {
	loadIntro();
	loadBody();
}

export { loadServicesLandingPage }