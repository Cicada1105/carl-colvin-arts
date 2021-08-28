/*
	This file is for retrieving editing data from
	the server and making it available to the
	editing page sections to then format accordingly.

	This prevents from multiple request being made per
	page load
*/
import { IServerData } from './interfaces';

export let litEditingServerData:IServerData[] = [];