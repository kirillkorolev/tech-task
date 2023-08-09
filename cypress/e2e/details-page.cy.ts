describe('Details page', () => {
  it('Should route to details page', () => {
    cy.visit('/');
    cy.get('[data-test-id="city-card"]').first().find('a').click();
    cy.url().should('includes', 'details/1')
  })

  it('Should have title "City details"', () => {
    cy.visit('/details/1');
    cy.get('h1').contains('City details');
  })

  it('Should city title', () => {
    cy.visit('/details/1');
    cy.get('h2').contains('Sydney');
  })
})
