/// <reference types="Cypress" />

/// The purpose of these tests is to verify the functionality of the login form using both valid and invalid data.

describe('login form tests', function(){
    beforeEach(function(){
        cy.visit('https://automaticityacademy.ngrok.app/')
        cy.get('a').contains('Log in').click()
    })
    it('should verify that the login button works', function(){
        cy.url().should('contain', '/login')
    })
    it('should login successfully with valid data', function(){
        cy.get('#email').click().type('user@user.com') // The email address was already used in the registration process.
        cy.get('#password').click().type('user123') // The password was already used in the registration process with this email address above
        cy.get('.p-button-label.p-c').click()
        cy.url().should('contain', '/dashboard')
    })
    it('should show an error if the password field is left blank', function(){
        cy.get('#email').click().type('user@user.com')
        cy.get('.p-button-label.p-c').click()
        cy.get('.surface-card.p-6').should('contain.text', 'The password field is required.')
    })
    it('should show an error if the password is invalid', function(){
        cy.get('#email').click().type('user@user.com')
        cy.get('#password').click().type('user')
        cy.get('.p-button-label.p-c').click()
        cy.get('.surface-card.p-6').should('contain.text', 'The email address or password you entered is invalid')
    })
    it('should show an error if the email address is invalid', function(){
        cy.get('#email').click().type('user.com')
        cy.get('#password').click().type('user123')
        cy.get('.p-button-label.p-c').click()
        cy.get('.surface-card.p-6').should('contain.text', 'The email field must be a valid email address.')
    })
    it('should show an error if the email field is left blank', function(){
        cy.get('#password').click().type('user123')
        cy.get('.p-button-label.p-c').click()
        cy.get('.surface-card.p-6').should('contain.text', 'The email field is required.')
    })
    //Don't have an account?Create today! – Link functionality test.
    it('should verify that the "Create today!" option works', function(){
        cy.get('a').contains('Create today!').click()
        cy.url().should('contain', '/register')
    })
})