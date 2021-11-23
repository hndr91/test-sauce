/// <reference types="cypress"/>

describe('Login Scenario - NIM / Nama', () => {
    // Untuk uname salah pass salah
    it('Uname salah password salah', () => {
        cy.visit('/')
        cy.get('#username').type('19041000001')
        cy.get('#password').type('blablabla')
        // cy.contains('Login').click()

        // By attribute and value
        // cy.get('[class="btn btn-success uppercase"]').click()
        cy.get('button[type="submit"][class="btn btn-success uppercase"]').click()
        
        //Assertion
        cy.contains('Username / Password Salah').should('be.visible')
    })

    it('Login salah 2', () => {
        cy.visit('/')
    })
})