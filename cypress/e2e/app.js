describe('general app', () => {
  it('open the app', () => {
    cy.visit('http://localhost:8080')
      .get('.css-e9t3bf-Button')
      .click()
      .get('p')
      .should('have.text', 'Edit src/Home.js and save to reload.')
  })
})
