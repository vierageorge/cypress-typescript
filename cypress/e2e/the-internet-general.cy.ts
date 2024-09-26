import { MainPage, LinkNames } from '../pages/main';
import { FormAuthenticationPage } from '../pages/form-authentication';
import { SecurePage } from '../pages/secure';

const mainPage = new MainPage();
const formAuthenticationPage = new FormAuthenticationPage();
const securePage = new SecurePage();

describe("General features in The Internet's main page", () => {
  it.skip('should navigate to the main page', () => {
    mainPage.visit();
    cy.url().should('include', 'the-internet');
  });

  it('should be able to authenticate', () => {
    mainPage.visit();
    mainPage.goto(LinkNames.FORM_AUTHENTICATION);
    formAuthenticationPage.validateUrl();
    formAuthenticationPage.login('tomsmith', 'SuperSecretPassword!');
    securePage.validateUrl();
    securePage.logout();
  });
});
