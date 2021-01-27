import { browser, protractor, element, by } from "protractor";
import { HttpHelper } from "../support/HttpHelper";
import { config } from "../config/config";

const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const request = require("request");
const convert = require("convert");
const encoding = require("encoding");

const httpHelper: HttpHelper = new HttpHelper();

let result = null, response = null, customers = null;


Given(/^the following customers are available$/, async (data) => {
    
    customers = await data.rows();
    return customers;
});

When(/^The request is made to retrieve all customers$/, async () => {
    
    response = null;
    let header = {
        'Authorization': 'Basic ' + Buffer.from('adminuser:adminpassword').toString('base64')
    };
    response = await httpHelper.getResponseGETAPIWithAuthHeader(config.baseUrl + '/customers', header);
    console.log('\nResponse : ' + response);

});

Then(/^all customer details are retrieved successfully$/, async () => {
    
    result = JSON.parse(response);
    for (let i=0; i < customers.length; i++) {
        expect(result.customers[i].username.toLowerCase()).to.equal(customers[i][0], "This Customer is not present: " + customers[0][i]);
        console.log('\n Customer is present: ' + customers[i][0]);
    }
});
