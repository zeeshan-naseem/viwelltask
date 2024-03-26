export class LoginPage
{
    loginsignupbutton_locator = ('.shop-menu > .nav > :nth-child(4) > a')
    emailaddress_locator = ('[data-qa="login-email"]')
    password_locator = ('[data-qa="login-password"]')
    loginbutton_locator = ('[data-qa="login-button"]')
    
    
    
    navigate(url)
    {
        cy.visit(url)
    }

    clickloginsignupbutton()
    {
        cy.get(this.loginsignupbutton_locator).click()
    }
    enteremail(email)
    {
        cy.get(this.emailaddress_locator).type(email)
        cy.wait(1000)
    }
    enterpassowrd(password)
    {
        cy.get(this.password_locator).type(password)
        cy.get(1000)
    }
    clicklogin()
    {
        cy.get(this.loginbutton_locator).click()
        cy.wait(1000)
    }
}