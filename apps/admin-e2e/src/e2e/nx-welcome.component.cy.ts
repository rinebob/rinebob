describe('admin', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('rinebob-nx-welcome').should('exist');
  });
});
