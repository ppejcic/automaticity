/// <reference types="Cypress" />

/// The purpose of this test is to verify the functionality of the Sign Up button.
it('sign up button functionality verification', function(){
    cy.visit('https://automaticityacademy.ngrok.app/')
    cy.get('[type="button"]').contains('Sign up').click()
    cy.url().should('contain', '/register')
})
