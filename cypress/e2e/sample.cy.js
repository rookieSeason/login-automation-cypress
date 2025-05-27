/// <reference types="cypress" />

describe("My first automation using cypress", () => {
  it('Finds the word "cypress"', () => {
    cy.visit("https://www.cypress.io");
    cy.contains("cypress");
  });
});
