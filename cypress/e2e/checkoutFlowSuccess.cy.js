/// <reference types="Cypress" />

/// The purpose of these tests is to verify the functionality of the checkout process.
/// This test is flaky, it passes in the Test Runner, but sometimes fails in headless mode.
describe('checkout process test', {retries: 3},function(){
    it('should checkout successfully', function(){
        cy.visit('https://automaticityacademy.ngrok.app/')
        cy.get('a').contains('Log in').click()
        cy.get('#email').click().type('user@user.com') // The email address was already used in the registration process.
        cy.get('#password').click().type('user123') // The password was already used in the registration process with this email address above
        cy.get('.p-button-label.p-c').click()
        cy.wait(5000)
        cy.contains('.layout-menuitem-text', 'GPUs').click({ force: true })
        cy.contains('.p-button-label.p-c', 'Apply filters').click()
        cy.get('.px-1.ml-auto.p-button.p-component').eq(2).click({ force: true })
        cy.get('.inline-flex.rounded-md').eq(0).click({ force: true })
        cy.contains('.p-button-label.p-c', 'Checkout').click({ force: true })
        cy.wait(5000)
        cy.url().should('include', '/checkout') // Passes in test runner, sometimes fails in headless mode.
        cy.get('.p-button-label.p-c').contains('Next step', { timeout: 10000 }).click({force: true})
        cy.get('.p-button-label.p-c').contains('Make changes').click({force: true})
        cy.get('#first_name').clear({force: true}).type('Marko')
        cy.get('#last_name').clear({force: true}).type('Markovic')
        cy.get('#email').clear({force: true}).type('user@user.com')
        cy.get('#phone_number').clear({force: true}).type('060123456')
        cy.get('#street_and_number').clear({force: true}).type('ulica 1')
        cy.get('#city').clear({force: true}).type('grad')
        cy.get('#postal_code').clear({force: true}).type('112200')
        cy.get('#country').clear({force: true}).type('Zemlja', {force: true})
        cy.get('.p-button-label.p-c').contains('Update').click({force: true})
        cy.get('.p-button-label.p-c').contains('Next step').click({force: true})
        cy.get('.p-button-label.p-c').contains('Make changes').click({force: true})
        cy.get('#cardholder').clear({force: true}).type('Marko Markovic')
        cy.get('.p-dropdown-label.p-inputtext').first().click({force: true})
        cy.get('#card_type').click({force: true})
        cy.contains('Visa').click({force: true})
        cy.get('#card_number').clear({force: true}).type('123456789012', {force: true})
        cy.get('#cvv').clear({force: true}).type('123', {force: true})
        cy.get('#card_expiration_month').click({force: true})
        cy.contains('01').click({force: true})
        cy.get('#card_expiration_year').click({force: true})
        cy.contains('2025').click({force: true})
        cy.get('.p-button-label.p-c').contains('Update').click({force: true})
        cy.get('.p-button-label.p-c').contains('Next step').click({force: true})
        cy.get('.p-button-label.p-c').contains('Place your order!').click({force: true})
        cy.url().should('include', '/dashboard')

    })








})