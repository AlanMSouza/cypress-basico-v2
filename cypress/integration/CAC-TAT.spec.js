/// <reference types="Cypress" />

/// Criando uma suite de testes
describe('Central de Atendimento ao Cliente TAT', function() {
    ///criando um caso de teste
    it('verifica o título da aplicação', function() {
        cy.visit('./src/index.html'); ///visita uma pagina
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT') /// titulo da pagina deve ser igual a Central de Atendimento ao Cliente TAT
    })
  })
   