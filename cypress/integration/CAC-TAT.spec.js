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
        cy.get('#open-text-area').type(longText, {delay: 0}) ///exercicio extra 1
        cy.get('#phone-checkbox').click
        cy.get('#phone').type('1234')
        cy.get('button[type="submit"]').click()
        cy.get('.success > strong').should('be.visible')
    })

    ///exercicio extra 2
    it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function(){
        cy.get('#email').type('alan@gmailcom')
        cy.get('button[type="submit"]').click()
        cy.get('span[class="error"').should('be.visible')
    })

    ///exercicio extra 3
    it("validar campo telefone com valores nao numericos", function(){
        cy.get('#phone').type('abcd').should('have.text', '')
    })

    ///exercicio extra 4
    it.only("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function(){
        cy.get('#firstName').type('Alan')
        cy.get('#lastName').type('Moreira de Souza')
        cy.get('#email').type('alan@gmail.com')
        cy.get('#open-text-area').type("teste")
        cy.get('#phone-checkbox').click()
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
  })
   