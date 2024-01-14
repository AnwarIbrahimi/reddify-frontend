describe('Sign Up Page', () => {
    it('should sign in with valid credentials', () => {
      cy.visit('/signup'); // Replace with the actual URL of your sign-in page
  
      // Assuming your input fields have specific IDs or classes
      cy.get('input[type="email"]').type('test@test1.com');
      cy.get('input[type="password"]').type('Welkom01!');
  
      cy.get('button[type="submit"]').click();
  
      // Add assertions for successful sign-in, such as checking for a welcome message or a redirect
    });
});
