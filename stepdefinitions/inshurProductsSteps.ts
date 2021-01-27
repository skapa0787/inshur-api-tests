import { browser, protractor, element, by } from "protractor";
import { HttpHelper } from "../support/HttpHelper";
import { config } from "../config/config";

const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const request = require("request");
const httpHelper: HttpHelper = new HttpHelper();

let result = null, response = null, product1 = null, product2 = null, productId = null;


Given(/^The products "(.*)" and "(.*)" are available$/, async (prdName1: string, prdName2: string) => {
    
    product1 = prdName1;
    product2 = prdName2;

});

When(/^The request is made to retrieve all products$/, async () => {
    
    response = null;
    response = await httpHelper.getResponseGETAPI(config.baseUrl + '/products');
    console.log('\nResponse : ' + response);

});

Then(/^the products "(.*)" and "(.*)" will be retrieved$/, async (prdName1: string, prdName2: string) => {
    
    result = JSON.parse(response);
    expect(result.products[0].productName.toLowerCase()).that.contains(prdName1.toLowerCase(), "Product Name is incorrect: " + result.products[0].productName );
    expect(result.products[1].productName.toLowerCase()).that.contains(prdName2.toLowerCase(), "Product Name is incorrect: " + result.products[1].productName );
    console.log('\nResult: The products retrieved successfully');

});

Given(/^The product "(.*)" which has a productId of "(.*)"$/, async (prdName1: string, prdId: number) => {
    
    product1 = prdName1;
    productId = prdId;

});

When(/^The request is made to retrieve this product$/, async () => {
    
    response = null;
    response = await httpHelper.getResponseGETAPI(config.baseUrl + '/product/' + productId);
    console.log('\nResponse : ' + response);

});

Then(/^The product version "(.*)" of "(.*)" is available$/, async (prdId: number, prdName1: string) => {
    
    result = JSON.parse(response);
    expect(result.productName.toLowerCase()).that.contains(prdName1.toLowerCase(), "Product Name is incorrect: " + result.productName);
    expect(result.productId).to.equal(productId, "Product Id is incorrect: " + result.productId);
    expect(result.productVersion).to.equal(1.0, "Product version is incorrect: " + result.productVersion);
    console.log('\nResult: The products version is available');

});

Given(/^A product with productId "(.*)" does not exist$/, async (prdId: number) => {
    
    productId = prdId;

});

Then(/^An error is thrown "(.*)"$/, async (error: string) => {
    
    result = JSON.parse(response);
    expect(result.errorMessage.toLowerCase()).that.contains(error.toLowerCase(), "Error message is incorrect: " + result.errorMessage);
    console.log('\nResult: The error message is shown');

});