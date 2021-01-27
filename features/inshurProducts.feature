Feature: Retrieve Products

@inshur
Scenario:Retrieve all products in the INSHUR app
  Given The products "Taxi" and "courier" are available
  When The request is made to retrieve all products
  Then the products "Taxi" and "courier" will be retrieved

@inshur
Scenario:Retrieve individual product
  Given The product "Taxi" which has a productId of "1234"
  When The request is made to retrieve this product
  Then The product version "1.0" of "Taxi" is available

@inshur
Scenario:Retrieve non existent product
  Given A product with productId "2222" does not exist
  When The request is made to retrieve this product
  Then An error is thrown "product 2222 not found"