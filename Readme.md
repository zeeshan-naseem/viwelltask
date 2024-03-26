I have used POM, page actions are available under “Pages” folder and test cases are available under “e2e” folder.


1.	Test Scenarios:
User authentication
loginpage_test.cy.js  just login on website with valid credentials and verify success

invalidlogin_ test.cy.js  With invalid credentials and verify appropriate error message 

Product Browsing
Productbrowsing_test.cy.js  this testcase covers the product browsing and verify product details

Cart Management
Addproductsincart_test.cy.js  add product in cart test case
Deleteproductfromcart_test.cy.js  delete product from cart

Checkout Process
Checkout_test.cy.js  complete checkout process and download invoice as well.

3.	Advance Requirements:
Data Driven Testing
Loginusingfixture_test.cy.js  Used fixture and performed login as data driven testing.
Custom Commands:
Customcommandslogin_test.cy.js  Implement custom command for login functionality
4.	Reporting
Used third party mocha reports for generating reports, some reports are available in project folder already created.
5.	Documentation: 
A document is created which outlines test strategy, test coverage, approach to handle advance requirements etc.


