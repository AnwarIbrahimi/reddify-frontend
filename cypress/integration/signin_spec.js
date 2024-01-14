describe('Sign In Page', () => {
    it('should sign in with valid credentials', () => {
      cy.visit('http://localhost:3000/signin'); // Replace with the actual URL of your sign-in page
  
      // Assuming your input fields have specific IDs or classes
      cy.get('#username').type('test@test.com');
      cy.get('#password').type('Welkom01!');
  
      cy.get('button[type="submit"]').click();
  
      // Add assertions for successful sign-in, such as checking for a welcome message or a redirect
      cy.contains('Welcome, User!').should('be.visible');
    });
  
    it('should show an error message with invalid credentials', () => {
      cy.visit('http://localhost:3000/signin'); // Replace with the actual URL of your sign-in page
  
      cy.get('#username').type('test@test.com');
      cy.get('#password').type('njeh');
  
      cy.get('button[type="submit"]').click();
  
      // Add assertions for an error message being displayed
      cy.contains('Invalid credentials. Please try again.').should('be.visible');
    });
  
    // Add more tests as needed for different scenarios
  });
  