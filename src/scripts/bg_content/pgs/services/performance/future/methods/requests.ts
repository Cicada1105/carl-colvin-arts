/*
	This file is for handling requests
*/

import { IPerformance } from '../interfaces';

// Development Server
const SERVER:string = "http://localhost:2020/api/performance/future";
// Production Server
//const SERVER:string = "https://cca-server.herokuapp.com/api/performance/future";

const requestFuturePerformances:()=>Promise<IPerformance[]> = async ():Promise<IPerformance[]> => {
	return await new Promise(async (resolve,reject) => {
		await fetch(SERVER,{
			method:"GET",
			headers: {
				"Content-Type":"application/json"
			}
		}).then((body:any) => {
			// Parse body data
			body.json().then((data:IPerformance[]) => {
				resolve(data);
			})
		}).catch((err:Error) => {
			reject(err);
		})
	});
}

export { requestFuturePerformances }