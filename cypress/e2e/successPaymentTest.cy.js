/// <reference types="cypress" />

describe('Check that user redirects to success page', () => {
    beforeEach(() => {
      cy.visit('https://payment-form-test-0101.azurewebsites.net/')
    })
  
    it('verify check out button contains text Buy Now', () => {
      cy.get('.button').contains('Buy Now');
    }),

    it('success message displays after check out', () => {
      cy.get('.button').click(); 
      cy.get('.card h1').should('have.text', 'Success')
    })})