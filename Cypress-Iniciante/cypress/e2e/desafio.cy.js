///<reference types="cypress"/>
/*
Desafio fazer os casos de testes para a tela de cadastro
*/

describe('Cadastro de Usuário', () => {
    
    it.only('Validar campo nome vazio', () => {
        cy.visit('./')
            .get('.header-logo')//Para verificar se um elemento está presente na página
        cy.get('.fa-lock')
            .click()
        cy.get('#btnRegister')
            .click()
        //cy.contains('O campo nome deve ser prenchido').should('be.visible')
        cy.get('.errorLabel').should('have.text','O campo nome deve ser prenchido')//outra forma
    });

    it('Validar campo e-mail vazio', () => {
        cy.visit('./register')
            .get('.account_form')
        cy.get('#user').type('Desafio')
        cy.get('#btnRegister')
            .click()
        cy.contains('O campo e-mail deve ser prenchido corretamente').should('be.visible')
    });

    it('Validar campo e-mail inválido', () => {
        cy.visit('./register')
            .get('.account_form')
        cy.get('#user').type('Desafio')
        cy.get('#email').type('emailerrado')
            cy.get('#btnRegister')
            .click()
        cy.contains('O campo e-mail deve ser prenchido corretamente').should('be.visible')
    });

    it('Validar campo senha vazio', () => {
        cy.visit('./register')
            .get('.account_form')
        cy.get('#user').type('Desafio')
        cy.get('#email').type('emailerrado@teste.com')
        cy.get('#btnRegister')
            .click()
        cy.contains('O campo senha deve ter pelo menos 6 dígitos').should('be.visible')
    });

    it('Validar campo senha inválido', () => {
        cy.visit('./register')
            .get('.account_form')
        cy.get('#user').type('Desafio')
        cy.get('#email').type('emailerrado@teste.com')
        cy.get('#password').type('abc')
        cy.get('#btnRegister')
            .click()
        cy.contains('O campo senha deve ter pelo menos 6 dígitos')
            .should('be.visible')
    });

    it('Cadastro realizado com sucesso', () => {//Validar ao final modal de cadastro realizado e "Bem-vindo + nome"
        cy.visit('./register')
            .get('.account_form')
        cy.get('#user').type('Desafio')
        cy.get('#email').type('emailcerto@teste.com')
        cy.get('#password').type('abc123')
        cy.get('#btnRegister')
            .click()
        cy.contains('Cadastro realizado!').should('be.visible')
        cy.contains('Bem-vindo Desafio').should('be.visible')
    });

});