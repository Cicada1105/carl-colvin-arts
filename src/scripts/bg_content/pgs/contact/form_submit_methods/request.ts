// This file handles making request to server to send email
import { EmailRequestInterface } from '../interfaces';

let request = (request:EmailRequestInterface) => {
	let contactInfo = {
		"name":request['name'],
		"email":request['email'],
		"subject":request['subject'],
		"message":request['body']
	}
	
	return new Promise((resolve,reject) => {
		const http = new XMLHttpRequest();

		http.open('POST','http://localhost:2020/contact');

		http.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {
					resolve(this.responseText);
				}
				else if (this.status == 400) {
					reject(this.responseText);
				}
			}
		}

		let contactObjStr:string = JSON.stringify(contactInfo);
		http.send(contactObjStr);
	});
}

export { request }