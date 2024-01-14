describe('Sign In Page', () => {
  it('should sign in with valid credentials', () => {
    cy.visit('/login'); // Replace with the actual URL of your sign-in page

    // Assuming your input fields have specific IDs or classes
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('Welkom01!');

    cy.get('button[type="submit"]').click();
  });
});
