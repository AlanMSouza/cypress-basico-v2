/// <reference types="Cypress" />

/// Criando uma suite de testes
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html'); ///visita uma pagina
    })
    ///criando um caso de teste
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT') /// titulo da pagina deve ser igual a Central de Atendimento ao Cliente TAT
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Alan')
        cy.get('#lastName').type('Moreira de Souza')
        cy.get('#email').type('alan@gmail.com')
        cy.get('#open-text-area').type('Testando textarea')
        cy.get('#phone-checkbox').click
        cy.get('#phone').type('1234')
        cy.get('button[type="submit"]').click()
        cy.get('.success > strong').should('be.visible')
    })
  })
   