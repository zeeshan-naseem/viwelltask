import { LoginPage } from "../Pages/loginpage.cy"
import { Testdata } from "../TestData/Testdata.cy";

let loginpagevar = new LoginPage()
let testd = new Testdata()

it('should login with valid credentials', () => {
    cy.fixture('credentials.json').then(credentials => {
        loginpagevar.navigate(testd.url)
        loginpagevar.clickloginsignupbutton()
        cy.get(loginpagevar.emailaddress_locator).type(credentials.validCredentials.username);
        cy.get(loginpagevar.password_locator).type(credentials.validCredentials.password);
        cy.get(loginpagevar.loginbutton_locator).click();
        // Assertion for successful login
        cy.contains('Logged in as').should('be.visible');
        cy.wait(2000)
    });
});

it('should not login with invalid credentials', () => {
    cy.fixture('credentials.json').then(credentials => {
        loginpagevar.navigate(testd.url)
        loginpagevar.clickloginsignupbutton()
        cy.get(loginpagevar.emailaddress_locator).type(credentials.invalidCredentials.username);
        cy.get(loginpagevar.password_locator).type(credentials.invalidCredentials.password);
        cy.get(loginpagevar.loginbutton_locator).click();
        // Assertion for failed login
        cy.contains('Your email or password is incorrect!').should('be.visible');
        cy.wait(2000)
    });
});