describe('Login Test', () => {
    it('Custom commands login', () => {
      cy.login('zeeshannaseem73@gmail.com', '12345678');
      // Add assertions or additional actions after login
      cy.wait(1000)
      cy.contains('Logged in as').should('be.visible');

    });
  });