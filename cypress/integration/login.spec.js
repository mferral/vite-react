describe('The Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4000/login') // change URL to match your dev URL
    })

    it('Unsuccessfully Login', () => {
        cy.get('input[name=email]').type('admin')
        cy.get('input[name=password]').type('admin')
        cy.get('[name=submit]').click()
        cy.wait(500)
        cy.get('[name=alert-error]').should('be.visible')
    })

    it('Successfully Login', () => {
        cy.get('input[name=email]').type('admin')
        cy.get('input[name=password]').type('admin123')
        cy.get('[name=submit]').click()
        cy.wait(500)
        cy.get('[name=alert-error]').should('not.exist')
    })
})