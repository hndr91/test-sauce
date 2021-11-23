/// <reference types="cypress"/>

describe('Login Page - Standard User Suite', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Check for Standard User - Valid', () => {
        // by ID
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Products').should('be.visible')
    })

    it('Check for Standard User - Invalid username', () => {
        //by attribute name and value
        cy.get('[placeholder="Username"]').type('ora_standard')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('[type="submit"]').click()
        cy.get('[class="error-message-container error"]').should('be.visible')
    })

    it('Check for Standard User - Invalid password', () => {
        //by tag and attribute
        cy.get('input[placeholder="Username"]').type('standard_user')
        cy.get('input[placeholder="Password"]').type('salah_password')
        cy.get('input[type="submit"]').click()
        cy.get('[class="error-message-container error"]').should('be.visible')
    })

    it('Check for Standard User - Invalid username and password', () => {
        //by combination with ID
        cy.get('input[placeholder="Username"]#user-name').type('ora_standard')
        cy.get('input[placeholder="Password"]#password').type('salah_password')
        cy.get('input[type="submit"]#login-button').click()
        cy.get('[class="error-message-container error"]').should('be.visible')
    })

    it('Check for Standard User by Traveling', () => {
        // travel through the DOM
        cy.get('#user-name')
            .parents('form')
            .find('[name="user-name"]').type('standard_user')
            .parents('form')
            .find('[name="password"]').type('secret_sauce')
            .parents('form')
            .find('input').contains('Login').click()
        
        cy.contains('Products').should('be.visible')
    })

    it.only('Contoh .then', () => {
        cy.get('#user-name').then((uname)=>{
            uname.val('Coba aja')
            uname.val('')
            let a = cy.wrap(uname)
            a.type('coba lagi via wrap')
        })
    })
})