/// <reference types="Cypress" />

/// The purpose of these tests is to verify the functionality of the registration form with both valid and invalid data.

describe('registration form tests', function(){
    beforeEach(function(){
        cy.visit('https://automaticityacademy.ngrok.app/')
        cy.get('a').contains('Register').click()
    })
    it('should verify that the register button works', function(){
        cy.url().should('contain', '/register')
    })
    it('should register successfully with valid data', function(){
        const randomEmail = `testuser${Date.now()}@example.com`
        const randomUsername = `user${Date.now()}`
        cy.get('#username').click().type(randomUsername)
        cy.get('#email').click().type(randomEmail)
        cy.get('#password').click().type('user1234')
        cy.get('.p-button-label.p-c').should('have.text', 'Register').click()
        cy.wait(5000)
        cy.url().should('contain', '/dashboard')

    })
    it('should show an error if username field is left blank', function(){
        const randomEmail = `testuser${Date.now()}@example.com`
        cy.get('#email').click().type(randomEmail)
        cy.get('#password').click().type('user1234')
        cy.get('.p-button-label.p-c').should('have.text', 'Register').click()
        cy.get('.surface-card').should('contain', 'The username field is required.')
    })
    it('should show an error if email field is left blank', function(){
        const randomUsername = `user${Date.now()}`
        cy.get('#username').click().type(randomUsername)
        cy.get('#password').click().type('user1234')
        cy.get('.p-button-label.p-c').should('have.text', 'Register').click()
        cy.get('.surface-card').should('contain', 'The email field is required.')
    })
    it('should show an error if the email adress is already used', function(){
        const randomUsername = `user${Date.now()}`
        cy.get('#username').click().type(randomUsername)
        cy.get('#email').click().type('user@user.com') // The email address was previously used.
        cy.get('#password').click().type('user1234')
        cy.get('.p-button-label.p-c').should('have.text', 'Register').click()
        cy.get('.surface-card').should('contain', 'The email has already been taken.')
    })
    it('should show an error if the email adress is invalid', function(){
        const randomUsername = `user${Date.now()}`
        cy.get('#username').click().type(randomUsername)
        cy.get('#email').click().type('user.com')
        cy.get('#password').click().type('user1234')
        cy.get('.p-button-label.p-c').should('have.text', 'Register').click()
        cy.get('.surface-card').should('contain', 'The email field format is invalid.')

    })
    it('should show an error if password field is left blank', function(){
        const randomEmail = `testuser${Date.now()}@example.com`
        const randomUsername = `user${Date.now()}`
        cy.get('#username').click().type(randomUsername)
        cy.get('#email').click().type(randomEmail)
        cy.get('#password').click()
        cy.get('.p-button-label.p-c').should('have.text', 'Register').click()
        cy.get('.surface-card').should('contain', 'The password field is required.')
    })
    // Already have an account? Log in now! – Link functionality test.
    it('should verify that the "Log in now" option works', function(){
        cy.get('a').contains('Log in now!').click()
        cy.url().should('contain', '/login')
    })
    
   

})