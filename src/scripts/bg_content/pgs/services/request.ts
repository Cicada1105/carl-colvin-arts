/*
	This file is for implementing the Request
	Builder class to construct a generic request
*/
import RequestBuilder from './request_builder';

export default function requestData<T>(path:string):Promise<T> {
	return new Promise((resolve,reject) => {
		new RequestBuilder<T>()
			.URL(path)
			.Method("GET")
			.makeRequest()
			.then((data:T) => resolve(data))
			.catch((e:Error) => reject(e));
	});
}