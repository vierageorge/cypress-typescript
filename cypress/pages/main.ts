export class MainPage {
  readonly url: string;

  constructor() {
    this.url = '/';
  }

  visit() {
    cy.visit(this.url);
  }

  goto(linkName: LinkNames) {
    cy.contains('a', linkName).click();
  }
}

export enum LinkNames {
  FORM_AUTHENTICATION = 'Form Authentication',
}
