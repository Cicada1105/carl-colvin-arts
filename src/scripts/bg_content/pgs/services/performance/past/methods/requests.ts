/*
	This file is for handling requests
*/

// Imports
import { IRepertoire, ICollaborator, IAnecdote } from '../interfaces';

// Development server
//const BASE_SERVER = "http://localhost:8080/api/performance";
// Production server 
const BASE_SERVER = "https://cca-server.herokuapp.com/api/performance"

type RequestResponseType = IRepertoire[] | ICollaborator[] | IAnecdote[];

const requestPastData:(requestSubPath:string)=>Promise<RequestResponseType> = (subpath:string):Promise<RequestResponseType> => {
	return new Promise((resolve,reject) => {
		const SERVER:string = `${BASE_SERVER}/${subpath}`;

		fetch(SERVER,{
			method:"GET",
			headers:{
				"Content-Type":"application/json"
			}
		}).then((body:any) => {
			body.json().then((data:RequestResponseType) => {
				resolve(data);
			});
		}).catch((err:Error) => {
			reject(err);
		});
	})
}

export { RequestResponseType, requestPastData }