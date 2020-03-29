// This file handles making request to server to send email

let makeRequest = (name:string, email:string, subject:string, body:string) => {
	request(name,email,subject,body).then((res) => {
		console.log("Successfuly sent email:");
		console.log(res);
	}).catch((err) => {
		console.log("Error sending email:");
		console.log(err);
	})
}

let request = (n:string, e:string, sub:string, body:string) => {
	let contactInfo = {
		"name":n,
		"email":e,
		"subject":sub,
		"message":body
	}

	return new Promise((resolve,reject) => {
		const http = new XMLHttpRequest();

		http.open('POST','http://localhost:8080/');
		
		http.setRequestHeader("Content-Type","application/json");

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