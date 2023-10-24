/// <reference types="cypress"/>

export default {
    accessRegisterPage() {
        cy.visit('./')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()

        cy.get('.account_form')
    }
}