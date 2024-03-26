Cypress.Commands.add('login', (username, password) => {
    // Your login logic here
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type(username);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get(('[data-qa="login-button"]')).click()

});