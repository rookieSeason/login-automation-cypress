/// <reference types= "cypress"/>

export default class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  fillUsername(username) {
    cy.get('input[name="user-name"]').clear().type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').clear().type(password);
  }

  submit() {
    cy.get('input[type="submit"]').click();
  }

  login(username, password) {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
  assertSuccessfulLogin() {
    // Assert that the URL includes '/inventory.html' after a successful login
    cy.url().should("include", "/inventory.html");
    // Assert that the inventory page is displayed by checking for the presence of an element unique to the inventory page
    cy.get(".inventory_list").should("be.visible");
  }
  logout() {
    // Clicking the menu icon to open the sidebar
    cy.get("#react-burger-menu-btn").click();
    // Clicking the logout link in the sidebar
    cy.get("#logout_sidebar_link").click();
  }
}
