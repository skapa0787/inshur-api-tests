Feature: Retrieve Customers

@inshur
Scenario: Retrieve all existing customers
Given the following customers are available   
| customers |  
| customer1 |
| customer2 |
| customer3 |
| customer4 |
| customer5 |
| customer6 |
When The request is made to retrieve all customers
Then all customer details are retrieved successfully