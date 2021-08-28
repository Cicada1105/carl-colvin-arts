/*
	File for initializing present performance page
*/

// Imports
import requestData from '../../request';

interface SongInterface {
	name:string;
	by:string;
	description:string;
}

const loadMusicStand = async ():Promise<void> => {
  	console.log("Loading Music Stand");
  	let songs:SongInterface[] = await requestData<SongInterface[]>("performances/present");
  	console.log(songs);
}

export { loadMusicStand }