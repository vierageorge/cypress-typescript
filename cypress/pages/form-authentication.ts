export class FormAuthenticationPage {
  readonly url: string;
  readonly usernameInput: ChainableElement;
  readonly passwordInput: ChainableElement;
  readonly loginButton: ChainableButton;

  constructor() {
    this.url = '/login';
    this.usernameInput = () => cy.get('#username');
    this.passwordInput = () => cy.get('#password');
    this.loginButton = () => cy.get('button');
  }

  validateUrl() {
    cy.url().should('include', this.url);
  }

  login(username: string, password: string) {
    this.usernameInput().type(username);
    this.passwordInput().type(password);
    this.loginButton().click();
  }
}
