 // <reference types="cypress"/>
//Desafio fazer os casos de testes para a tela de cadastro
//Page Objects - Benefícios: Organização; Manutenção; Responsabilidades (pages); Curva de aprendizado
//Para pessoas novas que irão entrar.

import {faker} from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import register_page from "../support/pages/register_page";

const user_data = require('../fixtures/desafio.json')

const random_name = faker.person.firstName()


describe('Cadastro de Usuário', () => {

    beforeEach('Acessa tela de cadastro', () => {
        //Acessando Tela de Cadastro com POM
       home_page.accessRegisterPage()//É possível saber de quem é a responsabilidade dessa função
    });

    it('Validar campo nome vazio', () => {

        register_page.saveRegister()
        register_page.checkMessage('O campo nome deve ser prenchido')//outra forma
    });

    it('Validar campo e-mail vazio', () => {

        register_page.fillName(user_data.name)
        register_page.saveRegister()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    });

    it('Validar campo e-mail inválido', () => {
        register_page.fillName(user_data.name)
        register_page.fillEmail(user_data.wrong_email)
        register_page.saveRegister()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    });

    it('Validar campo senha vazio', () => {

        register_page.fillName(user_data.name)
        register_page.fillEmail(user_data.email)
        register_page.saveRegister()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Validar campo senha inválido', () => {

        register_page.fillName(user_data.name)
        register_page.fillEmail(user_data.email)
        register_page.fillPassword(user_data.wrong_password)
        register_page.saveRegister()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Cadastro realizado com sucesso', () => {//Validar ao final modal de cadastro realizado e "Bem-vindo + nome"

        register_page.fillName(random_name)//usando fakerjs
        register_page.fillEmail(user_data.email)
        register_page.fillPassword(user_data.password)
        register_page.saveRegister()
        register_page.checkRegisterSuccess(random_name)
    });
})