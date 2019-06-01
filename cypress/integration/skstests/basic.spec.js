describe("My first cypress test", () => {
    it('should load example webpage', function() {
        cy.visit('/')

        cy.url().should("include", 'example.com/')
        cy.title().should("eq", 'Example Domain')
        //cy.get("h1").contains('Example Domain')

        //cy.get('h1').as('title')
        cy.get(Cypress.env('header_1')).as('title')
        cy.get('@title').contains('Example Domain')
        cy.get('@title').should('be.visible')
    })
})