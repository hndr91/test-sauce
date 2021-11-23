/// <reference types="cypress"/>

describe('Test Login SIAKAD POLINEMA', () => {
    it('Check invalid username and passowrd', () => {
        cy.visit('/')
        cy.get('#username').type('19041000001')
        cy.get('#password').type('ini adalah password yang b aja')
        cy.get('#chk_tampilkan').check()

        // By attribute and value
        // cy.get('[type="submit"]').click()
        // cy.get('[class="btn btn-success uppercase"]').click()
        cy.get('button[type="submit"][class="btn btn-success uppercase"]').click()
        // cy.get('button[type="submit"][class="btn btn-success uppercase"]').click()
        cy.contains('Username / Password Salah').should('be.visible')
    })
})