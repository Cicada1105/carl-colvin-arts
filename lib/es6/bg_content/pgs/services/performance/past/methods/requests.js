/*
    This file is for handling requests
*/
// Development server
const BASE_SERVER = "http://localhost:2020/api/performance";
const requestPastData = (subpath) => {
    return new Promise((resolve, reject) => {
        const SERVER = `${BASE_SERVER}/${subpath}`;
        fetch(SERVER, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((body) => {
            body.json().then((data) => {
                resolve(data);
            });
        }).catch((err) => {
            reject(err);
        });
    });
};
export { requestPastData };
