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
        const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet libero interdum, cursus arcu eget, lobortis elit. Integer sagittis lacus ac mauris iaculis tincidunt. Cras suscipit tortor et diam pharetra sollicitudin. Suspendisse vel dui mi. Aliquam semper massa id turpis iaculis, eget convallis diam luctus.'
        cy.get('#firstName').type('Alan')
        cy.get('#lastName').type('Moreira de Souza')
        cy.get('#email').type('alan@gmail.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('#phone-checkbox').click
        cy.get('#phone').type('1234')
        cy.get('button[type="submit"]').click()
        cy.get('.success > strong').should('be.visible')
    })

    it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function(){
        cy.get('#email').type('alan@gmailcom')
        cy.get('button[type="submit"]').click()
        cy.get('span[class="error"').should('be.visible')
    })
    it.only("validar campo telefone com valores nao numericos", function(){
        cy.get('#phone').type('abcd')
        cy.get('#phone').should('have.text', '')
    })
  })
   