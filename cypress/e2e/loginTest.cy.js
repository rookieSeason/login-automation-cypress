/// <reference types= "cypress"/>
describe("Login Test", () => {
  beforeEach(() => {
    // Visit the URL
    cy.visit("https://www.saucedemo.com");
  });

  it("Successfully login with valid credentials and redirect to another page", () => {
    cy.fixture("login.json").then((data) => {
      const { username, password } = data.validUser;

      // Use the custom login command
      cy.login(username, password);

      // Assert that the login was successful
      cy.url().should("include", "/inventory.html");
      cy.contains("Swag Labs").should("be.visible");
    });
  });

  it("Show error messages when login using invalid credentias", () => {
    cy.fixture("login.json").then((data) => {
      const { username, password } = data.invalidUser;
      cy.login(username, password);
    });
  });
});
