describe('The Dashboard Page', () => {
    beforeEach(() => {
        cy.login()        
        cy.visit(`${Cypress.env('HOST')}dashboard`)
    })

    it('Successfully Articulos List', () => {        
        cy.wait(500)
        cy.get('[name=table-articulos]').find('tr').its('length').should('be.gte', 1) // tiene mas de 1 fila        
    })
})