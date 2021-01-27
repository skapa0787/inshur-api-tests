import { rejects } from "assert";
import { browser, protractor, element, by } from "protractor";

const request = require("request");

export class HttpHelper {

    async getResponseGETAPIWithAuthHeader(path: string, basicAuth: any) {

        let response = null, statusCode = null;

        await request({uri: path, headers: basicAuth, strictSSL: false}, async (err, res, body) => {

            if (err) {

                await console.log("API call failed | " + err.message);
                response = err;
            } else {
                await console.log( "API call successfull");
                await console.log( "API call Response Code: " + res.statusCode);
                response = body;
            } 
        });
        while (await this.waitUntilResIsNull(response)) {
            if (response != null) {
                await console.log("API response is set");
            }
        }
        return response;

    }

    async getResponseGETAPI(path: string) {

        let response = null;

        await request({uri: path, strictSSL: false}, async (err, res, body) => {

            if (err) {

                await console.log("API call failed | " + err.message);
                response = err;
            } else {
                await console.log( "API call successfull");
                await console.log( "API call Response Code: " + res.statusCode);
                response = body;
            } 
        });
        while (await this.waitUntilResIsNull(response)) {
            if (response != null) {
                await console.log("API response is set");
            }
        }
        return response;
    }

    async waitUntilResIsNull(res: any) {
        let promise = new Promise<boolean>((resolve, reject) => {
            if (res != null) {
                setTimeout(() => resolve(false), 1)
            } else {
                setTimeout(() => resolve(true), 99)
            }
        });
        let result: boolean = await promise;
        return result;
    }

} 