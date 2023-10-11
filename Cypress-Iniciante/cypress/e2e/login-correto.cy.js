/// <reference types="cypress"/>

describe('Tela de Login - Caminho feliz', () => {
    
    it('Login Correto', () => {
        cy.visit('./')//acessar uma URL
            
        //get() - Encontrar ou selecionar elementos
            .get('.header-logo')
        //contains() Para encontrar elementos por texto onde diminuimos o escopo com get
            cy.get('#top_header').as('cabecalho')
                .contains('Login')
        //find() Para encontrar Elementos e diminuimos o escopo com o get
            cy.get('@cabecalho')
            .find('.fa-user')
        //as() - alias "Apelido ou Atalhos" para grandes comandos
            cy.get('@cabecalho')
            .find('.fa-user').click()


        //cy.get('.right_list_fix > :nth-child(1) > a').click(),
        cy.get('#user').type('teste@teste.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
    });
    it('Login em branco', () => {
        cy.visit('./login')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input')
        cy.contains('E-mail inválido.').should('be.visible')
    });

    it('Senha inválida', () => {
        cy.visit('./login')
        cy.get('#user').type('teste@teste.com')
        cy.get('#btnLogin').click()
        cy.contains("Senha inválida.").should('be.visible')
    });
});