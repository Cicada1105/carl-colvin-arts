/*
	This file contains the request builder class that 
	is used to access the Carl Colvin Arts live server 
	data
*/

interface RequestInterface {
	URL:string;
	Method:string;
}
class Request implements RequestInterface {
	private _url!:string;
	private _method!:string;

	constructor() { }

	/*  SETTERS  */
	set URL(urlIN:string) {
		this._url = urlIN;
	}
	set Method(methodIN:string) {
		this._method = methodIN;
	}
	/*  GETTERS  */
	get URL():string {
		return this._url;
	}
	get Method():string {
		return this._method;
	}
}

abstract class RequestBuilderBase<T> {
	abstract URL(path:string):RequestBuilderBase<T>;
	abstract Method(method:string):RequestBuilderBase<T>;
	abstract makeRequest():Promise<T>;
}
export default class RequestBuilder<T> extends RequestBuilderBase<T> {
	private _request:Request;
	private _BASE_URL:string = "http://localhost:2020/api";

	constructor() {
		super();
		this._request = new Request();
	}
	public URL(path:string):RequestBuilderBase<T> {
		this._request.URL = `${this._BASE_URL}/${path}`;

		return this;
	}
	public Method(method:string):RequestBuilderBase<T> {
		this._request.Method = method;

		return this;
	}
	public makeRequest():Promise<T> {
		return new Promise((resolve,reject) => {
			fetch(this._request.URL, {
				method: this._request.Method,
				headers: {
					"Content-Type": "application/json"
				}
			}).then((body:Response) => {
				body.json().then((data:T) => resolve(data));
			}).catch((err:Error) => reject(err));
		})
	}
}
