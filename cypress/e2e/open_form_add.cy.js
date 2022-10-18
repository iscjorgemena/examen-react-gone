describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div.add-content a').click()
    cy.get('.title-modal').contains('Agregar un personaje')
  })
})