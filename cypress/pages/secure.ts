export class SecurePage {
  readonly url: string;
  readonly logoutButton: ChainableElement;
  constructor() {
    this.url = '/secure';
    this.logoutButton = () => cy.get('a:contains("Logout")');
  }
  validateUrl() {
    cy.url().should('include', this.url);
  }

  logout() {
    this.logoutButton().click();
  }
}
