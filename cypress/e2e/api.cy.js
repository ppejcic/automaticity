/// <reference types="Cypress" />

it('should successfully login with valid credentials', function() {
    cy.visit('https://automaticityacademy.ngrok.app/')  
    cy.request({
        method: 'POST',
        url: '/api/v1/auth/login',
        body: {
          email: 'user@user.com',
          password: 'user123'
        }
      }).then((response) =>{
        expect(response.status).to.eq(200)
      })
    });
    it('should successfully register a new user', function(){
      cy.visit('https://automaticityacademy.ngrok.app/')
      cy.request({
        method: 'POST', 
        url: '/api/v1/auth/register',
        body: {
          username: 'user123456',
          email: 'user123456@users.com',
          password: 'user123'
        }
      }).then((response) =>{
        expect(response.status).to.eq(200)
      })

    })