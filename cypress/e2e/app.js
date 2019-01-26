describe('general app', () => {
  it('open the app', () => {
    cy.visit('http://localhost:8080')
      .getByText(/^Emotion/)
      .click()
      .get('p')
      .should('have.text', 'Edit src/Home.js and save to reload.')
  })
})
