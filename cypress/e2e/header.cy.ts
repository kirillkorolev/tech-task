describe('Details page', () => {
  it('Should navigate to catalog page', () => {
    cy.visit('/');
    cy.get('[data-test-id="city-card"]').first().find('a').click();
    cy.url().should('includes', 'details/1');

    const homeLink = cy.get('[data-test-id="home-link"]');

    homeLink.click();
    cy.url().should('includes', 'catalog');
  })

  it('Should correct attributes for "To home link"', () => {
    cy.visit('/details/1');
    const homeLink = cy.get('[data-test-id="home-link"]');
    homeLink.should('have.attr', 'aria-label', 'To home page');
    homeLink.should("have.attr", "href").and("include", "/");
  })

  it('Should have title "My App"', () => {
    cy.visit('/details/1');
    cy.get('[data-test-id="app-name"]').contains('My App');
  })
})
