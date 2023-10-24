/// <reference types="cypress"/>

describe('Interações', () => {

    it('Digitar em um campo', () => {
        cy.visit('./')
            .get('.header-logo')//. é classe # é id

        cy.get('.form-control')
            .type('teste@teste.com')//Preencher campos
    });
    it('Click', () => {
        cy.visit('./')
            .get('.header-logo')
        
        //Click simples    
            //cy.get('.fa-user')
            //.click() 
        //Click duplo
            //cy.get('.fa-user')
            //.dblclick()
        //Click botão direito
            //cy.get('.fa-user')
            //.rightclick()
        //Click por cordenadas passando os pixels na tela, geralmente dá erro, podendo usar o parâmetro force
            //cy.get('.fa-user')
            //.click(200, 200, {force:true})
        //Pressionar Enter - mesmo caso do e-mail
            cy.get('.form-control')
            .type('teste@teste.com{enter}')
    });

    it('Select', () => {
        cy.visit('./')
            .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View One').click()
        cy.get('#country')
            .select('usa')
    });
    //Check Box e Radio Button
    it.only('Check box e Radio Button', () => {
        cy.visit('./')
            .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View One').click()
        
        cy.get('#materialUnchecked')
            .check()
            .uncheck()
        cy.get('#javascript')
            .check()
    });
});