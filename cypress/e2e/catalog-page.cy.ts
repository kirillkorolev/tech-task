describe('Catalog page', () => {
  beforeEach(() => {
    cy.visit('/');
});

  it('Should be redirected to catalog', () => {
    cy.url().should('includes', 'catalog');
  })

  it('Should have title "Cities catalog"', () => {
    cy.get('h1').contains('Cities catalog');
  })

  it('Should render city cards', () => {
    cy.get('[data-test-id="city-card"]').should('have.length', 8);
  })

  it('Every city card have a link to the details page', () => {
    cy.get('[data-test-id="city-card"]').first().find('a').should("have.attr", "href").and("include", "details/1");
  })
})
