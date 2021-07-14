/*
    This file is for handling requests
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Development Server
const SERVER = "http://localhost:2020/api/performance/future";
// Production Server
//const SERVER:string = "https://cca-server.herokuapp.com/api/performance/future";
const requestFuturePerformances = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        yield fetch(SERVER, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((body) => {
            // Parse body data
            body.json().then((data) => {
                resolve(data);
            });
        }).catch((err) => {
            reject(err);
        });
    }));
});
export { requestFuturePerformances };
